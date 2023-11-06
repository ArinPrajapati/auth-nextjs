import classNames from "classnames";
import React from "react";

interface CSButtonProps {
  color: string;
  name: string;
  onClick?: () => void;
  disable?: boolean;
  css?: string;
  hoverC?: string;
}

function CSButton({
  color,
  name,
  onClick,
  disable,
  css,
  hoverC,
}: CSButtonProps) {
  const buttonClasses = classNames(
    css,
    "w-20 h-9 rounded-md uppercase",
    { "bg-slate-700": disable },
    "m-3",
    "transform active:scale-90"
  );

  const buttonStyle = {
    backgroundColor: color,
    transition: "background-color 0.3s ease",
  };

  const handleHover = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (hoverC) {
      event.currentTarget.style.backgroundColor = hoverC;
    }
  };

  const handleHoverExit = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (hoverC) {
      event.currentTarget.style.backgroundColor = color;
    }
  };

  return (
    <button
      style={buttonStyle}
      className={buttonClasses}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
      disabled={disable}
    >
      {name}
    </button>
  );
}

export default CSButton;
