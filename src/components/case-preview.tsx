type PreviewChoice = {
  label: string;
  note: string;
};

type CasePreviewProps = {
  name: string;
  label: string;
  choices: readonly PreviewChoice[];
};

export function CasePreview({ name, label, choices }: CasePreviewProps) {
  return (
    <fieldset className="case-preview">
      <legend className="sr-only">{label}</legend>
      <div className="relative">
        <span className="marker" aria-hidden="true" />
        {choices.map((choice, index) => (
          <label
            key={choice.label}
            className="relative z-[1] flex h-10 cursor-pointer items-center px-3 font-mono text-sm text-bone/80"
          >
            <input
              className="sr-only"
              type="radio"
              name={name}
              value={String(index)}
              defaultChecked={index === 0}
            />
            {choice.label}
          </label>
        ))}
      </div>
      {choices.map((choice, index) => (
        <p key={choice.label} className="note" data-for={String(index)}>
          {choice.note}
        </p>
      ))}
    </fieldset>
  );
}
