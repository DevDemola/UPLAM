import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiCheckCircle, FiAlertCircle, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { site, fullAddress, directionsUrl, mailUrl, telUrl, whatsappUrl } from "../data/site";
import { usePageMeta } from "../lib/hooks";
import { Button, PageHero, Reveal } from "../components/ui";
import { VisitSection } from "../components/blocks";
import "./Contact.css";

const topics = ["General enquiry", "Prayer request", "Planning a visit", "Joining a ministry"];

const channels = [
  { Icon: FaWhatsapp, label: "WhatsApp", value: "Chat with us", href: whatsappUrl(), hint: "Fastest response" },
  { Icon: FiPhone, label: "Call", value: site.phone, href: telUrl },
  { Icon: FiMail, label: "Email", value: site.email, href: mailUrl },
  { Icon: FiMapPin, label: "Visit", value: fullAddress, href: directionsUrl },
];

export default function Contact() {
  usePageMeta("Contact", "Get in touch with Uplight Apostolic Ministry — send a prayer request, ask a question or plan your visit.");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errors, setErrors] = useState({});

  function validate(form) {
    const next = {};
    if (!form.name.value.trim()) next.name = "Please tell us your name.";
    if (!form.email.value.trim()) next.email = "We need an email to reply to you.";
    else if (!form.email.validity.valid) next.email = "That email address doesn’t look right.";
    if (form.message.value.trim().length < 10) next.message = "Please write a little more (at least 10 characters).";
    return next;
  }

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) {
      form.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const fieldProps = (name) => ({
    id: name,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We’d love to hear from you."
        lede="Have a question, need prayer or want to worship with us? Reach out — a member of our team will get back to you."
        image="photo18"
        position="50% 30%"
      />

      <section className="section" aria-labelledby="contact-title">
        <div className="container contact">
          <Reveal className="contact__aside">
            <h2 id="contact-title">Reach us directly</h2>
            <ul role="list" className="channels">
              {channels.map(({ Icon, label, value, href, hint }) => (
                <li key={label}>
                  <a
                    className="channel"
                    href={href}
                    {...(/^https?:/.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <span className="channel__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="channel__text">
                      <span className="channel__label">
                        {label}
                        {hint && <span className="channel__hint">{hint}</span>}
                      </span>
                      <span className="channel__value">{value}</span>
                    </span>
                    <FiArrowUpRight className="channel__arrow" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="contact__form-wrap card" delay={0.08}>
            {status === "sent" ? (
              <div className="form-success" role="status">
                <FiCheckCircle aria-hidden="true" />
                <h2>Thank you — message received.</h2>
                <p>We’ll be in touch soon. If it’s urgent, please reach us on WhatsApp.</p>
                <Button variant="secondary" onClick={() => setStatus("idle")}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit} noValidate>
                <h2>Send a message</h2>
                <p className="form__intro">Prayer requests are kept confidential and shared only with our pastoral team.</p>

                <div className="form__row">
                  <div className="field">
                    <label htmlFor="name">Your name</label>
                    <input type="text" autoComplete="name" {...fieldProps("name")} />
                    {errors.name && <p className="field__error" id="name-error">{errors.name}</p>}
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" autoComplete="email" inputMode="email" {...fieldProps("email")} />
                    {errors.email && <p className="field__error" id="email-error">{errors.email}</p>}
                  </div>
                </div>

                <div className="form__row">
                  <div className="field">
                    <label htmlFor="phone">
                      Phone <span className="field__optional">(optional)</span>
                    </label>
                    <input type="tel" autoComplete="tel" inputMode="tel" id="phone" name="phone" />
                  </div>
                  <div className="field">
                    <label htmlFor="topic">What’s this about?</label>
                    <select id="topic" name="topic" defaultValue={topics[0]}>
                      {topics.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea rows={5} {...fieldProps("message")} />
                  {errors.message && <p className="field__error" id="message-error">{errors.message}</p>}
                </div>

                <input type="hidden" name="_subject" value="New message from the UPLAM website" />
                {/* Honeypot for spam bots */}
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="visually-hidden" aria-hidden="true" />

                {status === "error" && (
                  <p className="form__alert" role="alert">
                    <FiAlertCircle aria-hidden="true" />
                    Something went wrong sending your message. Please try again, or{" "}
                    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">message us on WhatsApp</a>.
                  </p>
                )}

                <button type="submit" className="btn btn--primary btn--block" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <VisitSection id="find-us" />
    </>
  );
}
