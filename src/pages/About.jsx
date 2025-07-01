import React from "react";
import Img1 from "../assets/about-pictures/mercy-picture.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-72px-48px)] mt-32 mb-10 w-full px-8 md:px-12 lg:px-20 xl:px-36 text-[#07363C]">
      {/* Heading */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-10 text-center gap-4">
        <div className="flex h-[2px] w-full md:w-[30%]">
          <div className="w-1/2 h-full bg-[#07363C]"></div>
          <div className="w-1/2 h-full bg-[#F48D3F]"></div>
        </div>
        <p className="text-xl md:text-2xl tracking-[0.35rem] font-semibold">
          ABOUT MERCY
        </p>
        <div className="flex h-[2px] w-full md:w-[30%]">
          <div className="w-1/2 h-full bg-[#F48D3F]"></div>
          <div className="w-1/2 h-full bg-[#07363C]"></div>
        </div>
      </div>

      {/* First Section */}
      <div className="flex flex-col lg:flex-row gap-10 mb-12 ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full lg:w-1/2 text-sm sm:text-base flex flex-col gap-4 justify-center text-justify "
        >
          <p>
            Mercy Abutsa is a global development specialist passionate about
            building climate-resilient communities and driving gender-responsive
            solutions at the intersection of policy, agriculture, and
            environmental justice.
          </p>
          <p>
            With over five years of experience spanning international
            development, climate diplomacy, and grassroots engagement, she
            brings a dynamic blend of field expertise, strategic thinking, and
            advocacy.
          </p>
          <p>
            Her journey includes impactful roles at organizations like the Ban
            Ki-moon Centre, UNFCCC, The Nature Conservancy, and WEP—leading
            equitable climate action, sustainable agriculture, and inclusive
            governance.
          </p>
          <p>
            With over five years of experience spanning international
            development, climate diplomacy, and grassroots engagement, she
            brings a dynamic blend of field expertise, strategic thinking, and
            advocacy.
          </p>
          <p>
            Her journey includes impactful roles at organizations like the Ban
            Ki-moon Centre, UNFCCC, The Nature Conservancy, and WEP—leading
            equitable climate action, sustainable agriculture, and inclusive
            governance.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <img
            src={Img1}
            alt="Mercy's Picture"
            className="w-full h-[600px] object-cover"
          />
        </motion.div>
      </div>

      {/* Second Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col-reverse lg:flex-row gap-10"
      >
        <div className="w-full lg:w-1/2">
          <img
            src={Img1}
            alt="Mercy's Picture"
            className="w-full h-[600px] object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 text-sm sm:text-base flex flex-col gap-4 justify-center text-justify ">
          <p>
            Mercy Abutsa is a global development specialist passionate about
            building climate-resilient communities and driving gender-responsive
            solutions at the intersection of policy, agriculture, and
            environmental justice.
          </p>
          <p>
            She has served with globally recognized organizations such as the
            Ban Ki-moon Centre, UNFCCC, The Nature Conservancy, and
            WEP—mobilizing resources and shaping equitable policies for
            vulnerable communities.
          </p>
          <p>
            Her leadership consistently centers women and youth in climate and
            development action.
          </p>
          <p>
            With over five years of experience spanning international
            development, climate diplomacy, and grassroots engagement, she
            brings a dynamic blend of field expertise, strategic thinking, and
            advocacy.
          </p>
          <p>
            Her journey includes impactful roles at organizations like the Ban
            Ki-moon Centre, UNFCCC, The Nature Conservancy, and WEP—leading
            equitable climate action, sustainable agriculture, and inclusive
            governance.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
