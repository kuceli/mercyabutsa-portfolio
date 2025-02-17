import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";

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
      <div className="flex w-[100%] h-screen">
        <div className=" w-[50%] h-[100%] flex px-16">
          <div className="flex justify-center items-center flex-col gap-y-6 w-[15%]">
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
          <div className="flex flex-col justify-center w-[85%]">
            <p className="font-normal text-[20px] text-[#F48D3F]">
              {" "}
              Hello, I'm
            </p>
            <p className="font-semibold text-[50px] text-[#07363C]">
              Mercy Abutsa
            </p>
            {/* <div className="w-24 h-1 bg-[#07363C]"></div> */}
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

            <div className="flex items-center justify-between text-[#07363C] mt-4 cursor-pointer space-x-2 border border-solid border-[#07363C] px-4 py-3 rounded-full w-[29%]">
              <Link to="/contact" className="font-medium">
                Contact Me
              </Link>
              <IoIosArrowForward size={20} />
            </div>
          </div>
        </div>
        <div className=" w-[50%] h-[100%] border border-solid border-red-500"></div>
      </div>
    </>
  );
};

export default Home;
