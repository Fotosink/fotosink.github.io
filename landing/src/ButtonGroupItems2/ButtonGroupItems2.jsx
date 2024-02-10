import "./ButtonGroupItems2.css";
import { ButtonSizeMediumTypePrimaryClassStandardStateNormalIconFalse } from "../ButtonSizeMediumTypePrimaryClassStandardStateNormalIconFalse/ButtonSizeMediumTypePrimaryClassStandardStateNormalIconFalse.jsx";
import { ButtonSizeMediumTypeSecondaryClassStandardStateNormalIconFalse } from "../ButtonSizeMediumTypeSecondaryClassStandardStateNormalIconFalse/ButtonSizeMediumTypeSecondaryClassStandardStateNormalIconFalse.jsx";

export const ButtonGroupItems2 = ({
  items = "1",
  component0 = (
    <ButtonSizeMediumTypePrimaryClassStandardStateNormalIconFalse
      size="medium"
      type="primary"
      className="standard"
      state="normal"
      icon="false"
    />
  ),
  component1 = (
    <ButtonSizeMediumTypeSecondaryClassStandardStateNormalIconFalse
      size="medium"
      type="secondary"
      className="standard"
      state="normal"
      icon="false"
    />
  ),
  className,
  ...props
}) => {
  const variantsClassName = "items-" + items;

  return (
    <div
      className={"button-group-items-2 " + className + " " + variantsClassName}
    >
      {component0}
      {component1}
    </div>
  );
};
