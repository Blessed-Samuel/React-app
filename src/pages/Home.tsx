import React from "react";
import Hero from "../components/Hero";
import Logo from "../images/logo.svg"; // Import as default
import "../styles/App.css";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <img src={Logo} alt="react-logo" className="w-1/2 mt-8 img" />
    </>
  );
};

export default Home;
