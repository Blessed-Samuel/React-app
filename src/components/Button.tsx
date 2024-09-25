import React, { useState } from "react";

interface ButtonProps {
  cta: string;
  colors?: { className?: string; bgColor?: string; textColor?: string };
}

const Button: React.FC<ButtonProps> = ({ cta, colors }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`${isClicked ? "scale-95" : ""
          } ${colors?.bgColor || "bg-Brandlemon60"} ${colors?.textColor || "text-black"} p-4 px-8 rounded-full cursor-pointer 
          ${colors?.className || "text-black"}
          flex justify-between items-center transition-transform duration-150`}
      >
        {cta}
      </button>
    </>
  );
};

export default Button;
