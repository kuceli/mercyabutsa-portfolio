import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo/PNG Transparent.png";
import { FaDownload } from "react-icons/fa6";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-[#07363C] shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-sm md:text-base font-medium py-3 px-8 md:px-20 w-full mx-auto flex items-center justify-between fixed top-0 left-0 right-0 bg-white z-50">
      <Link to="/" className="w-[10%] md:w-[6%] h-auto">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <ul
        className={`absolute md:static top-12 left-0 pb-4 md:pb-0 w-full md:w-auto bg-white md:flex space-x-0 md:space-x-10 justify-center items-center flex-col md:flex-row transition-all duration-300 ease-in-out ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <li className="py-2 md:py-0">
          <Link
            to="/"
            className="hover:text-[#F48D3F]"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link
            to="/about"
            className="hover:text-[#F48D3F]"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link
            to="/work"
            className="hover:text-[#F48D3F]"
            onClick={() => setMenuOpen(false)}
          >
            Work
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link
            to="/contact"
            className="hover:text-[#F48D3F]"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
        <li className="flex text-[#F48D3F] items-center space-x-2 border border-solid border-[#F48D3F] px-4 mt-2 md:mt-0 py-3 rounded-full">
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
