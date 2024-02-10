import "./DropdownTriggerSizeSmallTooltipFalseIconFalseDisabledFalse.css";
import { IconDown } from "../IconDown/IconDown.jsx";

export const DropdownTriggerSizeSmallTooltipFalseIconFalseDisabledFalse = ({
  size = "medium",
  tooltip = "false",
  icon = "false",
  disabled = "false",
  className,
  ...props
}) => {
  const variantsClassName =
    "size-" +
    size +
    " tooltip-" +
    tooltip +
    " icon-" +
    icon +
    " disabled-" +
    disabled;

  return (
    <div
      className={
        "dropdown-trigger-size-small-tooltip-false-icon-false-disabled-false " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="title">Actions </div>
      <svg
        className="icon-wrapper"
        width="10"
        height="12"
        viewBox="0 0 10 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.15203 3.51797H8.31498C8.25806 3.51797 8.20449 3.54588 8.171 3.59164L5.00025 7.96217L1.82949 3.59164C1.796 3.54588 1.74243 3.51797 1.68551 3.51797H0.84846C0.775916 3.51797 0.733505 3.60056 0.775916 3.65972L4.71118 9.08494C4.85404 9.28137 5.14645 9.28137 5.28819 9.08494L9.22346 3.65972C9.26699 3.60056 9.22458 3.51797 9.15203 3.51797Z"
          fill="black"
          fillOpacity="0.65"
        />
      </svg>
    </div>
  );
};
