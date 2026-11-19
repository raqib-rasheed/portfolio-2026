/** Public resume, plus the Edward Jones work Raqib asked to name. Do not add percentages. */

export const CASES = [
  {
    id: "medline",
    index: "01",
    title: "Medline census",
    role: "Software consultant",
    when: "Oct 2023 – Nov 2024",
    summary:
      "Patients-per-day census inside a federated Next.js app. It improved billing evaluation and reduced hands-on processing.",
    tags: ["Next.js", "Module federation", "Census"],
    previewLabel: "The census",
    preview: [
      {
        label: "Patients per day",
        note: "A screen that counts who is in, for each day.",
      },
      {
        label: "Billing",
        note: "That count made billing evaluation more accurate.",
      },
      {
        label: "Less manual work",
        note: "Staff spent less time processing it by hand.",
      },
    ],
    span: "lg:col-span-7",
    minH: "min-h-[440px]",
    wide: false,
  },
  {
    id: "growfin",
    index: "02",
    title: "Growfin editor",
    role: "Software engineer",
    when: "Mar 2023 – Oct 2023",
    summary:
      "Collections email for a live accounts-receivable product, and the template editor the team uses to send it.",
    tags: ["React", "TypeScript", "Collections"],
    previewLabel: "What I built",
    preview: [
      {
        label: "The email",
        note: "The collections message a customer receives.",
      },
      {
        label: "The editor",
        note: "Where the team writes that message and sends it.",
      },
      {
        label: "The product",
        note: "A live accounts-receivable tool, not a demo.",
      },
    ],
    span: "lg:col-span-5",
    minH: "min-h-[440px]",
    wide: false,
  },
  {
    id: "edward-jones",
    index: "03",
    title: "Edward Jones",
    role: "Senior team lead · Deloitte",
    when: "Oct 2024 – Present",
    summary:
      "I lead the frontend on their modern investment-management project. The product is large React micro-frontends. Delivery runs as an agentic workflow, and I created the SDLC agent.",
    tags: ["Edward Jones", "Agentic workflow", "SDLC agent"],
    previewLabel: "The work",
    preview: [
      {
        label: "The client",
        note: "Edward Jones. I lead the frontend from Deloitte.",
      },
      {
        label: "The project",
        note: "Their modern investment-management product, built as React micro-frontends.",
      },
      {
        label: "The agent",
        note: "I created an SDLC agent. It works inside the software development lifecycle.",
      },
    ],
    span: "lg:col-span-12",
    minH: "min-h-[300px]",
    wide: true,
  },
] as const;

export type CaseStudy = (typeof CASES)[number];

export const JOBS = [
  {
    title: "Senior team lead · Deloitte",
    line: "Edward Jones investment management. Agentic workflow, and the SDLC agent I created.",
    when: "Oct 2024 – Present",
  },
  {
    title: "Software consultant · Medline",
    line: "Patients-per-day census. Billing evaluation, less hands-on processing.",
    when: "Oct 2023 – Nov 2024",
  },
  {
    title: "Software engineer · Growfin",
    line: "Collections email and the template editor.",
    when: "Mar 2023 – Oct 2023",
  },
  {
    title: "Frontend developer · Turbolab",
    line: "Pair reviews, performance notes, and the weekly UI meeting.",
    when: "Feb 2021 – Mar 2023",
  },
] as const;

export const COMMANDS = [
  { id: "work", label: "Selected work", hint: "Cases", hash: "#work" },
  { id: "agent", label: "SDLC agent", hint: "Edward Jones", hash: "#agent" },
  { id: "experience", label: "Experience", hint: "Roles", hash: "#experience" },
  {
    id: "mail",
    label: "Email",
    hint: "raqib.dev@gmail.com",
    href: "mailto:raqib.dev@gmail.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    hint: "Profile",
    href: "https://www.linkedin.com/in/raqib-abdul-rasheed/",
  },
  {
    id: "github",
    label: "GitHub",
    hint: "Code",
    href: "https://github.com/raqib-rasheed",
  },
  {
    id: "x",
    label: "X",
    hint: "Profile",
    href: "https://x.com/raqib__rasheed",
  },
] as const;

export type Command = (typeof COMMANDS)[number];

export function runCommand(command: Command, reduceMotion: boolean) {
  if ("href" in command) {
    window.location.assign(command.href);
    return;
  }

  const node = document.querySelector(command.hash);
  if (!(node instanceof HTMLElement)) return;
  node.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  node.focus();
}
