const POINTS = [
  {
    kicker: "Client",
    title: "Edward Jones",
    body: "I am the senior team lead at Deloitte on this account.",
  },
  {
    kicker: "Project",
    title: "Investment management",
    body: "The current build is their modern project: large React micro-frontends.",
  },
  {
    kicker: "Agent",
    title: "SDLC agent",
    body: "The team works in an agentic workflow. I created the SDLC agent, which takes part in the software development lifecycle.",
  },
] as const;

export function AgentWork() {
  return (
    <section id="agent" tabIndex={-1} aria-labelledby="agent-title" className="mt-28 outline-none">
      <div className="mb-6 max-w-xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">02</p>
        <h2 id="agent-title" className="mt-2 text-3xl tracking-tight">
          SDLC agent
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-bone/55">
          The current Deloitte work, in plain words. Edward Jones, the investment-management project, and the agent I created for delivery.
        </p>
      </div>
      <div className="grid gap-3 lg:grid-cols-3">
        {POINTS.map((point) => (
          <article key={point.title} className="glass rounded-2xl p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone/40">{point.kicker}</p>
            <h3 className="mt-3 text-2xl tracking-tight">{point.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-bone/70">{point.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
