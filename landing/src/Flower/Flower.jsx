import "./Flower.css";
import { Fin } from "../Fin/Fin.jsx";

export const Flower = ({ className, ...props }) => {
  return (
    <div className={"flower " + className}>
      <Fin className="fin-instance"></Fin>
      <Fin className="fin-instance2"></Fin>
      <Fin className="fin-instance3"></Fin>
      <Fin className="fin-instance4"></Fin>
      <Fin className="fin-instance5"></Fin>
      <Fin className="fin-instance6"></Fin>
      <Fin className="fin-instance7"></Fin>
      <Fin className="fin-instance8"></Fin>
      <div className="ellipse-45"></div>
      <div className="ellipse-44"></div>
    </div>
  );
};
