import Link from "next/link";
import { Mark } from "@/components/mark";

const LINKS = [
  { href: "/studies/focus", label: "Focus" },
  { href: "/work/medline-census", label: "Medline" },
  { href: "/work/shell-boundaries", label: "Shell" },
  { href: "/colophon", label: "Colophon" },
] as const;

export function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center gap-x-5 gap-y-3">
      <Link href="/" aria-label="Home" className="text-ink">
        <Mark />
      </Link>
      <div>
        <p className="text-base leading-tight">Raqib Rasheed</p>
        <p className="text-[13px] text-muted">Hyderabad</p>
      </div>
      <nav aria-label="Primary" className="ml-auto">
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
