import React from "react";
import Button from "./Button";

export const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center mx-auto max-w-7xl">
      <div className="flex flex-col items-center">
        <h1 className="mt-12 text-4xl font-normal leading-tight text-center md:text-5xl lg:text-9xl text-cyan-400">
          Explore the latest cutting-edge gadgets at {" "} <span className="font-black text-white">Unbeatable Prices!</span>
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
        Welcome to Learning <span className="font-bold underline">JSX</span> and <span className="font-bold underline">TypeScript</span> in{" "}
        <mark className="p-3 font-bold bg-amber-400">ReactJS!</mark>
      </h2>

      <h2 className="mt-20 text-3xl text-center text-white font-extralight md:text-5xl">
        Welcome to Learning <span className="font-bold underline">JSX</span> and <span className="font-bold underline">TypeScript</span> in{" "}
        <mark className="p-3 font-bold bg-amber-400">ReactJS!</mark>
      </h2>
    </div>
  );
};
