/**
 * Church leadership. Add `image: "/images/<file>.webp"` to a leader to show
 * their portrait; leaders without a photo get a monogram avatar.
 */
export const leaders = [
  { name: "Prophet S.S. Osho (JP)", role: "Founder & General Overseer", memorial: true },
  { name: "Lady Evang. F.T. Osho (JP)", role: "Mummy G.O." },
  { name: "Pastor I.O. Osho", role: "Lead Pastor", lead: true },
  { name: "Pastor (Mrs) R.O. Osho", role: "Lead Pastor's Wife" },
  { name: "Asst. Pastor S.O. Osho", role: "Assistant Pastor" },
  { name: "Elder K.A. Popoola", role: "Elder" },
  { name: "Elder M.S. Odupitan", role: "Elder" },
  { name: "Elder M.O. Shobanjo", role: "Elder" },
];

/** "Pastor (Mrs) R.O. Osho" → "RO" (first initial + surname) */
export function initials(name) {
  const cleaned = name
    .replace(/\(.*?\)/g, "")
    .replace(/\b(Prophet|Lady|Evang|Pastor|Asst|Elder)\.?/g, "")
    .trim();
  const parts = cleaned.split(/[\s.]+/).filter(Boolean);
  if (!parts.length) return "";
  const first = parts[0][0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}
