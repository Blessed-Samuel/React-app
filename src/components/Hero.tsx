import React from "react";
import Button from "./Button";
import Section from "./Section";
import Container from "./Container";
import HeroImgRight from "../images/hero-img-right.svg";

interface HeroProps {
  subtext?: string;
  title?: string;
  bodyInfo?: string;
  checkIcon?: string;
}

export const Hero: React.FC<HeroProps> = ({ subtext, title, bodyInfo, checkIcon }) => {
  return (
    <>
      <Section>
        <Container>
          <div className="flex flex-col mx-auto mt-24 md:flex-row md:mt-28">
            <div className="flex flex-col items-center w-full mx-auto md:w-3/5 md:items-start">
              <h5 className="flex items-center p-4 px-8 mb-6 text-sm font-light rounded-full md:text-base text-Brandwhite90 bg-Brandblack15">
                <img src={checkIcon} alt="check-icon" className="mr-2" />
                {subtext}
              </h5>

              <h1 className="mb-8 text-center text-white text-header font-FontMediun md:text-left leading-custom-150 lg:text-5xl">
                {title}
              </h1>

              <p className="text-sm text-center text-Brandwhite90 font-extralight md:text-left">
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

            <div className="w-full mt-10 md:mt-0 md:w-1/2">
              <img src={HeroImgRight} alt="Hero-img-right" className="w-full max-w-full" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
