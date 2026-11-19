import { PageMain, PageTitle, Section } from "@/components/article";

export default function ShellPage() {
  return (
    <PageMain>
      <PageTitle>Shell boundaries</PageTitle>
      <p className="mt-3 text-muted">
        Senior team lead, Deloitte. Oct 2024 – Present.
      </p>
      <Section title="What shipped">
        <p>
          A diagram of a host and its remotes. The client product is not public.
        </p>
        <div className="diagram" aria-label="Host, remote, and contract">
          <div className="diagram-host">
            <p className="mono">Host</p>
            <p className="diagram-remote">Remote</p>
          </div>
          <div className="diagram-contract">
            <p className="mono">Contract</p>
          </div>
        </div>
      </Section>
      <Section title="Decisions">
        <ol className="list-decimal space-y-2 pl-5">
          <li>Publish the boundary diagram instead of screenshots.</li>
          <li>Keep the labels as HTML text.</li>
          <li>Leave the client unnamed.</li>
        </ol>
      </Section>
      <Section title="Outcome">
        <p>
          A visitor can see how a remote joins a host without seeing the
          product.
        </p>
      </Section>
    </PageMain>
  );
}
