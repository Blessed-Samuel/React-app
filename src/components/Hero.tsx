import React from "react";
import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <div className="container flex flex-col items-center px-4 mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="mt-24 text-4xl font-normal text-center md:text-7xl lg:text-9xl text-cyan-400">
          Discover Cutting-Edge Gadgets at{" "}
          <span className="font-black text-white">Unbeatable Prices!</span>
        </h1>

        <div className="flex flex-col items-center justify-center space-x-0 space-y-2 md:space-y-12 md:space-x-8 md:flex-row">
          <Button cta="SignUp" />
          <Button
            cta="LogIn"
            colors={{
              className: "border-2 border-cyan-600 hover:border-amber-400",
            }}
          />
        </div>
      </div>

      <h2 className="mt-20 text-3xl text-center text-white font-extralight md:text-5xl">
        Welcome to Learning JSX in{" "}
        <mark className="p-3 font-bold bg-amber-400">ReactJS!</mark>
      </h2>
      <h2 className="mt-20 text-3xl text-center text-white font-extralight md:text-5xl">
        Welcome to Learning TypeScript in{" "}
        <mark className="p-3 font-bold bg-amber-400">ReactJS!</mark>
      </h2>
    </div>
  );
};

export default Hero;
