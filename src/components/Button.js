import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ cta, colors }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset the effect after 200ms
  };

  return (
    <div className="mt-12">
      <button
        onClick={handleClick}
        className={`${
          isClicked ? "scale-95 bg-gray-800" : "bg-slate-800"
        } text-white p-4 px-8 rounded-md cursor-pointer 
        ${colors?.className || "border-2 border-slate-500 hover:border-amber-400"}
        flex justify-between items-center transition-transform duration-150`}
      >
        {cta}
        <FaArrowRight className="ml-4 transform -rotate-45 text" />
      </button>
    </div>
  );
};

export default Button;
