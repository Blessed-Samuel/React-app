import React from "react";
import { Hero } from "../components/Hero";
import "../styles/App.css";
import Button from "../components/Button";
import Section from "../components/Section";
import Container from "../components/Container";
import checkIcon from "../images/icons/check-icons.svg"
import Headers from "../components/Headers";
import Cards from "../components/Cards";
import workIcon from "../images/icons/work-icon.svg"
import savingIcon from "../images/icons/saving-icon.svg"
import loanIcon from "../images/icons/loan-icon.svg"

const Home: React.FC = () => {
  return (
    <>
      <Section >
        <Container>
          <Hero
            checkIcon={checkIcon}
            subtext="No LLC Required, No Credit Check."
            title="Welcome to YourBank Empowering Your Financial Journey"
            bodyInfo="At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs."
          />
        </Container>
      </Section>

      <Section >
        <Container>
          <div className="text-center lg:text-left">
            <div className="flex flex-col items-center lg:flex-row">
              <Headers
                title="Our Products"
                bodyText="Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations."
              />

              <div className="flex items-center p-2 rounded-full border-borderColor border-customBorderWidth1 text-nowrap bg-Brandblack11">
                <Button
                  cta="For Individuals"
                  colors={{
                    bgColor: "bg-Brandlemon60",
                    textColor: "text-Brandblack11",
                  }}
                />
                <Button
                  cta="For Businesses"
                  colors={{
                    bgColor: "bg-none",
                    textColor: "text-white",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-rows-1 gap-10 mt-6 lg:grid-cols-3 md:gap-20">
              <Cards
                icon={workIcon}
                title="Checking Accounts"
                subText="Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."
              />
              <Cards
                icon={savingIcon}
                title="Savings Accounts"
                subText="Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
              />
              <Cards
                icon={loanIcon}
                title="Loans and Mortgages"
                subText="Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center lg:text-left">
            <Headers
              title="Use Cases"
              bodyText="At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions."
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Home;
