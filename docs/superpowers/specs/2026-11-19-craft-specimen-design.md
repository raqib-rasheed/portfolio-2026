# Craft specimen portfolio

Approved design for the rewrite of [raqibabdulrasheed.com](https://raqibabdulrasheed.com/), repo `raqib-rasheed/portfolio-2024`. The direction is the craft specimen: the first screen is a control a visitor can operate, and shipped work sits in an index under it.

## Goal

Replace the Magic UI resume template with a short interface notebook. v1 proves interface judgment with two studies, then points at two shipped products and one boundary diagram.

## Positioning

Raqib Rasheed, senior frontend engineer, Hyderabad. Senior team lead at Deloitte. The site shows behavior first. Shipped work is behind that.

Publish this home deck and no other bio on the home page:

> Senior team lead at Deloitte. Interface studies first, shipped work behind them.

Display line, exact:

> Behavior, written down and built.

## v1 pages

| Route | Page |
|---|---|
| `/` | Home |
| `/studies/focus` | Focus |
| `/studies/mount` | Mount |
| `/work/medline-census` | Medline census |
| `/work/growfin-editor` | Growfin editor |
| `/work/shell-boundaries` | Shell boundaries |
| `/colophon` | Colophon |

Seven pages. No other routes in v1.

## Home, top to bottom

1. Header mark: the R from `logo.svg`, then the name Raqib Rasheed and the place Hyderabad.
2. Display line: "Behavior, written down and built."
3. The deck sentence above.
4. Study 01, Focus, embedded. The same control as `/studies/focus`. Label: `Study 01 · Focus`. States: Default, Hover, Focus. The sample control reads "Save draft". Under it, this sentence: "The focus ring stays visible. It is 2px, offset 4px, and it is not replaced by a custom cursor."
5. Index of four lines, in this order:
   - 01 Focus — This page — links to `/studies/focus`
   - 02 Mount — Study — links to `/studies/mount`
   - 03 Medline census — Shipped — links to `/work/medline-census`
   - 04 Growfin editor — Shipped — links to `/work/growfin-editor`
6. Email `raqib.dev@gmail.com` and a LinkedIn link to `https://www.linkedin.com/in/raqib-abdul-rasheed/`.

The mark links to `/`. Header links, in this order: Focus (`/studies/focus`), Medline (`/work/medline-census`), Shell (`/work/shell-boundaries`), Colophon (`/colophon`). Mount and Growfin are not in the header. Focus links onward to Mount. Medline links onward to Growfin. Growfin links onward to Shell boundaries. Those onward links are the only extra navigation, so every v1 page is reachable without the header listing all seven.

## Study contract

Both study pages use this order and no other sections:

1. Live control
2. What it does, in one short paragraph
3. The choice
4. The alternative set aside
5. Keyboard behavior
6. Reduced-motion behavior

### Focus

- Control: a radiogroup named "Button state" with Default, Hover, and Focus. Default is selected on first paint.
- The sample is a control labeled "Save draft".
- Hover: the sample uses the ink fill and the surface as its text color.
- Focus: 2px ring in the state color, offset 4px.
- This study is CSS only. `:checked` and `:has()` switch the sample. It works with JavaScript disabled.
- Keyboard: native radios. Arrow keys move the state. The selected radio shows a visible focus outline in the state color.
- Reduced motion: the state swaps with no travel. There is no animation to disable.
- Choice, exact: "A visible ring on a real control."
- Alternative, exact: "A custom cursor."

### Mount

- Control: two buttons, "Mount" and "Detach". First paint is Detached. While detached, Mount is enabled and Detach is disabled, with the visible text "Detach is available once the remote is mounted." While mounted, Detach is enabled and Mount is disabled, with the visible text "Mount is available once the remote is detached." A disabled button is not in the tab order.
- Picture: a shell labeled "Shell" and a remote labeled "Remote". Both labels are HTML text.
- Mount moves the remote into the shell with `transform` only. Detach moves it back the same way.
- Choice, exact: "A DOM diagram. The labels stay HTML text."
- Alternative, exact: "A WebGL room of the architecture."
- Keyboard: both controls are buttons. Enter and Space activate the enabled one.
- Reduced motion: the remote appears in the mounted or detached position. No travel.
- The paragraph, the choice, the alternative, and both behavior notes are in the server-rendered HTML. Without JavaScript the diagram stays in the detached position and the buttons do not move it. The explanation is still readable.

## Work contract

The sentences below are the copy to publish. They are taken from the public resume. They are not a private decision log.

Each work page uses this order:

1. Title
2. Role and dates
3. What shipped, one paragraph
4. Three decisions
5. Outcome, one paragraph, with no invented numbers

### Medline census

- Role: Software consultant, Medline India. Oct 2023 – Nov 2024.
- What shipped: A patients-per-day census inside a Next.js app built with webpack module federation and styled-components.
- Decisions:
  1. Shipped the census inside the federated app the team already ran.
  2. Used webpack module federation so the feature deployed with the rest of that surface.
  3. Used styled-components so the feature matched the app already in production.
- Outcome: The census improved billing evaluation accuracy and reduced hands-on processing. Do not add a percentage, a time saved, or a user count.

### Growfin editor

- Role: Software engineer, Growfin. Mar 2023 – Oct 2023.
- What shipped: Collections email for an accounts-receivable product, and the template editor used to send it. React, TypeScript, react-query, and Redux Toolkit on the client. Spring Boot on the API.
- Decisions:
  1. Automated the collections email path.
  2. Reworked the template editor around those emails.
  3. Kept the client on the React stack the product already used, against the existing Spring Boot API.
- Outcome: The team could send collections email from templates instead of handling each send as a one-off. Do not add a DSO figure or a percentage.

### Shell boundaries

- Role: Senior team lead, Deloitte. Oct 2024 – Present.
- What shipped: A diagram of a host and its remotes. The client product is not public, and the page says that in the first paragraph.
- Do not name the client, the product, or a user count.
- Diagram labels are Host, Remote, and Contract. They are HTML text. They are not Medline or Growfin features.
- Decisions:
  1. Publish the boundary diagram instead of screenshots.
  2. Keep the labels as HTML text.
  3. Leave the client unnamed.
- Outcome: A visitor can see how a remote joins a host without seeing the product.

## Colophon

One page, these items, in this order:

- Stack: Next.js 14, TypeScript, Tailwind for layout
- Type: system UI for display and body, system monospace for study labels, index numbers, and the email
- Motion: `transform` on Mount only
- Mark: bold R, tile `#121316`, letter `#F4F4F5`
- Built by hand: page structure, both studies, the mark
- Drafted with a model, then edited: the page sentences in this spec

## Visual system

Instrument-like. System UI and system monospace only. No web font request. Color is a state, used for the focus ring and the hover fill. The page stays neutral.

| Token | Light | Dark | Use |
|---|---|---|---|
| Surface | `#f5f5f4` | `#0e0f12` | Page background |
| Ink | `#121316` | `#f4f4f5` | Text, and the letter in the mark |
| Muted | `#3f4450` | `#c6c8d0` | Deck, notes, index labels |
| Line | `#d4d4d8` | `#2c2e36` | Specimen frame and index rules |
| State | `#1e3a8a` | `#bfdbfe` | Focus ring and hover only |
| Tile | `#121316` | `#121316` | Favicon square in both themes |

Theme follows `prefers-color-scheme`. There is no theme toggle in v1.

Body text on surface, and muted text on surface, must meet WCAG 2.2 AA (4.5:1). The state color on surface must meet 3:1 for the focus ring and 4.5:1 where it is used as text. Large display type must meet 3:1.

Display line: system UI, weight 500, tight tracking, about 34–56px depending on width. Study labels and index numbers: system monospace, about 12px.

Layout is a single column. Comfortable padding, about 28px on the page and 16px inside a specimen. Index rows are separated by a full 1px line, not a card grid.

## Mark

Copy the drawn files into `public/` before shipping:

- `favicon.ico` (16 and 32)
- `favicon.svg`
- `apple-touch-icon.png` (180)
- `logo.svg` (the R alone, `currentColor`, for the header)

Source files to copy from:

`/Users/rqb/Library/Application Support/Cursor/AgentStores/cursor_agent_stores/9e70b9d1-10cc-461e-bd01-82de36213028/files/portfolio-mark/` The header uses `logo.svg`. The favicon square is always tile `#121316` with letter `#F4F4F5`, in both themes. `app/layout.tsx` points the metadata icons at these files.

## Chrome

- Header on every page: mark linking to `/`, the name, and links to `/studies/focus`, `/work/medline-census`, and `/colophon`.
- Footer on every page: the email and the LinkedIn URL.
- No dock. No avatar. No skill pills. No phone number.

## Stack and rewrite rules

- Stay on Next.js 14 and TypeScript. Do not upgrade Next in v1.
- Tailwind stays for layout. Remove the shadcn gray theme as the visual system. Tokens above replace it.
- Remove Magic UI `blur-fade`, the dock, and the theme toggle.
- Focus is a server-rendered page with CSS state. Mount's buttons are a client component. Every other page is a server component with no client JavaScript.
- Delete the blog routes so `/blog` is not served. Leave the two markdown files in `content/` unlinked.
- Delete the old home, project cards, resume cards, and Magic UI components once nothing imports them.
- Do not add an archive, a blog index, education, a skill list, or Turbolab.
- Do not carry YepiCor, Intell, slice-me, or NA Tours onto any v1 page. NA Tours is mislabeled in `src/data/resume.tsx` as an AI support chatbot. That sentence is not reused.
- Do not ship the mp4 files in `public/`. Remove them from the built site. Deleting the binaries from the repo is in scope for this rewrite.
- Copy is the sentences in this spec. Do not add metrics.

## Accessibility and motion

- Real HTML text for every heading, label, and diagram name.
- Visible focus on every control and link. No custom cursor.
- No scroll hijacking. No looping motion. No entrance animation on the page.
- `prefers-reduced-motion: reduce` disables the Mount travel.
- A skip link as the first focusable control: "Skip to index" on the home page, "Skip to content" on the others.
- Diagrams have an accessible name.

## Verification

No new test runner in v1. Before calling the rewrite done, check all of these by hand:

- All seven routes render the copy in this spec.
- Focus changes Default, Hover, and Focus with the keyboard and with the pointer, including with JavaScript disabled.
- Mount travels only by `transform`, Detach returns it, and reduced motion snaps.
- With JavaScript disabled, Mount's explanation is still on the page and the remote stays detached.
- Light and dark scheme tokens match the table.
- The tab icon is the R tile.
- `/blog` is not a page. The old project names do not appear.
- The home page loads no video.

## Out of scope

Education, a full job list, Turbolab, an archive of old projects, blog posts, a contact form, a theme toggle, WebGL, a custom cursor, page transitions, a Next.js upgrade, and a test framework.
