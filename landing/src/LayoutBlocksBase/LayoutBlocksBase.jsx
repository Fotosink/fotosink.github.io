import "./LayoutBlocksBase.css";

export const LayoutBlocksBase = ({ className, ...props }) => {
  return (
    <div className={"layout-blocks-base " + className}>
      <div className="label">Swap </div>
    </div>
  );
};
