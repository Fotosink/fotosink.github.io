import "./ActionLink.css";
import { IconDown } from "../IconDown/IconDown.jsx";

export const ActionLink = ({
  className,
  text = "Learn More",
  link,
  ...props
}) => {
  return (
    <a href="">
      <div>
        <div className={className}>
          {text}
          <span className="icon">
            <i className="ri-arrow-right-line"></i>
          </span>
        </div>
      </div>
    </a>
  );
};
