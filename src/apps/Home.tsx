import React from "react";
import { Hero } from "../components/Hero";
import "../styles/App.css";
import Section from "../components/Section";
import Container from "../components/Container";
import checkIcon from "../images/icons/check-icons.svg"

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
    </>
  );
};

export default Home;
