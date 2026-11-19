import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteFrame({
  skipHref,
  skipLabel,
  children,
}: {
  skipHref: string;
  skipLabel: string;
  children: ReactNode;
}) {
  return (
    <>
      <a href={skipHref} className="skip">
        {skipLabel}
      </a>
      <div className="mx-auto flex min-h-screen max-w-page flex-col px-6 py-7">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </div>
    </>
  );
}
