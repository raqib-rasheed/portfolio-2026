import { AgentWork } from "@/components/agent-work";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { WorkGrid } from "@/components/work-grid";

export default function HomePage() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <main id="top" className="mx-auto w-full max-w-page px-4 pb-32 pt-8 sm:px-6">
        <Hero />
        <WorkGrid />
        <AgentWork />
        <Experience />
      </main>
    </>
  );
}
