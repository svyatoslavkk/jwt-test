import { CHECKBOX_TITLE } from "~/constants";

export default function Checkbox() {
  return (
    <div className="flex flex-row items-center gap-2 w-full justify-between">
      <div className="flex items-center gap-2">
        <label className="checkbox-container">
          <input type="checkbox" />
          <div className="checkmark"></div>
        </label>
        <p className="whitespace-nowrap text-gray-400">{CHECKBOX_TITLE}</p>
      </div>
      <div></div>
    </div>
  );
}