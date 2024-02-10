import "./Fin.css";

export const Fin = ({ className, ...props }) => {
  return (
    <div className={"fin " + className}>
      <div className="ellipse-41"></div>
      <div className="ellipse-42"></div>
      <div className="rectangle-22"></div>
    </div>
  );
};
