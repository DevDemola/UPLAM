import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { nav, site, whatsappUrl } from "../data/site";
import { useScrollLock } from "../lib/hooks";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const toggleRef = useRef(null);

  useScrollLock(open);

  // Close the menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  // Elevate header once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the menu and returns focus to the toggle
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
        <div className="container site-header__bar">
          <Link to="/" className="brand" aria-label={`${site.name} — home`}>
            <img src="/images/logo-96.png" alt="" width="48" height="43" />
            <span className="brand__text">
              <span className="brand__name">Uplight</span>
              <span className="brand__sub">Apostolic Ministry</span>
            </span>
          </Link>

          <nav className="site-nav" aria-label="Main">
            <ul role="list">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === "/"}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__actions">
            <Link to="/#visit" className="btn btn--primary btn--sm site-header__cta">
              Plan a visit
            </Link>
            <button
              ref={toggleRef}
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Rendered outside <header>: its backdrop-filter would otherwise trap position: fixed */}
      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          <ul role="list">
            {nav.map((item, i) => (
              <li key={item.to} style={{ "--i": i }}>
                <NavLink to={item.to} end={item.to === "/"}>
                  {item.label}
                  <FiArrowRight aria-hidden="true" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__footer">
          <Link to="/#visit" className="btn btn--primary btn--block">
            Plan a visit
          </Link>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--block">
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
