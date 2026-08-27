import { site } from "./site";

type W = Window & { gtag?: (...args: unknown[]) => void };

export function trackConversion(kind: "form" | "call" | "whatsapp") {
  if (typeof window === "undefined") return;
  const w = window as W;
  const label = site.conversions[kind];
  if (w.gtag && label && !label.includes("REPLACE")) {
    w.gtag("event", "conversion", { send_to: label });
  }
  if (w.gtag) {
    w.gtag("event", `lead_${kind}`, { event_category: "engagement" });
  }
}
