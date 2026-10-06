import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX, FiMaximize2 } from "react-icons/fi";
import { gallery } from "../data/gallery";
import { usePageMeta, useScrollLock } from "../lib/hooks";
import { PageHero, Photo } from "../components/ui";
import { CtaBand } from "../components/blocks";
import "./Gallery.css";

export default function Gallery() {
  usePageMeta("Gallery", "Photos from worship, fellowship and celebrations at Uplight Apostolic Ministry.");
  const [index, setIndex] = useState(null);
  const lastTrigger = useRef(null);

  const open = (i, e) => {
    lastTrigger.current = e.currentTarget;
    setIndex(i);
  };
  const close = useCallback(() => {
    setIndex(null);
    requestAnimationFrame(() => lastTrigger.current?.focus());
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Church moments."
        lede="Worship, fellowship and celebration — including our 15th anniversary thanksgiving."
        image="photo17"
        position="50% 50%"
      />

      <section className="section" aria-label="Photo gallery">
        <div className="container">
          <ul role="list" className="masonry">
            {gallery.map((img, i) => (
              <li key={img.src} className="masonry__item">
                <button className="masonry__btn" onClick={(e) => open(i, e)} aria-label={`View photo: ${img.alt}`}>
                  <Photo
                    name={img.src}
                    alt={img.alt}
                    sizes="(min-width: 1024px) 33vw, (min-width: 600px) 50vw, 100vw"
                    width={img.tall ? 690 : 1080}
                    height={img.tall ? 1034 : 721}
                  />
                  <span className="masonry__zoom" aria-hidden="true">
                    <FiMaximize2 />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {index !== null && <Lightbox index={index} setIndex={setIndex} onClose={close} />}

      <CtaBand title="Come and make memories with us." image="photo23" />
    </>
  );
}

function Lightbox({ index, setIndex, onClose }) {
  const dialogRef = useRef(null);
  const total = gallery.length;
  const img = gallery[index];
  useScrollLock(true);

  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [setIndex, total]);
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [setIndex, total]);

  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Tab") {
        // keep focus inside the dialog
        const focusables = dialogRef.current.querySelectorAll("button");
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  // Swipe on touch devices
  const touchX = useRef(null);
  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
    touchX.current = null;
  };

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${total}`}
      ref={dialogRef}
      tabIndex={-1}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        <FiX />
      </button>
      <button className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Previous photo">
        <FiChevronLeft />
      </button>
      <figure className="lightbox__figure">
        <img key={img.src} src={`/images/${img.src}.webp`} alt={img.alt} />
        <figcaption>
          <span>{img.alt}</span>
          <span className="lightbox__count">
            {index + 1} / {total}
          </span>
        </figcaption>
      </figure>
      <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Next photo">
        <FiChevronRight />
      </button>
    </div>
  );
}
