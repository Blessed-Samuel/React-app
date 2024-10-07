import React, { useState } from "react";
import { Link } from "react-router-dom";
import Brandlogo from "../images/Brand-Logo@4x.svg";
import Container from "./Container";
import Button from "./Button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <nav className="fixed z-30 w-11/12 transform -translate-x-1/2 rounded-full border-[#262626] border-customBorderWidth bg-Brandblack11 max-w-viewport top-8 left-1/2 bg-opacity-40 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-3 md:px-10 md:py-4">
          <div className="flex items-center space-x-2 text-xs font-light text-white cursor-pointer">
            <Link to="/" className="flex items-center space-x-2">
              <img src={Brandlogo} alt="brand-logo" className="w-auto h-8" />
              <span>YourBank</span>
            </Link>
          </div>

          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>

          <div className={`lg:flex ${isOpen ? "block" : "hidden"} space-x-6 mx-auto`}>
            <Link className="text-xs font-light text-white hover:text-gray-200" to="/">Home</Link>
            <Link className="text-xs font-light text-white hover:text-gray-200" to="/careers">Careers</Link>
            <Link className="text-xs font-light text-white hover:text-gray-200" to="/about">About</Link>
            <Link className="text-xs font-light text-white hover:text-gray-200" to="/security">Security</Link>
          </div>

          <div className={`lg:flex ${isOpen ? "block" : "hidden"} space-x-4 items-center`}>
            <Link className="text-xs font-light text-white hover:text-gray-200" to="/signup">SignUp</Link>
            <Link className="text-xs font-light" to="/login">
              <div className="p-0">
                <Button
                  cta="LogIn"
                  colors={{
                    bgColor: "bg-Brandlemon60",
                    textColor: "text-Brandblack11"
                  }}
                />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
