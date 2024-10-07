import React from "react";
import Button from "./Button";
import HeroImgRight from "../images/hero-img-right.svg";

interface HeroProps {
  subtext: string;
  title: string;
  bodyInfo: string;
  checkIcon: string;
}

export const Hero: React.FC<HeroProps> = ({ subtext, title, bodyInfo, checkIcon }) => {
  return (
    <>
      <div className="flex flex-col mt-24 md:flex-row md:mt-40">
        <div className="flex flex-col items-center w-full md:w-1/2 md:items-start">
          <h5 className="flex items-center p-4 px-8 mb-6 text-sm font-light rounded-full md:text-base text-Brandwhite90 bg-Brandblack15">
            <img src={checkIcon} alt="check-icon" className="mr-2" />
            {subtext}
          </h5>

          <h1 className="mb-8 text-center text-white font-FontMediun md:text-left lg:leading-custom-150 text-header2 lg:text-4xl">
            {title}
          </h1>

          <p className="text-center lg:leading-custom-200 text-header1 text-Brandwhite90 font-extralight lg:text-lefttext-center lg:text-left">
            {bodyInfo}
          </p>

          <div className="mt-10 md:mt-10">
            <Button
              cta="Open Account"
              colors={{
                bgColor: "bg-Brandlemon60",
                textColor: "text-Brandblack11",
              }}
            />
          </div>
        </div>

        <div className="w-full transform lg:-translate-y-14 mt-14 md:w-1/2">
          <img src={HeroImgRight} alt="Hero-img-right" />
        </div>
      </div>
    </>
  );
};
