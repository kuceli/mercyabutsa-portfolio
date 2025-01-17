import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo/PNG Transparent.png";
import { FaDownload } from "react-icons/fa6";

const Header = () => {
  return (
    <nav className="text-[#07363C] py-3 px-8 w-[80%] mx-auto mt-6 rounded-full flex items-center justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)] fixed top-0 left-0 right-0 bg-white">
      <img src={Logo} alt="logo" className="w-[6%] h-[6%]" />
      <ul className="flex space-x-6 uppercase font-medium justify-center  items-center">
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
        <li className="text-[#F48D3F] flex items-center space-x-2 border border-solid border-[#F48D3F] px-4 py-3 rounded-full">
          <a
            href="https://drive.google.com/file/d/1uVv4afeJ_GSY67pm_SSGUFGeznKfyx8d/view?usp=sharing"
            target="_blank"
          >
            Download CV
          </a>
          <FaDownload size={20} />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
