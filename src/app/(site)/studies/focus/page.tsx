import { FocusStudy } from "@/components/focus-study";
import { Onward, PageMain, PageTitle, Section } from "@/components/article";

export default function FocusPage() {
  return (
    <PageMain>
      <PageTitle>Focus</PageTitle>
      <FocusStudy />
      <Section title="What it does">
        <p>
          The focus ring stays visible. It is 2px, offset 4px, and it is not
          replaced by a custom cursor.
        </p>
      </Section>
      <Section title="Choice">
        <p>A visible ring on a real control.</p>
      </Section>
      <Section title="Alternative">
        <p>A custom cursor.</p>
      </Section>
      <Section title="Keyboard">
        <p>
          Arrow keys move between Default, Hover, and Focus. The selected radio
          shows a visible focus outline in the state color.
        </p>
      </Section>
      <Section title="Reduced motion">
        <p>The state swaps with no travel. There is no animation to disable.</p>
      </Section>
      <Onward href="/studies/mount" label="Mount" />
    </PageMain>
  );
}
