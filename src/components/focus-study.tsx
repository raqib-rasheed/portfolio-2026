export function FocusStudy() {
  return (
    <div className="focus-study">
      <div className="focus-study-head">
        <p className="mono">Study 01 · Focus</p>
        <div role="radiogroup" aria-label="Button state">
          <label>
            <input type="radio" name="button-state" value="default" defaultChecked />
            Default
          </label>
          <label>
            <input type="radio" name="button-state" value="hover" />
            Hover
          </label>
          <label>
            <input type="radio" name="button-state" value="focus" />
            Focus
          </label>
        </div>
      </div>
      <div className="focus-stage">
        <button type="button" className="sample">
          Save draft
        </button>
      </div>
    </div>
  );
}
