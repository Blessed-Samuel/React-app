// src/apps/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import { ReactComponent as Logo } from "../images/logo.svg";
import "../styles/App.css";

const Home = () => {
  return (
    <>
      <Hero />
      <Logo alt="react-logo" className="w-1/2 mt-8 img" />
    </>
  );
};

export default Home;
