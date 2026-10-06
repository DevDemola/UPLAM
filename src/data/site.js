/**
 * Single source of truth for church details.
 * Update contact info, links and schedule here — every page reads from this file.
 */

export const site = {
  name: "Uplight Apostolic Ministry",
  shortName: "UPLAM",
  tagline: "Vision of Joy",
  scripture: {
    text: "And God said, Let there be light: and there was light.",
    ref: "Genesis 1:3",
  },
  foundedYear: 2009, // 15th anniversary was celebrated on 29 Sept 2024

  address: {
    line1: "10/12 Church Street, off Arobieke Street",
    line2: "Macaulay Bus Stop, Bayeku Road",
    city: "Ikorodu, Lagos, Nigeria",
  },

  phone: "+234 704 015 1940",
  whatsapp: "2347040151940", // international format, digits only
  email: "uplamchurch@gmail.com",

  social: {
    facebook: "", // e.g. "https://facebook.com/uplam" — leave empty to hide
    instagram: "",
    youtube: "", // when set, "Watch the message" buttons link here
  },

  // Formspree endpoint used by the contact form
  formEndpoint: "https://formspree.io/f/xvzpqyjd",
};

export const fullAddress = `${site.address.line1}, ${site.address.line2}, ${site.address.city}`;

export const mapsQuery = encodeURIComponent(
  "Church Street, Arobieke Street, Bayeku Road, Ikorodu, Lagos"
);
export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

export const whatsappUrl = (message = "Hello UPLAM! I'd like to know more about the church.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const telUrl = `tel:${site.phone.replace(/\s/g, "")}`;
export const mailUrl = `mailto:${site.email}`;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ministries", label: "Ministries" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];
