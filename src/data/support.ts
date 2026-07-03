import type { SupportCardData } from "../components/SupportCard";

/** Content for the "Currently Supporting" card — edit these facts freely. */
export type SupportContent = Omit<SupportCardData, "icon" | "delay">;

export const SUPPORT: SupportContent = {
  label: "Currently Supporting",
  title: "Manchester United",
  line: "Supporting through thick and thin since 2015.",
  href: "https://www.manutd.com/",
  hoverAccent: "red",
};
