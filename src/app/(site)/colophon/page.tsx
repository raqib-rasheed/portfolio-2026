import { PageMain, PageTitle } from "@/components/article";

const ITEMS = [
  ["Stack", "Next.js 14, TypeScript, Tailwind for layout"],
  [
    "Type",
    "System UI for display and body. System monospace for study labels, index numbers, and the email.",
  ],
  ["Motion", "transform on Mount only"],
  ["Mark", "Bold R, tile #121316, letter #F4F4F5"],
  ["Built by hand", "Page structure, both studies, the mark"],
  [
    "Drafted with a model, then edited",
    "The page sentences in the design spec",
  ],
] as const;

export default function ColophonPage() {
  return (
    <PageMain>
      <PageTitle>Colophon</PageTitle>
      <dl className="mt-8">
        {ITEMS.map(([term, detail]) => (
          <div key={term} className="border-t border-line py-4">
            <dt className="mono text-muted">{term}</dt>
            <dd className="mt-1">{detail}</dd>
          </div>
        ))}
      </dl>
    </PageMain>
  );
}
