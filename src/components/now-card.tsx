"use client";

import { useState } from "react";

const ROLES = [
  {
    label: "Deloitte",
    detail: "Senior team lead · now",
    line: "I lead frontend for Edward Jones, on their modern investment-management project.",
  },
  {
    label: "Medline",
    detail: "Software consultant",
    line: "I built a patients-per-day census.",
  },
  {
    label: "Growfin",
    detail: "Software engineer",
    line: "I built the collections email, and the editor that sends it.",
  },
] as const;

export function NowCard() {
  const [index, setIndex] = useState(0);
  const role = ROLES[index] ?? ROLES[0];

  return (
    <div className="glass flex h-full min-h-[320px] flex-col rounded-2xl p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone/45">
        Where I&apos;ve worked
      </p>
      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Where I've worked">
        {ROLES.map((item, itemIndex) => {
          const selected = itemIndex === index;
          return (
            <button
              key={item.label}
              type="button"
              aria-pressed={selected}
              onClick={() => setIndex(itemIndex)}
              className={`h-10 border px-3 font-mono text-sm ${
                selected
                  ? "border-accent text-accent"
                  : "border-white/15 text-bone/70"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <p className="mt-8 text-lg leading-snug text-bone">{role.line}</p>
      <p className="mt-auto pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-bone/40">
        {role.detail}
      </p>
    </div>
  );
}
