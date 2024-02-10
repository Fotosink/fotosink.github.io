import "./LayoutBlocksVertical2Backup.css";
import { LayoutBlocksBase } from "../LayoutBlocksBase/LayoutBlocksBase.jsx";

export const LayoutBlocksVertical2Backup = ({
  component0 = <LayoutBlocksBase />,
  component1 = <LayoutBlocksBase />,
  className,
  ...props
}) => {
  return (
    <div className={"layout-blocks-vertical-2-backup " + className}>
      {component0}
      {component1}
    </div>
  );
};
