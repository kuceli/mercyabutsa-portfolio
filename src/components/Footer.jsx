import React from "react";
import { FaFacebookF, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
const Footer = () => {
  const style = { color: "#07363C" };
  return (
    <div className="hidden md:flex justify-between items-center px-14 h-[7%] fixed bottom-0 w-[100%]">
      <div className="text-white">Copyright © 2025</div>
      <div className="flex gap-x-2">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mercy-a-abutsa-8066b3215/"
        >
          <FaLinkedinIn style={style} />
        </a>
        <a target="_blank" href="https://www.facebook.com/mercykaren.abutsa/">
          <FaFacebookF style={style} />
        </a>
        <a target="_blank" href="https://medium.com/@abutsamercy">
          <FaMediumM style={style} />
        </a>
        <a target="_blank" href="https://www.instagram.com/msa_karen/">
          <GrInstagram style={style} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
