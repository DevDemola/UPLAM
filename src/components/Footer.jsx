import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { nav, site, fullAddress, directionsUrl, mailUrl, telUrl, whatsappUrl } from "../data/site";
import { gatherings } from "../data/schedule";
import { formatTime, nextOccurrence } from "../lib/schedule";
import "./Footer.css";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function Footer() {
  const socials = [
    { href: whatsappUrl(), label: "WhatsApp", Icon: FaWhatsapp },
    { href: site.social.facebook, label: "Facebook", Icon: FaFacebookF },
    { href: site.social.instagram, label: "Instagram", Icon: FaInstagram },
    { href: site.social.youtube, label: "YouTube", Icon: FaYoutube },
  ].filter((s) => s.href);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link to="/" className="footer-brand" aria-label={`${site.name} — home`}>
              <span className="footer-brand__logo">
                <img src="/images/logo-96.png" alt="" width="56" height="51" loading="lazy" />
              </span>
              <span>
                <span className="footer-brand__name">{site.name}</span>
                <span className="footer-brand__tag">
                  {site.scripture.ref} · {site.tagline}
                </span>
              </span>
            </Link>
            <p className="site-footer__verse">“{site.scripture.text}”</p>
            <ul role="list" className="socials">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h2>Gatherings</h2>
            <ul role="list" className="footer-times">
              {gatherings.map((g) => (
                <li key={g.id}>
                  <span>{g.title}</span>
                  <span>
                    {g.rule === "lastOfMonth" ? `Last ${DAYS[g.weekday].slice(0, 3)}` : DAYS[g.weekday].slice(0, 3)} ·{" "}
                    {formatTime(nextOccurrence(g).start)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h2>Explore</h2>
            <ul role="list" className="footer-links">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h2>Visit</h2>
            <address>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                {fullAddress}
              </a>
              <a href={telUrl}>{site.phone}</a>
              <a href={mailUrl}>{site.email}</a>
            </address>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Bayeku, Ikorodu · Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
