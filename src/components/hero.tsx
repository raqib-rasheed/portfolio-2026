"use client";

import type { PointerEvent } from "react";
import type { MotionValue } from "framer-motion";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { Mark } from "@/components/mark";
import { NowCard } from "@/components/now-card";

const LINES = [
  { text: "The interfaces", factor: 0.35, accent: false },
  { text: "behind products", factor: 0.7, accent: false },
  { text: "people run", factor: 1, accent: false },
  { text: "every day.", factor: 1.2, accent: true },
] as const;

export function Hero() {
  const reduce = useReducedMotion() === true;
  const vx = useSpring(0, { stiffness: 160, damping: 18, mass: 0.4 });
  const vy = useSpring(0, { stiffness: 160, damping: 18, mass: 0.4 });

  function onMove(event: PointerEvent<HTMLHeadingElement>) {
    if (reduce || event.pointerType !== "mouse") return;
    vx.set(clamp(event.movementX * 0.45, -14, 14));
    vy.set(clamp(event.movementY * 0.28, -8, 8));
  }

  return (
    <header>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <a href="#top" className="inline-flex items-center gap-2 text-sm text-bone">
          <Mark size={20} />
          <span>Raqib Rasheed</span>
        </a>
        <p className="font-mono text-xs text-bone/50">Senior frontend engineer · Bangalore</p>
        <a
          href="mailto:raqib.dev@gmail.com"
          className="font-mono text-xs text-bone/70 sm:ml-auto"
        >
          raqib.dev@gmail.com
        </a>
      </div>

      <div className="mt-8 grid items-stretch gap-3 lg:grid-cols-12">
        <h1
          className="text-[clamp(2.8rem,7vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.045em] lg:col-span-8"
          onPointerMove={onMove}
          onPointerLeave={() => {
            vx.set(0);
            vy.set(0);
          }}
        >
          {LINES.map((line) => (
            <KineticLine
              key={line.text}
              text={line.text}
              factor={line.factor}
              accent={line.accent}
              vx={vx}
              vy={vy}
              still={reduce}
            />
          ))}
        </h1>
        <div className="lg:col-span-4 lg:row-span-2">
          <NowCard />
        </div>
        <p className="glass rounded-2xl p-5 text-lg leading-snug text-bone/75 lg:col-span-5">
          Senior team lead at Deloitte, for Edward Jones. Before that, Medline, Growfin, and Turbolab.
        </p>
        <p className="glass flex flex-col justify-between rounded-2xl p-5 font-mono text-xs uppercase tracking-[0.16em] text-bone/50 lg:col-span-3">
          <span>Based in</span>
          <span className="mt-8 text-sm normal-case tracking-normal text-bone">Bangalore</span>
        </p>
      </div>
    </header>
  );
}

function KineticLine({
  text,
  factor,
  accent,
  vx,
  vy,
  still,
}: {
  text: string;
  factor: number;
  accent: boolean;
  vx: MotionValue<number>;
  vy: MotionValue<number>;
  still: boolean;
}) {
  const x = useTransform(vx, (value) => value * factor);
  const y = useTransform(vy, (value) => value * factor * 0.45);
  const rotate = useTransform(vx, (value) => value * factor * 0.08);

  return (
    <motion.span
      className={`block ${accent ? "text-accent" : "text-bone"}`}
      style={still ? undefined : { x, y, rotate }}
    >
      {text}
    </motion.span>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
