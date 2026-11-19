import { Onward, PageMain, PageTitle, Section } from "@/components/article";

export default function GrowfinPage() {
  return (
    <PageMain>
      <PageTitle>Growfin editor</PageTitle>
      <p className="mt-3 text-muted">
        Software engineer, Growfin. Mar 2023 – Oct 2023.
      </p>
      <Section title="What shipped">
        <p>
          Collections email for an accounts-receivable product, and the template
          editor used to send it. React, TypeScript, react-query, and Redux
          Toolkit on the client. Spring Boot on the API.
        </p>
      </Section>
      <Section title="Decisions">
        <ol className="list-decimal space-y-2 pl-5">
          <li>Automated the collections email path.</li>
          <li>Reworked the template editor around those emails.</li>
          <li>
            Kept the client on the React stack the product already used, against
            the existing Spring Boot API.
          </li>
        </ol>
      </Section>
      <Section title="Outcome">
        <p>
          The team could send collections email from templates instead of
          handling each send as a one-off.
        </p>
      </Section>
      <Onward href="/work/shell-boundaries" label="Shell boundaries" />
    </PageMain>
  );
}
