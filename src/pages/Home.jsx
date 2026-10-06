import { Link } from "react-router-dom";
import { m, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { site, whatsappUrl } from "../data/site";
import { ministries } from "../data/ministries";
import { upcomingGatherings, formatTime, relativeDay } from "../lib/schedule";
import { useNow, usePageMeta } from "../lib/hooks";
import { Button, Photo, Reveal, SectionHeading } from "../components/ui";
import { VisitSection } from "../components/blocks";
import "./Home.css";

const expectations = [
  { title: "A warm welcome", text: "Our ushers will greet you at the door and help you find your way — no awkward moments." },
  { title: "Spirit-led worship", text: "Joyful, heartfelt praise led by our choir, Miracle Voices. Sing along or simply soak it in." },
  { title: "Bible-based teaching", text: "Practical messages rooted in God’s Word that speak to everyday life." },
  { title: "Come as you are", text: "No pressure and no performance — just come and experience God’s presence with us." },
];

const featuredMinistries = ["seeds", "youth", "good-women", "miracle-voices"].map((id) =>
  ministries.find((m) => m.id === id)
);

function NextGatheringCard() {
  const now = useNow();
  const [next, ...rest] = upcomingGatherings(now);
  if (!next) return null;
  return (
    <div className="next-card" role="status" aria-live="polite">
      <p className="next-card__label">{next.next.live ? "Happening now" : "Next gathering"}</p>
      <p className="next-card__title">{next.title}</p>
      <p className="next-card__time">
        {next.next.live ? `Started ${formatTime(next.next.start)}` : `${relativeDay(next.next.start, now)} · ${formatTime(next.next.start)}`}
      </p>
      {rest[0] && (
        <p className="next-card__then">
          Then {rest[0].title} · {relativeDay(rest[0].next.start, now)}, {formatTime(rest[0].next.start)}
        </p>
      )}
      <Link to="/#visit" className="next-card__link">
        <FiMapPin aria-hidden="true" /> Directions & times <FiArrowRight aria-hidden="true" />
      </Link>
    </div>
  );
}

export default function Home() {
  usePageMeta(null, "Uplight Apostolic Ministry (UPLAM) is a Spirit-filled church family in Bayeku, Ikorodu, Lagos. Join us Sundays at 9:00 AM.");
  const reduce = useReducedMotion();
  const rise = (delay) =>
    reduce ? {} : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] } };

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media" aria-hidden="true">
          <Photo name="photo7" alt="" eager sizes="100vw" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <m.p className="eyebrow eyebrow--light" {...rise(0)}>
              {site.scripture.ref} · Bayeku, Ikorodu
            </m.p>
            <m.h1 id="hero-title" {...rise(0.08)}>
              Step into the <em>light.</em>
            </m.h1>
            <m.p className="hero__lede" {...rise(0.16)}>
              A Spirit-filled church family worshipping, praying and growing together in God’s Word
              for over fifteen years. Wherever you’re coming from, there’s a seat for you.
            </m.p>
            <m.div className="hero__actions" {...rise(0.24)}>
              <Button to="/#visit" variant="light" icon={<FiArrowRight />}>
                Plan your visit
              </Button>
              <Button to="/events" variant="outline-light">
                Service times
              </Button>
            </m.div>
          </div>
          <m.div className="hero__aside" {...rise(0.35)}>
            <NextGatheringCard />
          </m.div>
        </div>
      </section>

      {/* ---------- WELCOME ---------- */}
      <section className="section welcome" aria-labelledby="welcome-title">
        <div className="container welcome__grid">
          <Reveal className="welcome__text">
            <p className="eyebrow">Welcome home</p>
            <h2 id="welcome-title">A Christ-centred family where lives are transformed.</h2>
            <div className="prose">
              <p className="lede">
                We’re a church committed to teaching the truth of God’s Word and nurturing a community
                where people encounter God, grow in faith and experience His love in a real, personal way.
              </p>
              <p>
                Through sound teaching, sincere worship and strong fellowship we equip one another to live
                with purpose — and to carry that light into our families, Ikorodu and beyond.
              </p>
            </div>
            <dl className="stats">
              <div>
                <dt>Years of faithfulness</dt>
                <dd>15+</dd>
              </div>
              <div>
                <dt>Ministries & teams</dt>
                <dd>{ministries.length}</dd>
              </div>
              <div>
                <dt>Gatherings each week</dt>
                <dd>3</dd>
              </div>
            </dl>
            <Link to="/about" className="text-link">
              Our story & leadership <FiArrowRight aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal className="welcome__media" delay={0.1}>
            <div className="frame welcome__photo-main">
              <Photo name="photo5" alt="Members following along during Sunday service" />
            </div>
            <div className="frame welcome__photo-sub">
              <Photo name="photo9" alt="Members greeting one another warmly" sizes="(min-width: 900px) 20vw, 50vw" />
            </div>
            <figure className="welcome__verse">
              <blockquote>“Let there be light.”</blockquote>
              <figcaption>{site.scripture.ref}</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------- WHAT TO EXPECT ---------- */}
      <section className="section section--tint" aria-labelledby="expect-title">
        <div className="container">
          <SectionHeading
            id="expect-title"
            eyebrow="Your first Sunday"
            title="What to expect"
            lede="Visiting a new church can feel like a big step. Here’s what a Sunday at UPLAM looks like."
          />
          <ol className="expect" role="list">
            {expectations.map((item, i) => (
              <Reveal as="li" key={item.title} className="expect__item" delay={i * 0.06}>
                <span className="expect__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- MINISTRIES ---------- */}
      <section className="section" aria-labelledby="ministries-title">
        <div className="container">
          <SectionHeading
            id="ministries-title"
            eyebrow="Find your people"
            title="There’s a place for every age and season."
            action={
              <Link to="/ministries" className="text-link">
                All {ministries.length} ministries <FiArrowRight aria-hidden="true" />
              </Link>
            }
          />
          <ul role="list" className="ministry-preview">
            {featuredMinistries.map((m, i) => (
              <Reveal as="li" key={m.id} delay={i * 0.06}>
                <Link to={`/ministries#${m.id}`} className="ministry-tile">
                  <div className="ministry-tile__img">
                    <Photo name={m.image} alt="" sizes="(min-width: 1024px) 25vw, (min-width: 600px) 50vw, 100vw" />
                  </div>
                  <div className="ministry-tile__body">
                    <span className="ministry-tile__label">{m.label}</span>
                    <h3>{m.name}</h3>
                    <p>{m.short}</p>
                  </div>
                  <span className="ministry-tile__arrow" aria-hidden="true">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- VISION ---------- */}
      <section className="section section--dark vision" aria-labelledby="vision-title">
        <div className="container vision__grid">
          <Reveal className="frame vision__photo">
            <Photo name="photo6" alt="The Word being ministered at UPLAM" />
          </Reveal>
          <Reveal className="vision__text" delay={0.1}>
            <p className="eyebrow">Our vision · {site.tagline}</p>
            <h2 id="vision-title">
              “And God said, Let there be light: <span>and there was light.</span>”
            </h2>
            <p className="lede">
              Our name and our calling come from the first words God spoke over creation. We believe He
              still speaks light into dark places — into homes, hearts and futures — and that His light
              always brings joy.
            </p>
            <div className="vision__actions">
              {site.social.youtube ? (
                <Button href={site.social.youtube} variant="light" icon={<FiArrowUpRight />}>
                  Watch recent messages
                </Button>
              ) : (
                <Button to="/events" variant="light" icon={<FiArrowRight />}>
                  Join us this week
                </Button>
              )}
              <Button href={whatsappUrl("Hello UPLAM, I'd like someone to pray with me.")} variant="outline-light" iconLeft={<FaWhatsapp />}>
                Request prayer
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- MOMENTS ---------- */}
      <section className="section moments" aria-labelledby="moments-title">
        <div className="container">
          <SectionHeading
            id="moments-title"
            eyebrow="Church moments"
            title="Fifteen years of joy, together."
            action={
              <Link to="/gallery" className="text-link">
                View the gallery <FiArrowRight aria-hidden="true" />
              </Link>
            }
          />
          <Reveal className="mosaic">
            {[
              ["photo22", "The choir in full voice"],
              ["photo12", "SEEDS Kids Church"],
              ["photo13", "Anniversary cake cutting"],
              ["photo8", "Women in worship"],
              ["photo16", "Choristers rejoicing"],
            ].map(([name, alt], i) => (
              <Link to="/gallery" key={name} className={`frame mosaic__item mosaic__item--${i + 1}`}>
                <Photo name={name} alt={alt} sizes={i === 0 ? "(min-width: 900px) 50vw, 100vw" : "(min-width: 900px) 25vw, 50vw"} />
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <VisitSection />
    </>
  );
}
