import { Onward, PageMain, PageTitle, Section } from "@/components/article";

export default function MedlinePage() {
  return (
    <PageMain>
      <PageTitle>Medline census</PageTitle>
      <p className="mt-3 text-muted">
        Software consultant, Medline India. Oct 2023 – Nov 2024.
      </p>
      <Section title="What shipped">
        <p>
          A patients-per-day census inside a Next.js app built with webpack
          module federation and styled-components.
        </p>
      </Section>
      <Section title="Decisions">
        <ol className="list-decimal space-y-2 pl-5">
          <li>Shipped the census inside the federated app the team already ran.</li>
          <li>
            Used webpack module federation so the feature deployed with the rest
            of that surface.
          </li>
          <li>
            Used styled-components so the feature matched the app already in
            production.
          </li>
        </ol>
      </Section>
      <Section title="Outcome">
        <p>
          The census improved billing evaluation accuracy and reduced hands-on
          processing.
        </p>
      </Section>
      <Onward href="/work/growfin-editor" label="Growfin editor" />
    </PageMain>
  );
}
