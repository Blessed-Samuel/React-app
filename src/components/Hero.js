import React from "react";
import Button from "./Button"

const Hero = () => {
  return (
    <>
      <h1 className="text-9xl text-cyan-400 font-normal mt-16">
        Discover Cutting-Edge Gadgets at{" "}
        <span className="text-white font-black">Unbeatable Prices!</span>
      </h1>

      <div className="flex justify-between space-x-8">
        <Button cta="SignUp" />
        <Button
          cta="LogIn"
          colors={{
            className: "border-2 border-cyan-600 hover:border-amber-400",
          }}
        />
      </div>

      <h2 className="text-white text-5xl mt-20 font-extralight">
        Welcome to Learning Jsx in{" "}
        <mark className="p-3 font-bold bg-amber-400">reactjs!</mark>
      </h2>
    </>
  );
};

export default Hero;
