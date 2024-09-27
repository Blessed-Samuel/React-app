import React from "react";
import { Hero } from "../components/Hero";
import "../styles/App.css";
import Button from "../components/Button";
import Section from "../components/Section";
import Container from "../components/Container";
import checkIcon from "../images/icons/check-icons.svg"
import Headers from "../components/Headers";
import Cards from "../components/Cards";
import workIcon from "../images/icons/work-icon.svg";
import savingIcon from "../images/icons/saving-icon.svg";
import loanIcon from "../images/icons/loan-icon.svg";
import financeIcon from "../images/icons/finance-icon.svg";
import saving2Icon from "../images/icons/saving2-icon.svg";
import homeIcon from "../images/icons/home-icon.svg";
import educationIcon from "../images/icons/education-ion.svg";
import enterprenuerIcon from "../images/icons/entreprenuer-icon.svg";
import cashFlowIcon from "../images/icons/cashflow-icon.svg";
import businessesIcon from "../images/icons/business-icon.svg";
import paymentIcon from "../images/icons/payment-icon.svg";

const Home: React.FC = () => {
  return (
    <>
      <Section>
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
                className="text-sm"
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

            <div className="grid grid-cols-1 gap-10 lg:grid-rows-1 lg:grid-cols-2">
              <div className="grid rounded-xl grid-cols-2 lg:grid-rows-2 gap-2.5 p-6 mt-14 lg:grid-cols-2 bg-Brandblack11 bg-Card-bg bg-no-repeat">
                <div className="rounded-lg bg-Brandblack76 border-customBorderWidth border-borderColor">
                  <Cards
                    icon={financeIcon}
                    title="Managing Personal Finances"
                  />
                </div>
                <div className="rounded-lg bg-Brandblack76 border-customBorderWidth border-borderColor">
                  <Cards
                    icon={saving2Icon}
                    title="Saving for the Future"
                  />
                </div>
                <div className="rounded-lg bg-Brandblack76 border-customBorderWidth border-borderColor">
                  <Cards
                    icon={homeIcon}
                    title="Home Ownership"
                  />
                </div>
                <div className="rounded-lg bg-Brandblack76 border-customBorderWidth border-borderColor">
                  <Cards
                    icon={educationIcon}
                    title="Educational Funding"
                  />
                </div>
              </div>

              <div className="">
                <Headers
                  title="For Individuals"
                  bodyText="For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers."
                />

                <div className="flex flex-col justify-between lg:flex-row">
                  <Headers
                    title="78%"
                    bodyText="Secure Retirement Planning"
                  />
                  <Headers
                    title="63%"
                    bodyText="Manageable Debt Consolidation"
                  />
                  <Headers
                    title="91%"
                    bodyText="Reducing financial burdens"
                  />
                </div>

                <Button
                  cta="Learn More"
                  colors={{
                    bgColor: "bg-Brandblack11",
                    textColor: "text-white",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <Headers
              title="Use Cases"
              bodyText="At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions."
            />

            <div className="grid grid-cols-1 gap-10 lg:grid-rows-1 lg:grid-cols-2">
              <div className="grid rounded-xl grid-cols-2 lg:grid-rows-2 gap-2.5 p-6 mt-14 lg:grid-cols-2 bg-Brandblack11 bg-Card-bg bg-no-repeat">
                <div className="rounded-lg bg-Brandblack76 border-customBorderWidth border-borderColor">
                  <Cards
                    icon={enterprenuerIcon}
                    title="Startups and Entrepreneurs"
                  />
                </div>
                <div className="rounded-lg bg-Brandblack76 border-customBorderWidth border-borderColor">
                  <Cards
                    icon={cashFlowIcon}
                    title="Cash Flow Management"
                  />
                </div>
                <div className="rounded-lg bg-Brandblack76 border-customBorderWidth border-borderColor">
                  <Cards
                    icon={businessesIcon}
                    title="Business Expansion"
                  />
                </div>
                <div className="rounded-lg bg-Brandblack76 border-customBorderWidth border-borderColor">
                  <Cards
                    icon={paymentIcon}
                    title="Payment Solutions"
                  />
                </div>
              </div>

              <div className="">
                <Headers
                  title="For Businesses"
                  bodyText=" For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them"
                />

                <div className="flex flex-col justify-between lg:flex-row">
                  <Headers
                    title="65%"
                    bodyText="Cash Flow Management"
                  />
                  <Headers
                    title="70%"
                    bodyText="Drive Business Expansion"
                  />
                  <Headers
                    title="45%"
                    bodyText="Streamline payroll processing"
                  />
                </div>

                <Button
                  cta="Learn More"
                  colors={{
                    bgColor: "bg-Brandblack11",
                    textColor: "text-white",
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section >
    </>
  );
};

export default Home;
