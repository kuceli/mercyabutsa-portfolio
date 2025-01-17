import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";
import Img from "../assets/mercy-picture.jpeg";
import { IoIosArrowForward } from "react-icons/io";

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
  return (
    <>
      <div className="flex w-[100%] h-screen">
        <div className=" w-[50%] h-[100%]">
          <img
            src={Img}
            alt="mercy"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className=" w-[50%] h-[100%] flex flex-col justify-center px-16">
          <p className="font-semibold text-[50px] pb-4 text-[#07363C]">
            MERCY
            <span className="text-[#F48D3F]"> ABUTSA</span>
          </p>
          <div className="w-24 h-1 bg-[#07363C]"></div>
          <p className="font-normal text-[20px] py-4 text-[#F48D3F]">
            Passionate
            <span className="font-semibold text-[#07363C]">
              {" "}
              {text} <Cursor />
            </span>
          </p>
          <p className=" text-[15px] text-[#07363C] text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="flex items-center justify-between text-[#07363C] mt-4 cursor-pointer space-x-2 border border-solid border-[#07363C] px-4 py-3 rounded-full w-[27%]">
            <Link to="/contact" className="font-semibold uppercase">
              Contact Me
            </Link>
            <IoIosArrowForward size={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
