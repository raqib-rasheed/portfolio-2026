"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { useReducedMotion } from "framer-motion";
import { COMMANDS, runCommand, type Command } from "@/content/career";
import { useCommand } from "@/components/command-context";

type CommandPaletteProps = {
  autoFocus?: boolean;
  onDone?: () => void;
  labelledBy?: string;
};

export function CommandPalette({
  autoFocus = false,
  onDone,
  labelledBy,
}: CommandPaletteProps) {
  const reduce = useReducedMotion() === true;
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return [...COMMANDS];
    return COMMANDS.filter((item) =>
      `${item.label} ${item.hint}`.toLowerCase().includes(needle),
    );
  }, [query]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  function activate(command: Command | undefined) {
    if (!command) return;
    runCommand(command, reduce);
    onDone?.();
  }

  function onKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => Math.min(index + 1, Math.max(results.length - 1, 0)));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      activate(results[active]);
    } else if (event.key === "Escape") {
      onDone?.();
    }
  }

  const activeId =
    results[active] !== undefined ? `${listId}-${results[active].id}` : undefined;

  return (
    <div>
      {labelledBy ? null : (
        <label className="sr-only" htmlFor={`${listId}-input`}>
          Command menu
        </label>
      )}
      <input
        ref={inputRef}
        id={`${listId}-input`}
        role="combobox"
        aria-expanded="true"
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={activeId}
        aria-labelledby={labelledBy}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Jump, write, or open"
        className="w-full border-b border-white/10 bg-transparent px-4 py-4 font-mono text-sm text-bone outline-none placeholder:text-bone/35"
      />
      <ul id={listId} role="listbox" aria-label="Commands" className="py-2">
        {results.length === 0 ? (
          <li className="px-4 py-3 font-mono text-sm text-bone/45">Nothing matches.</li>
        ) : (
          results.map((item, index) => (
            <li key={item.id} role="presentation">
              <button
                type="button"
                id={`${listId}-${item.id}`}
                role="option"
                aria-selected={index === active}
                onMouseEnter={() => setActive(index)}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => activate(item)}
                className={`flex w-full items-baseline justify-between gap-4 px-4 py-2.5 text-left ${
                  index === active ? "bg-white/[0.06] text-bone" : "text-bone/70"
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-bone/40">{item.hint}</span>
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export function CommandMenu() {
  const { menuOpen, closeMenu } = useCommand();
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!menuOpen) return;
    returnFocus.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
      returnFocus.current?.focus();
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  if (!menuOpen) return null;

  function trap(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab") return;
    const root = dialogRef.current;
    if (!root) return;
    const items = [...root.querySelectorAll<HTMLElement>("input, button")].filter(
      (node) => !node.hasAttribute("disabled"),
    );
    const first = items[0];
    const last = items[items.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh]">
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close command menu"
        className="absolute inset-0 bg-black/70"
        onClick={closeMenu}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        onKeyDown={trap}
        className="glass relative z-10 w-full max-w-lg rounded-2xl"
      >
        <CommandPalette autoFocus onDone={closeMenu} />
        <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
          <p className="font-mono text-[11px] text-bone/40">↑↓ move · enter open · esc close</p>
          <button type="button" onClick={closeMenu} className="font-mono text-xs text-bone/70">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
