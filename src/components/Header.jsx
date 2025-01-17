import React from "react";
import { Link } from "react-router-dom";
// import { Logo } from "../assets/Logo/logo-transparent.svg";

const Header = () => {
  return (
    <nav className="text-[#07363C] py-4 px-8 border border-solid border-red-500 w-[80%] mx-auto my-6 rounded-full flex items-center justify-between">
      {/* <img src={Logo} alt="logo" className="w-12 h-12 md:w-16 md:h-16" /> */}
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link to="/" className="hover:text-[#F48D3F]">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-[#F48D3F]">
            About
          </Link>
        </li>
        <li>
          <Link to="/work" className="hover:text-[#F48D3F]">
            Work
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-[#F48D3F]">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
