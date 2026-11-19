import type { ReactNode } from "react";
import Link from "next/link";

export function PageMain({ children }: { children: ReactNode }) {
  return (
    <main id="content" className="mt-10 max-w-xl">
      {children}
    </main>
  );
}

export function PageTitle({ children }: { children: ReactNode }) {
  return <h1 className="text-3xl font-medium tracking-tight">{children}</h1>;
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="text-sm text-muted">{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}

export function Onward({ href, label }: { href: string; label: string }) {
  return (
    <p className="mt-10">
      <Link href={href} className="underline">
        {label}
      </Link>
    </p>
  );
}
