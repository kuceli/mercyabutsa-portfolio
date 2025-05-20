import React from "react";
import img1 from "../assets/about-logos/UNFCCC.png";
import img2 from "../assets/home-pictures/2.jpg";

const logos = [img1, img1, img1, img1, img1, img2];

const AboutLogoCarousel = () => {
  // Duplicate the logos for seamless looping
  const scrollingLogos = [...logos, ...logos];

  return (
    <div className="w-full h-[100px] overflow-hidden bg-white">
      <div className="flex animate-scroll space-x-8 items-center h-full">
        {scrollingLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="h-full object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default AboutLogoCarousel;
