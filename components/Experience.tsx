"use client";

import { useEffect, useState } from "react";
import { experienceWords, experienceYears } from "@/data/profile";

/**
 * Years of experience, recomputed in the visitor's browser from the career start date.
 * `initial` is the value computed when the page was rendered, so the HTML is correct
 * for crawlers and link previews; the effect keeps it current between deploys.
 */
export default function Experience({ initial, as = "number" }: { initial: number; as?: "number" | "words" }) {
  const [years, setYears] = useState(initial);
  useEffect(() => setYears(experienceYears()), []);
  return <>{as === "words" ? experienceWords(years) : years}</>;
}
