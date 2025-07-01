import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/Logo/PNG Transparent.png";
import { FaDownload } from "react-icons/fa6";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-[#07363C] h-[72px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-sm md:text-base font-medium py-3 px-8 md:px-12 lg:px-20 w-full mx-auto flex items-center justify-between fixed top-0 left-0 right-0 bg-white z-50">
      <Link to="/" className="w-[60px] h-auto">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <ul
        className={`absolute md:static top-14 left-0 pb-4 md:pb-0 w-full md:w-auto bg-white md:flex space-x-0 md:space-x-10 justify-center items-center flex-col md:flex-row transition-all duration-300 ease-in-out ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <li className="py-2 md:py-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#F48D3F]"
                : "hover:text-[#F48D3F] transition-colors"
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li className="py-2 md:py-0">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#F48D3F]"
                : "hover:text-[#F48D3F] transition-colors"
            }
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li className="py-2 md:py-0">
          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive
                ? "text-[#F48D3F]"
                : "hover:text-[#F48D3F] transition-colors"
            }
            onClick={() => setMenuOpen(false)}
          >
            Work
          </NavLink>
        </li>
        <li className="py-2 md:py-0">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#F48D3F]"
                : "hover:text-[#F48D3F] transition-colors"
            }
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </li>
        <li className="relative group mt-2 md:mt-0 w-40 h-[50px] rounded-full overflow-hidden border border-[#F48D3F] text-[#F48D3F] transition-all duration-300 hover:text-white hover:shadow-[0_8px_20px_rgba(244,141,63,0.15)]">
          <a
            href="https://drive.google.com/file/d/1uVv4afeJ_GSY67pm_SSGUFGeznKfyx8d/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full h-full relative z-10 space-x-2"
          >
            <span className="relative z-10">Download CV</span>
            <FaDownload
              size={18}
              className="transition-transform duration-300 group-hover:rotate-[-15deg] group-hover:scale-110"
            />
          </a>
          <span className="absolute bottom-0 left-0 top-0 z-0 h-full w-0 bg-[#F48D3F] transition-all duration-500 group-hover:w-full"></span>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
