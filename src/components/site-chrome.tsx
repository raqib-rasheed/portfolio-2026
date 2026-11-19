"use client";

import { Command } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";
import { CommandContext, useCommand } from "@/components/command-context";
import { CommandMenu } from "@/components/command-menu";

export function SiteChrome({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setMenuOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const api = useMemo(
    () => ({
      openMenu: () => setMenuOpen(true),
      closeMenu: () => setMenuOpen(false),
      menuOpen,
    }),
    [menuOpen],
  );

  return (
    <MotionConfig reducedMotion="user">
      <CommandContext.Provider value={api}>
        <Mesh paused={reduce === true} />
        <div className="relative z-10">
          {children}
          <Dock />
          <CommandMenu />
        </div>
      </CommandContext.Provider>
    </MotionConfig>
  );
}

function Mesh({ paused }: { paused: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused) return;
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    let running = false;
    let tx = 72;
    let ty = 16;
    let cx = 72;
    let cy = 16;

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      node.style.setProperty("--mx", `${cx}%`);
      node.style.setProperty("--my", `${cy}%`);
      if (Math.abs(tx - cx) + Math.abs(ty - cy) > 0.06) {
        frame = requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };

    const onMove = (event: PointerEvent) => {
      tx = (event.clientX / window.innerWidth) * 100;
      ty = (event.clientY / window.innerHeight) * 100;
      if (!running) {
        running = true;
        frame = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [paused]);

  return <div ref={ref} className="mesh" aria-hidden="true" />;
}

const DOCK = [
  { href: "#work", label: "Work" },
  { href: "#agent", label: "Agent" },
  { href: "#experience", label: "Roles" },
  { href: "mailto:raqib.dev@gmail.com", label: "Mail" },
] as const;

function Dock() {
  const { openMenu } = useCommand();

  return (
    <nav
      aria-label="Site"
      className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-3"
    >
      <div className="glass flex max-w-full items-center gap-1 rounded-full px-2 py-2">
        {DOCK.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-3 py-2 font-mono text-xs text-bone/75 hover:text-bone"
          >
            {item.label}
          </a>
        ))}
        <button
          type="button"
          onClick={openMenu}
          aria-keyshortcuts="Control+K Meta+K"
          aria-label="Open command menu"
          className="ml-1 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 font-mono text-xs text-bone"
        >
          <Command size={14} aria-hidden="true" />
          <span className="kbd">⌘K</span>
        </button>
      </div>
    </nav>
  );
}
