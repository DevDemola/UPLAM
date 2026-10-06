import { FiArrowLeft } from "react-icons/fi";
import { usePageMeta } from "../lib/hooks";
import { Button } from "../components/ui";

export default function NotFound() {
  usePageMeta("Page not found");
  return (
    <section className="section">
      <div className="container--narrow" style={{ display: "grid", gap: "1.25rem", justifyItems: "start", paddingBlock: "4rem" }}>
        <p className="eyebrow">404</p>
        <h1 style={{ fontSize: "var(--step-5)" }}>This page wandered off.</h1>
        <p className="lede">The page you’re looking for doesn’t exist or has moved. Let’s get you back home.</p>
        <Button to="/" iconLeft={<FiArrowLeft />}>
          Back to home
        </Button>
      </div>
    </section>
  );
}
