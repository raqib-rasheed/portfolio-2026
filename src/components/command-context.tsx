"use client";

import { createContext, useContext } from "react";

type CommandApi = {
  openMenu: () => void;
  closeMenu: () => void;
  menuOpen: boolean;
};

export const CommandContext = createContext<CommandApi | null>(null);

export function useCommand() {
  const value = useContext(CommandContext);
  if (!value) {
    throw new Error("useCommand must be used inside SiteChrome");
  }
  return value;
}
