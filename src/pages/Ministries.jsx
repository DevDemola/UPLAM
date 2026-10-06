import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ministries, ministryGroups } from "../data/ministries";
import { whatsappUrl } from "../data/site";
import { usePageMeta } from "../lib/hooks";
import { Button, PageHero, Photo, Reveal } from "../components/ui";
import { CtaBand } from "../components/blocks";
import "./Ministries.css";

export default function Ministries() {
  usePageMeta("Ministries", "Fellowships and serve teams at UPLAM — SEEDS Kids Church, UPLAM Youth, Good Women, Good Men, Miracle Voices choir and more.");
  const [group, setGroup] = useState("all");
  const visible = ministries.filter((m) => group === "all" || m.group === group);

  return (
    <>
      <PageHero
        eyebrow="Ministries"
        title="Grow together. Serve together."
        lede="From SEEDS Kids Church to our choir and media team, every ministry is a place to belong, grow in faith and use your gifts."
        image="photo21"
        position="50% 30%"
      />

      <section className="section" aria-labelledby="ministries-list-title">
        <div className="container">
          <div className="ministries-toolbar">
            <h2 id="ministries-list-title" className="visually-hidden">All ministries</h2>
            <div className="chips" role="group" aria-label="Filter ministries">
              {ministryGroups.map((g) => (
                <button
                  key={g.id}
                  className="chip"
                  aria-pressed={group === g.id}
                  onClick={() => setGroup(g.id)}
                >
                  {g.label}
                  <span className="chip__count">
                    {g.id === "all" ? ministries.length : ministries.filter((m) => m.group === g.id).length}
                  </span>
                </button>
              ))}
            </div>
            <p className="ministries-toolbar__hint">
              Not sure where you fit? <a href={whatsappUrl("Hello UPLAM, I'd like help finding a ministry to join.")} target="_blank" rel="noopener noreferrer">Ask us on WhatsApp</a>
            </p>
          </div>

          <ul role="list" className="ministry-list">
            {visible.map((m) => (
              <Reveal as="li" key={m.id} id={m.id} className="ministry-card">
                <div className="ministry-card__img">
                  <Photo name={m.image} alt={`${m.name} — ${m.label}`} sizes="(min-width: 900px) 45vw, 100vw" />
                  <span className="ministry-card__group">{m.group === "fellowship" ? "Fellowship" : "Serve team"}</span>
                </div>
                <div className="ministry-card__body">
                  <p className="ministry-card__label">{m.label}</p>
                  <h3>{m.name}</h3>
                  <p>{m.description}</p>
                  <Button
                    href={whatsappUrl(`Hello UPLAM! I'd like to join ${m.name} (${m.label}).`)}
                    variant="secondary"
                    size="sm"
                    iconLeft={<FaWhatsapp />}
                  >
                    Join {m.name}
                  </Button>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Ready to get involved?"
        text="The best first step is simply showing up on a Sunday. Say hello after service and we’ll connect you with a ministry leader."
        image="photo19"
      />
    </>
  );
}
