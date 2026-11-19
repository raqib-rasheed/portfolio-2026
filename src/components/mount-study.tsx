"use client";

import { useState } from "react";

export function MountStudy() {
  const [mounted, setMounted] = useState(false);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className="border border-ink px-4 py-2 text-sm disabled:opacity-40"
          onClick={() => setMounted(true)}
          disabled={mounted}
        >
          Mount
        </button>
        <button
          type="button"
          className="border border-ink px-4 py-2 text-sm disabled:opacity-40"
          onClick={() => setMounted(false)}
          disabled={!mounted}
        >
          Detach
        </button>
      </div>
      <p className="mt-3 text-sm text-muted">
        {mounted
          ? "Mount is available once the remote is detached."
          : "Detach is available once the remote is mounted."}
      </p>
      <div
        className="stage"
        data-mounted={mounted ? "true" : "false"}
        aria-label="Shell and a remote"
      >
        <div className="shell">
          <p>Shell</p>
        </div>
        <div className="travel">
          <p className="remote">Remote</p>
        </div>
      </div>
    </div>
  );
}
