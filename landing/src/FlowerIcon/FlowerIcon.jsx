import "./FlowerIcon.css";
import { Flower } from "../Flower/Flower.jsx";

export const FlowerIcon = ({ className, ...props }) => {
  return (
    <div className={"flower-icon " + className}>
      <Flower className="flower-icon-instance"></Flower>
    </div>
  );
};
