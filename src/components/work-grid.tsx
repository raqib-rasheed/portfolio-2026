"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { CASES, type CaseStudy } from "@/content/career";
import { CasePreview } from "@/components/case-preview";

export function WorkGrid() {
  const [selected, setSelected] = useState<string | null>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const active = CASES.find((item) => item.id === selected) ?? null;

  function open(id: string) {
    returnFocus.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSelected(id);
  }

  const close = useCallback(() => {
    setSelected(null);
    requestAnimationFrame(() => returnFocus.current?.focus());
  }, []);

  useEffect(() => {
    if (!active) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [active, close]);

  return (
    <section id="work" tabIndex={-1} aria-labelledby="work-title" className="mt-28 outline-none">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">01</p>
          <h2 id="work-title" className="mt-2 text-3xl tracking-tight">
            Selected work
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-bone/55 sm:text-right">
          Open a case. The frame is a live control, not a screenshot.
        </p>
      </div>

      <LayoutGroup>
        <div className="grid gap-3 lg:grid-cols-12">
          {CASES.map((item) => (
            <div key={item.id} className={`${item.span} ${item.minH}`}>
              {selected === item.id ? (
                <div className={`h-full ${item.minH}`} aria-hidden="true" />
              ) : (
                <CaseCard item={item} onOpen={() => open(item.id)} />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence>
          {active ? (
            <div key={active.id} className="fixed inset-0 z-[60] flex items-center justify-center p-4">
              <motion.button
                type="button"
                tabIndex={-1}
                aria-label="Close case"
                className="absolute inset-0 bg-black/70"
                onClick={close}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="case-dialog-title"
                layoutId={`case-${active.id}`}
                className="glass relative z-10 max-h-[min(720px,calc(100vh-2rem))] w-full max-w-2xl overflow-auto rounded-2xl p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                      {active.index}
                    </p>
                    <motion.h3
                      id="case-dialog-title"
                      layoutId={`title-${active.id}`}
                      className="mt-2 text-3xl tracking-tight"
                    >
                      {active.title}
                    </motion.h3>
                    <p className="mt-2 font-mono text-xs text-bone/50">
                      {active.role} · {active.when}
                    </p>
                  </div>
                  <button
                    ref={closeRef}
                    type="button"
                    onClick={close}
                    className="font-mono text-xs text-bone/70"
                  >
                    Close
                  </button>
                </div>
                <p className="mt-5 max-w-xl text-bone/75">{active.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-white/10 px-2 py-1 font-mono text-[11px] text-bone/60"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="well mt-6 rounded-xl p-3">
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone/40">
                    {active.previewLabel}
                  </p>
                  <CasePreview
                    name={`${active.id}-dialog`}
                    label={active.previewLabel}
                    choices={active.preview}
                  />
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </LayoutGroup>
    </section>
  );
}

function CaseCard({ item, onOpen }: { item: CaseStudy; onOpen: () => void }) {
  const preview = (
    <div className="well pointer-events-auto rounded-xl p-3">
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone/40">
        {item.previewLabel}
      </p>
      <CasePreview name={`${item.id}-card`} label={item.previewLabel} choices={item.preview} />
    </div>
  );

  return (
    <motion.article layoutId={`case-${item.id}`} className="case-card glass relative h-full rounded-2xl">
      <button
        type="button"
        className="absolute inset-0 z-0 rounded-2xl"
        aria-label={`Open ${item.title}`}
        onClick={onOpen}
      />
      <div
        className={`pointer-events-none relative z-10 flex h-full flex-col p-5 ${
          item.wide ? "lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-8" : ""
        }`}
      >
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone/40">{item.index}</p>
          <motion.h3 layoutId={`title-${item.id}`} className="mt-3 text-2xl tracking-tight">
            {item.title}
          </motion.h3>
          <p className="mt-2 font-mono text-xs text-bone/45">
            {item.role} · {item.when}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-bone/70">{item.summary}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <li key={tag} className="border border-white/10 px-2 py-1 font-mono text-[11px] text-bone/55">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className={item.wide ? "mt-6 lg:mt-0" : "mt-6"}>{preview}</div>
      </div>
    </motion.article>
  );
}
