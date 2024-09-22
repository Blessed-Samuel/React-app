// src/apps/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import logo from "../images/logo.svg";
import "../styles/App.css";

const Home = () => {
  return (
    <>
      <Hero />
      <img className="w-1/2 mt-8 img" src={logo} alt="react-logo" />
    </>
  );
};

export default Home;
