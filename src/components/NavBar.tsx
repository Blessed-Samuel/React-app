import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-30 w-full p-4 bg-blue-500 bg-opacity-80 backdrop-blur-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <div className="text-2xl text-white">
          <Link to="/">BrandName</Link>
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
        <div className={`lg:flex ${isOpen ? "block" : "hidden"} space-x-4`}>
          <Link className="text-white hover:text-gray-200" to="/">Home</Link>
          <Link className="text-white hover:text-gray-200" to="/about">About</Link>
          <Link className="text-white hover:text-gray-200" to="/services">Services</Link>
          <Link className="text-white hover:text-gray-200" to="/contact">Contact Us</Link>
          <Link className="text-white hover:text-gray-200" to="/login">LogIn</Link>
          <Link className="text-white hover:text-gray-200" to="/signup">SignUp</Link>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
