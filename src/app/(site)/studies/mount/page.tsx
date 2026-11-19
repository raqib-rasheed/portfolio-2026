import { PageMain, PageTitle, Section } from "@/components/article";
import { MountStudy } from "@/components/mount-study";

export default function MountPage() {
  return (
    <PageMain>
      <PageTitle>Mount</PageTitle>
      <div className="mt-8">
        <MountStudy />
      </div>
      <Section title="What it does">
        <p>
          Mount moves the remote into the shell with a transform. Detach moves
          it back the same way.
        </p>
      </Section>
      <Section title="Choice">
        <p>A DOM diagram. The labels stay HTML text.</p>
      </Section>
      <Section title="Alternative">
        <p>A WebGL room of the architecture.</p>
      </Section>
      <Section title="Keyboard">
        <p>Enter and Space activate the enabled button.</p>
      </Section>
      <Section title="Reduced motion">
        <p>
          The remote appears in the mounted or detached position. There is no
          travel.
        </p>
      </Section>
    </PageMain>
  );
}
