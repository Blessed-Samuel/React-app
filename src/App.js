import React from "react";

import logo from "./images/logo.svg";
import Hero from "./components/Hero";
import About from "./apps/About";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <div>
        <header className="text-center flex flex-col items-center">
          <Hero />
          <About />

          <img
            className="w-1/2 mt-8 img"
            src={logo} alt="react-logo"  
          />
        </header>
      </div>
    </>
  );
};

export default App;
