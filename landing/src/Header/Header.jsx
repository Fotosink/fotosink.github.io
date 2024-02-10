import "./Header.css";
import { FlowerIcon } from "../FlowerIcon/FlowerIcon.jsx";

export const Header = ({ className, ...props }) => {
  return (
    <div className={"header " + className}>
      <div className="logo">
        <FlowerIcon className="flower-icon-instance"></FlowerIcon>
        <div className="landing">Fotosink </div>
      </div>
    </div>
  );
};
