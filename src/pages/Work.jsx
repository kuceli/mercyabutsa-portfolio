import React from "react";
import WorkAccordion from "../components/WorkAccordion";
import FeaturedCarousel from "../components/FeaturedCarousel";
import WorkExpertise from "../components/WorkExpertise";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="mt-32 w-full text-[#07363C] px-6 sm:px-10 md:px-20 lg:px-28 xl:px-36">
      {/* Heading */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-10 text-center gap-4">
        <div className="flex h-[2px] w-full md:w-[30%]">
          <div className="w-1/2 h-full bg-[#07363C]"></div>
          <div className="w-1/2 h-full bg-[#F48D3F]"></div>
        </div>
        <p className="text-xl md:text-2xl tracking-[0.35rem] font-semibold">
          WORK HIGHLIGHTS
        </p>
        <div className="flex h-[2px] w-full md:w-[30%]">
          <div className="w-1/2 h-full bg-[#F48D3F]"></div>
          <div className="w-1/2 h-full bg-[#07363C]"></div>
        </div>
      </div>

      {/* Highlight Section */}
      <div className="w-full flex flex-col lg:flex-row gap-8 mb-0 lg:h-[525px]">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full lg:w-[40%] h-64 sm:h-80 lg:h-full"
        >
          <div className="w-full h-full bg-yellow-500 overflow-hidden"></div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full lg:w-[60%] flex flex-col gap-4"
        >
          <div className="text-lg sm:text-xl uppercase tracking-[0.2rem]">
            Name of Organization
          </div>
          <div className="text-sm leading-relaxed">
            This could serve as a concise "about" section instead of creating
            another about section. Something short about the organization. This
            is a dummy text. On her way she met a copy. The copy warned the
            Little Blind Text, that where it came from it would have been
            rewritten a thousand times and everything that was left from its
            origin would be the word "and" and the Little Blind Text should turn
            around and return to its own, safe country.
          </div>
          <div>
            <WorkAccordion />
          </div>
        </motion.div>
      </div>

      {/* Carousel */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <FeaturedCarousel />
      </motion.div>
      {/* Expertise */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <WorkExpertise />
      </motion.div>
    </div>
  );
};

export default Work;
