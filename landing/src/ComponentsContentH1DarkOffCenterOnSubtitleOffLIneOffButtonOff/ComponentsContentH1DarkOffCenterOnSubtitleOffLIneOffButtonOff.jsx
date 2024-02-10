import "./ComponentsContentH1DarkOffCenterOnSubtitleOffLIneOffButtonOff.css";

export const ComponentsContentH1DarkOffCenterOnSubtitleOffLIneOffButtonOff = ({
  dark = "on",
  center = "on",
  subtitle = "on",
  lIne = "on",
  button = "off",
  className,
  ...props
}) => {
  const variantsClassName =
    "dark-" +
    dark +
    " center-" +
    center +
    " subtitle-" +
    subtitle +
    " l-ine-" +
    lIne +
    " button-" +
    button;

  return (
    <div
      className={
        "components-content-h-1-dark-off-center-on-subtitle-off-l-ine-off-button-off " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="h-1">page-content-title </div>
    </div>
  );
};
