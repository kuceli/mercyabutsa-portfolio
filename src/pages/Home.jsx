import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import { FaFacebookF, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from "../assets/home-pictures/1.jpg";
import Img2 from "../assets/home-pictures/2.jpg";
import Img3 from "../assets/home-pictures/3.jpg";
import Img4 from "../assets/home-pictures/4.jpg";
import Img5 from "../assets/home-pictures/5.jpg";
import Img6 from "../assets/home-pictures/6.jpg";
import Img7 from "../assets/home-pictures/7.jpg";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Global Development Specialist",
      "Climate Change Analyst",
      "Communications Strategist",
      "Community Organizer",
      "Learning and Development Expert",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const images = [Img2, Img5, Img4, Img7, Img1, Img3, Img6];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div className="min-h-[calc(100vh-72px-48px)] border border-solid border-red-500 flex flex-col lg:flex-row items-center w-full pt-24 px-8 md:px-12 lg:px-20 sm:gap-y-12 lg:gap-x-12 overflow-hidden">
      {/* Left */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex flex-col-reverse sm:flex-row text-center sm:text-left gap-x-4"
      >
        <div className="flex sm:flex-col gap-4 sm:gap-y-6 justify-center sm:w-[5%] lg:w-[10%] text-lg my-4 sm:mb-0">
          {[
            {
              icon: <FaLinkedinIn />,
              url: "https://www.linkedin.com/in/mercy-a-abutsa-8066b3215/",
            },
            {
              icon: <FaFacebookF />,
              url: "https://www.facebook.com/mercykaren.abutsa/",
            },
            { icon: <FaMediumM />, url: "https://medium.com/@abutsamercy" },
            {
              icon: <GrInstagram />,
              url: "https://www.instagram.com/msa_karen/",
            },
          ].map(({ icon, url }, index) => (
            <a
              key={index}
              target="_blank"
              href={url}
              rel="noopener noreferrer"
              className="text-[#07363C] hover:text-[#F48D3F] transition-all duration-300 transform hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center sm:w-[95%] lg:w-[90%] w-full">
          <p className="text-[#F48D3F] text-lg">Hello, I'm</p>
          <p className="text-[#07363C] text-3xl md:text-4xl font-semibold">
            Mercy Abutsa
          </p>
          <p className="text-[#07363C] text-base md:text-lg">
            A Passionate
            <span className="font-semibold text-[#F48D3F]">
              {" "}
              {text} <Cursor />
            </span>
          </p>
          <p className="pt-2 text-sm md:text-base text-[#07363C] text-center sm:text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has been the industry's standard.
          </p>

          <Link to="/contact" className="font-medium m-auto sm:m-0">
            <div className="cursor-pointer relative group mt-4 w-40 h-[50px] rounded-full overflow-hidden border border-[#07363C] text-[#07363C] transition-all duration-300 hover:text-white hover:shadow-md">
              <a
                href="https://drive.google.com/file/d/1uVv4afeJ_GSY67pm_SSGUFGeznKfyx8d/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full relative z-10 space-x-2"
              >
                <span>Contact Me</span>
                <IoIosArrowForward
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <span className="absolute bottom-0 left-0 top-0 z-0 h-full w-0 bg-[#07363C] transition-all duration-500 group-hover:w-full"></span>
            </div>
          </Link>
        </div>
      </motion.div>

      {/* Right - Carousel on small screens, Grid on large */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex items-center"
      >
        {/* Carousel for small screens */}
        <div className="block lg:hidden w-full">
          <Slider {...carouselSettings}>
            {images.map((img, index) => (
              <div key={index} className="px-2">
                <img
                  src={img}
                  alt={`slide-${index}`}
                  loading="lazy"
                  className="w-full h-[450px] object-cover rounded-md"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Grid for large screens */}
        <div className="hidden lg:grid grid-cols-5 grid-rows-5 gap-3 w-full h-full max-h-[600px]">
          <div className="col-span-2 row-span-2 col-start-2">
            <img
              src={Img2}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-start-4">
            <img
              src={Img5}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-start-3 row-start-3">
            <img
              src={Img4}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-1 row-start-3">
            <img
              src={Img7}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-start-2 row-start-5">
            <img
              src={Img1}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-3 row-start-4">
            <img
              src={Img3}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-4 row-start-2">
            <img
              src={Img6}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
