import "./ComponentsPageBoxDarkOffButtonOffTextBottomOnTextRightOffTextLeftOff.css";
import { ComponentsPageBoxImageImageOff } from "../ComponentsPageBoxImageImageOff/ComponentsPageBoxImageImageOff.jsx";

export const ComponentsPageBoxDarkOffButtonOffTextBottomOnTextRightOffTextLeftOff =
  ({
    dark = "off",
    button = "off",
    textBottom = "on",
    textRight = "off",
    textLeft = "off",
    className,
    ...props
  }) => {
    const variantsClassName =
      "dark-" +
      dark +
      " button-" +
      button +
      " text-bottom-" +
      textBottom +
      " text-right-" +
      textRight +
      " text-left-" +
      textLeft;

    return (
      <div
        className={
          "components-page-box-dark-off-button-off-text-bottom-on-text-right-off-text-left-off " +
          className +
          " " +
          variantsClassName
        }
      >
        <ComponentsPageBoxImageImageOff className="components-page-box-image-instance"></ComponentsPageBoxImageImageOff>
        <div className="content">
          <div className="h-3">Common Templates </div>
          <div className="p">
            Typical templates for enterprise applications{" "}
          </div>
        </div>
      </div>
    );
  };
