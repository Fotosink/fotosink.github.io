import "./IconWrapperSize32Px.css";
import { IconFigmaComponent } from "../IconFigmaComponent/IconFigmaComponent.jsx";

export const IconWrapperSize32Px = ({
  size = "16-px",
  className,
  ...props
}) => {
  const variantsClassName = "size-" + size;

  return (
    <div
      className={
        "icon-wrapper-size-32-px " + className + " " + variantsClassName
      }
    >
      <IconFigmaComponent className="icon-figma-component-instance"></IconFigmaComponent>
    </div>
  );
};
