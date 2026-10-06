import { FiBookOpen, FiHeart, FiUsers, FiSun } from "react-icons/fi";
import { site } from "../data/site";
import { leaders, initials } from "../data/leaders";
import { usePageMeta } from "../lib/hooks";
import { PageHero, Photo, Reveal, SectionHeading } from "../components/ui";
import { CtaBand } from "../components/blocks";
import "./About.css";

const pillars = [
  { Icon: FiBookOpen, title: "Rooted in the Word", text: "Sound, practical Bible teaching that equips believers to live with purpose and confidence." },
  { Icon: FiSun, title: "Spirit-led worship", text: "Sincere, joyful worship that makes room for people to genuinely encounter God." },
  { Icon: FiHeart, title: "Devoted to prayer", text: "From WayOut mornings to monthly night vigils, prayer is the heartbeat of our church." },
  { Icon: FiUsers, title: "A real family", text: "Strong fellowship across every generation — from SEEDS kids to our elders." },
];

export default function About() {
  usePageMeta("About us", "The story, beliefs and leadership of Uplight Apostolic Ministry in Bayeku, Ikorodu, Lagos.");

  const lead = leaders.filter((l) => l.lead || l.memorial);
  const team = leaders.filter((l) => !l.lead && !l.memorial);

  return (
    <>
      <PageHero
        eyebrow="About UPLAM"
        title="A light set on a hill in Ikorodu."
        lede="We exist to welcome, equip and empower people to walk out their faith daily — impacting their families, communities and the world for Christ."
        image="photo13"
        position="50% 35%"
      />

      {/* Story */}
      <section className="section" aria-labelledby="story-title">
        <div className="container story">
          <Reveal className="story__text">
            <p className="eyebrow">Our story</p>
            <h2 id="story-title">Fifteen years of God’s faithfulness.</h2>
            <div className="prose">
              <p className="lede">
                Uplight Apostolic Ministry was founded by the late Prophet S.S. Osho (JP). Our name and
                our vision — a “Vision of Joy” — flow from {site.scripture.ref}: wherever God speaks, light
                breaks through.
              </p>
              <p>
                From our home in Bayeku, Ikorodu, we have grown into a church family with eight ministries
                serving children, youth, women and men. In September 2024 we
                celebrated our 15th anniversary — a season of thanksgiving themed “Celebrating God’s
                Faithfulness.”
              </p>
              <p>
                Today, under the leadership of Pastor I.O. Osho, we continue to be a Christ-centred church
                committed to teaching the truth of God’s Word and nurturing a community where lives are
                genuinely transformed.
              </p>
            </div>
          </Reveal>
          <Reveal className="story__media" delay={0.1}>
            <div className="frame story__photo">
              <Photo name="photo11" alt="The entrance decorated for UPLAM's 15th anniversary celebration" />
            </div>
            <div className="story__badge">
              <span className="story__badge-num">15</span>
              <span>years of<br />faithfulness</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission pillars */}
      <section className="section section--tint" aria-labelledby="pillars-title">
        <div className="container">
          <SectionHeading
            id="pillars-title"
            eyebrow="What we value"
            title="Everything we do flows from four commitments."
          />
          <ul role="list" className="pillars">
            {pillars.map(({ Icon, title, text }, i) => (
              <Reveal as="li" key={title} className="pillar card" delay={i * 0.06}>
                <span className="pillar__icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" aria-labelledby="leaders-title">
        <div className="container">
          <SectionHeading
            id="leaders-title"
            eyebrow="Leadership"
            title="Shepherds who serve."
            lede="Our pastors and elders give oversight, care and direction to the UPLAM family."
          />

          <div className="leaders-featured">
            {lead.map((l, i) => (
              <Reveal key={l.name} className={`leader-feature${l.memorial ? " leader-feature--memorial" : ""}`} delay={i * 0.08}>
                <Avatar leader={l} size="lg" />
                <div>
                  {l.memorial && <p className="leader-feature__tag">In loving memory</p>}
                  <h3>{l.name}</h3>
                  <p>{l.role}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <ul role="list" className="leaders-grid">
            {team.map((l, i) => (
              <Reveal as="li" key={l.name} className="leader" delay={i * 0.05}>
                <Avatar leader={l} />
                <div>
                  <h3>{l.name}</h3>
                  <p>{l.role}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand image="photo3" />
    </>
  );
}

function Avatar({ leader, size = "md" }) {
  return (
    <span className={`avatar avatar--${size}`} aria-hidden="true">
      {leader.image ? <img src={leader.image} alt="" loading="lazy" /> : initials(leader.name)}
    </span>
  );
}
