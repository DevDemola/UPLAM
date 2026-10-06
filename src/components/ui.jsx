import { Link } from "react-router-dom";
import { m, useReducedMotion } from "framer-motion";
import "./ui.css";

/**
 * Button — renders a router <Link> for internal paths, <a> for external
 * URLs, and <button> otherwise.
 * variant: "primary" | "secondary" | "ghost" | "light" | "outline-light"
 */
export function Button({ to, href, variant = "primary", size, icon, iconLeft, children, className = "", ...rest }) {
  const cls = ["btn", `btn--${variant}`, size && `btn--${size}`, className].filter(Boolean).join(" ");
  const content = (
    <>
      {iconLeft && <span className="btn__icon" aria-hidden="true">{iconLeft}</span>}
      <span>{children}</span>
      {icon && <span className="btn__icon" aria-hidden="true">{icon}</span>}
    </>
  );
  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>;
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {content}
      </a>
    );
  }
  return <button type="button" className={cls} {...rest}>{content}</button>;
}

/** Responsive WebP photo from /public/images. */
export function Photo({ name, alt, sizes = "(min-width: 900px) 50vw, 100vw", eager = false, className = "", ...rest }) {
  return (
    <img
      src={`/images/${name}.webp`}
      srcSet={`/images/${name}-sm.webp 640w, /images/${name}.webp 1080w`}
      sizes={sizes}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : undefined}
      className={className}
      {...rest}
    />
  );
}

/** Fades content up as it scrolls into view. Respects reduced-motion. */
export function Reveal({ as = "div", delay = 0, y = 24, children, ...rest }) {
  const reduce = useReducedMotion();
  const MotionTag = m[as];
  if (reduce) {
    const Tag = as;
    return <Tag {...rest}>{children}</Tag>;
  }
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function SectionHeading({ eyebrow, title, lede, align = "left", action, id }) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      <div className="section-heading__text">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={id}>{title}</h2>
        {lede && <p className="lede">{lede}</p>}
      </div>
      {action && <div className="section-heading__action">{action}</div>}
    </Reveal>
  );
}

/** Hero banner used at the top of inner pages. */
export function PageHero({ eyebrow, title, lede, image, position = "center", children }) {
  return (
    <section className="page-hero">
      {image && (
        <div className="page-hero__media" aria-hidden="true">
          <Photo name={image} alt="" eager sizes="100vw" style={{ objectPosition: position }} />
        </div>
      )}
      <div className="container page-hero__inner">
        {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
        <h1>{title}</h1>
        {lede && <p className="page-hero__lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
