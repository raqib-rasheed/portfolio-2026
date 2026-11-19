import type { ReactNode } from "react";
import { SiteFrame } from "@/components/site-frame";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <SiteFrame skipHref="#content" skipLabel="Skip to content">
      {children}
    </SiteFrame>
  );
}
