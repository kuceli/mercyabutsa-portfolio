import React from "react";
import WorkAccordion from "../components/WorkAccordion";
import FeaturedCarousel from "../components/FeaturedCarousel";
import Img1 from "../assets/home-pictures/1.jpg";
import Img2 from "../assets/home-pictures/2.jpg";
import WorkExpertise from "../components/WorkExpertise";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="mt-32 w-full h-full text-[#07363C] px-36 ">
      <div className="flex items-center justify-center mb-7 ">
        <div className="h-[2px] w-[60%] xl:w-[30%] flex">
          <div className="w-[50%] h-[100%] bg-[#07363C]"></div>
          <div className="w-[50%] h-[100%] bg-[#F48D3F]"></div>
        </div>
        <p className="w-[40%] xl:w-[40%] mx-4 font-semibold tracking-[0.35rem] text-[25px] text-center">
          WORK HIGHLIGHTS
        </p>
        <div className="h-[2px] w-[60%] xl:w-[30%] flex">
          <div className="w-[50%] h-[100%] bg-[#F48D3F]"></div>
          <div className="w-[50%] h-[100%] bg-[#07363C]"></div>
        </div>
      </div>

      <div className="h-[511px] w-[100%] flex justify-between  ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className=" h-[100%] w-[30%] "
        >
          <div className="h-[100%] w-[100%] bg-yellow-500 relative">
            <div className="absolute top-[15%] left-[20%] w-[110%] h-[70%] bg-black opacity-50"></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-[100%] w-[55%] flex flex-col gap-y-4 "
        >
          <div className="text-xl w-[100%] uppercase tracking-[0.2rem]">
            Name of Organization
          </div>
          <div className=" h-[30%] text-sm">
            This could serve as a concise "about" section instead of creating
            another about section. Something short about the organization. this
            is a dummy text. On her way she met a copy. The copy warned the
            Little Blind Text, that where it came from it would have been
            rewritten a thousand times and everything that was left from its
            origin would be the word "and" and the Little Blind Text should turn
            around and return to its own, safe country. everything that was left
            from its origin would be the word "and" and the Little Blind Text
            should turn around and return to its own, safe country.the Little
            Blind Text should turn around and return to its own, safe country.
          </div>
          <div className=" h-[40%]">
            <WorkAccordion />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className=""
      >
        <FeaturedCarousel />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className=""
      >
        <WorkExpertise />
      </motion.div>
    </div>
  );
};

export default Work;
