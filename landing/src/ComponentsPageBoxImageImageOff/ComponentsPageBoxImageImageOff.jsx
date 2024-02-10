import "./ComponentsPageBoxImageImageOff.css";
import { IconWrapperSize32Px } from "../IconWrapperSize32Px/IconWrapperSize32Px.jsx";

export const ComponentsPageBoxImageImageOff = ({
  image = "off",
  className,
  ...props
}) => {
  const variantsClassName = "image-" + image;

  return (
    <div
      className={
        "components-page-box-image-image-off " +
        className +
        " " +
        variantsClassName
      }
    >
      <IconWrapperSize32Px
        size="32-px"
        className="icon-wrapper-instance"
      ></IconWrapperSize32Px>
    </div>
  );
};
