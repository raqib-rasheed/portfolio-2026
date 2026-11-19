import Link from "next/link";
import { FocusStudy } from "@/components/focus-study";

const INDEX = [
  { num: "01", title: "Focus", where: "This page", href: "/studies/focus" },
  { num: "02", title: "Mount", where: "Study", href: "/studies/mount" },
  {
    num: "03",
    title: "Medline census",
    where: "Shipped",
    href: "/work/medline-census",
  },
  {
    num: "04",
    title: "Growfin editor",
    where: "Shipped",
    href: "/work/growfin-editor",
  },
] as const;

export default function HomePage() {
  return (
    <main>
      <h1 className="display mt-10">Behavior, written down and built.</h1>
      <p className="mt-4 max-w-xl text-muted">
        Senior team lead at Deloitte. Interface studies first, shipped work
        behind them.
      </p>
      <FocusStudy />
      <p className="mt-4 max-w-xl text-sm text-muted">
        The focus ring stays visible. It is 2px, offset 4px, and it is not
        replaced by a custom cursor.
      </p>
      <ol id="index" className="index">
        {INDEX.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              <span className="mono">{item.num}</span>
              <span className="index-title">{item.title}</span>
              <span className="index-where mono text-muted">{item.where}</span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
