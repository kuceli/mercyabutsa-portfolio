import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import Img1 from "../assets/home-pictures/1.jpg";
import Img2 from "../assets/home-pictures/2.jpg";
import Img3 from "../assets/home-pictures/3.jpg";
import Img4 from "../assets/home-pictures/4.jpg";
import Img5 from "../assets/home-pictures/5.jpg";
import Img6 from "../assets/home-pictures/6.jpg";
import Img7 from "../assets/home-pictures/7.jpg";

const Home = () => {
  const style = { color: "#07363C" };
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

  return (
    <>
      <div className="flex items-center w-[100%] h-[calc(100vh-45px)] pt-36 pb-12 pl-20 gap-x-12 ">
        <div className=" w-[50%] h-full flex">
          <div className="flex justify-center flex-col gap-y-6 w-[10%]">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mercy-a-abutsa-8066b3215/"
            >
              <FaLinkedinIn style={style} />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/mercykaren.abutsa/"
            >
              <FaFacebookF style={style} />
            </a>
            <a target="_blank" href="https://medium.com/@abutsamercy">
              <FaMediumM style={style} />
            </a>
            <a target="_blank" href="https://www.instagram.com/msa_karen/">
              <GrInstagram style={style} />
            </a>
          </div>
          <div className="flex flex-col justify-center w-[90%]">
            <p className="font-normal text-[20px] text-[#F48D3F]">
              {" "}
              Hello, I'm
            </p>
            <p className="font-semibold text-[50px] text-[#07363C]">
              Mercy Abutsa
            </p>
            <p className="font-normal text-[20px] text-[#07363C]">
              A Passionate
              <span className="font-semibold text-[#F48D3F] ">
                {" "}
                {text} <Cursor />
              </span>
            </p>
            <p className="pt-2 text-[15px] text-[#07363C] text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has been the industry's standard.
            </p>
            <Link to="/contact" className="font-medium">
              <div className="flex items-center justify-between text-[#07363C] mt-4 cursor-pointer space-x-2 border border-solid border-[#07363C] px-4 py-3 rounded-full w-[24%]">
                Contact Me
                <IoIosArrowForward size={20} />
              </div>
            </Link>
          </div>
        </div>
        <div className=" w-[50%] h-full flex items-center">
          <div className="grid grid-cols-5 grid-rows-5 gap-3 w-[100%] h-full">
            <div className="col-start-4 row-start-1 ">
              <img
                src={Img2}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="col-span-2 row-span-2 col-start-4 row-start-2">
              <img
                src={Img5}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="col-start-3 row-start-3 ">
              <img
                src={Img4}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="col-span-2 row-span-2 col-start-3 row-start-4 ">
              <img
                src={Img7}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="col-span-2 row-span-2 col-start-2 row-start-1 ">
              <img
                src={Img1}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="col-span-2 row-span-2 col-start-1 row-start-3 ">
              <img
                src={Img3}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="col-start-2 row-start-5 ">
              <img
                src={Img6}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
