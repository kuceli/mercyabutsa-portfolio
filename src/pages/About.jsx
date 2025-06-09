import React from "react";
import Img1 from "../assets/about-pictures/mercy-picture.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mt-32 w-full h-full text-[#07363C]">
      <div className="flex items-center justify-center mb-7 px-36 ">
        <div className="h-[2px] w-[60%] xl:w-[35%] flex">
          <div className="w-[50%] h-[100%] bg-[#07363C]"></div>
          <div className="w-[50%] h-[100%] bg-[#F48D3F]"></div>
        </div>
        <p className="w-[40%] xl:w-[30%] mx-4 font-semibold tracking-[0.35rem] text-[25px] text-center">
          ABOUT MERCY
        </p>
        <div className="h-[2px] w-[60%] xl:w-[35%] flex">
          <div className="w-[50%] h-[100%] bg-[#F48D3F]"></div>
          <div className="w-[50%] h-[100%] bg-[#07363C]"></div>
        </div>
      </div>

      <div className="h-[655px] w-[100%] flex gap-x-12  px-36 mb-12 ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-[100%] w-[55%] py-6 text-base/7 flex flex-col gap-y-4 justify-center"
        >
          <p>
            {" "}
            Mercy Abutsa is a global development specialist passionate about
            building climate-resilient communities and driving gender-responsive
            solutions at the intersection of policy, agriculture, and
            environmental justice. With over five years of experience spanning
            international development, climate diplomacy, and grassroots
            engagement, Mercy brings a dynamic blend of field expertise,
            strategic thinking, and advocacy to her work.
          </p>
          <p>
            Her professional journey includes impactful roles with
            world-renowned organizations such as the Ban Ki-moon Centre for
            Global Citizens, the United Nations Framework Convention on Climate
            Change (UNFCCC), The Nature Conservancy (TNC), and the Women
            Environmental Programme (WEP). Across these roles, she has led and
            supported high-level programs focused on equitable climate action,
            sustainable agriculture, and inclusive governance—shaping policies
            and mobilizing resources to uplift vulnerable communities,
            especially women and youth.
          </p>
          <p>
            Her professional journey includes impactful roles with
            world-renowned organizations such as the Ban Ki-moon Centre for
            Global Citizens, the United Nations Framework Convention on Climate
            Change (UNFCCC), The Nature Conservancy (TNC), and the Women
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-[100%] w-[45%]"
        >
          <img
            src={Img1}
            alt="Mercy's Picture"
            className="h-[100%] w-[100%] object-cover"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="h-[655px] w-[100%] flex gap-x-12 mb-5 px-36"
      >
        <div className="h-[100%] w-[45%]">
          <img
            src={Img1}
            alt="Mercy's Picture"
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
        <div className="h-[100%] w-[55%] py-6 text-base/7 flex flex-col gap-y-4 justify-center">
          <p>
            {" "}
            Mercy Abutsa is a global development specialist passionate about
            building climate-resilient communities and driving gender-responsive
            solutions at the intersection of policy, agriculture, and
            environmental justice. With over five years of experience spanning
            international development, climate diplomacy, and grassroots
            engagement, Mercy brings a dynamic blend of field expertise,
            strategic thinking, and advocacy to her work.
          </p>
          <p>
            Her professional journey includes impactful roles with
            world-renowned organizations such as the Ban Ki-moon Centre for
            Global Citizens, the United Nations Framework Convention on Climate
            Change (UNFCCC), The Nature Conservancy (TNC), and the Women
            Environmental Programme (WEP). Across these roles, she has led and
            supported high-level programs focused on equitable climate action,
            sustainable agriculture, and inclusive governance—shaping policies
            and mobilizing resources to uplift vulnerable communities,
            especially women and youth.
          </p>
          <p>
            Her professional journey includes impactful roles with
            world-renowned organizations such as the Ban Ki-moon Centre for
            Global Citizens, the United Nations Framework Convention on Climate
            Change (UNFCCC), The Nature Conservancy (TNC), and the Women
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
