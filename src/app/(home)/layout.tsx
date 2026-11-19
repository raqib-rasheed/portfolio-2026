import type { ReactNode } from "react";
import { SiteFrame } from "@/components/site-frame";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <SiteFrame skipHref="#index" skipLabel="Skip to index">
      {children}
    </SiteFrame>
  );
}
