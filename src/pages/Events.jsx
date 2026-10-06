import { FiCalendar, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { specialEvents } from "../data/schedule";
import { whatsappUrl } from "../data/site";
import { usePageMeta } from "../lib/hooks";
import { Button, PageHero, Photo, Reveal, SectionHeading } from "../components/ui";
import { GatheringsList, CtaBand } from "../components/blocks";
import "./Events.css";

export default function Events() {
  usePageMeta("Services & events", "Weekly service times and special programmes at Uplight Apostolic Ministry, Ikorodu.");
  const featured = specialEvents.find((e) => e.featured);
  const others = specialEvents.filter((e) => !e.featured);

  return (
    <>
      <PageHero
        eyebrow="Services & events"
        title="Every week, a place to meet with God."
        lede="Join us on Sundays, midweek and in prayer. Add any gathering to your calendar so you never miss one."
        image="photo10"
        position="50% 30%"
      />

      <section className="section" aria-labelledby="weekly-title">
        <div className="container">
          <SectionHeading
            id="weekly-title"
            eyebrow="Weekly rhythm"
            title="Gatherings"
            lede="All times are Lagos time (WAT). Dates update automatically."
          />
          <GatheringsList />
        </div>
      </section>

      {featured && (
        <section className="section section--sand" aria-labelledby="featured-title">
          <div className="container">
            <Reveal className="featured-event">
              <div className="featured-event__media">
                <Photo name={featured.image} alt="Miracle Voices leading praise" sizes="(min-width: 900px) 50vw, 100vw" />
              </div>
              <div className="featured-event__body">
                <span className="badge">Featured programme</span>
                <h2 id="featured-title">{featured.title}</h2>
                <p className="featured-event__when">
                  <FiCalendar aria-hidden="true" /> {featured.when}
                </p>
                <p className="lede">{featured.description}</p>
                <Button
                  href={whatsappUrl(`Hello UPLAM! Please share details for ${featured.title}.`)}
                  iconLeft={<FaWhatsapp />}
                >
                  Get the next date
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="special-title">
        <div className="container">
          <SectionHeading id="special-title" eyebrow="Through the year" title="Special programmes" />
          <ul role="list" className="special-grid">
            {others.map((e, i) => (
              <Reveal as="li" key={e.id} className="special card" delay={i * 0.06}>
                <div className="special__img">
                  <Photo name={e.image} alt="" sizes="(min-width: 800px) 50vw, 100vw" />
                </div>
                <div className="special__body">
                  <p className="special__when">{e.when}</p>
                  <h3>{e.title}</h3>
                  <p>{e.description}</p>
                  <a
                    className="text-link"
                    href={whatsappUrl(`Hello UPLAM! Please share details for ${e.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ask for details <FiArrowRight aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand image="photo20" />
    </>
  );
}
