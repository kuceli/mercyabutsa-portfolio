import React, { useState, useEffect, useRef } from "react";
import { MdLocationOn } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { BsPhoneFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lflb59r",
        "template_k7jakge",
        form.current,
        "vQUGFYdVHPtNk5r5g"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: `<h5 style='color:green'>Message Sent Successfully</h5>`,
            confirmButtonColor: "green",
          });
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: `<h5 style='color:red'>Ooops, something went wrong</h5>`,
            confirmButtonColor: "red",
          });
        }
      );
  };

  const ButtonStyle = {
    padding: "15px 25px ",
    fontWeight: "600",
    border: "2px solid #07363C",
    transition: "all 0.7s",
  };
  const cardStyle = {
    transition: "all 0.7s",
  };
  return (
    <div className="flex flex-col justify-between w-[70%] m-auto px-32 py-12 h-[calc(90vh-45px)] mt-20">
      <div className="flex items-center justify-center mb-7">
        <div className="h-[2px] w-[60%] xl:w-[30%] flex">
          <div className="w-[50%] h-[100%] bg-[#07363C]"></div>
          <div className="w-[50%] h-[100%] bg-[#F48D3F]"></div>
        </div>
        <p className="w-[40%] xl:w-[40%] mx-4 font-semibold tracking-[0.35rem] text-[25px] text-center">
          GET IN TOUCH
        </p>
        <div className="h-[2px] w-[60%] xl:w-[30%] flex">
          <div className="w-[50%] h-[100%] bg-[#F48D3F]"></div>
          <div className="w-[50%] h-[100%] bg-[#07363C]"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-x-6 gap-y-6 justify-between md:h-[6rem] mt-8 md:mt-0 mb-5">
        <a
          href="https://maps.app.goo.gl/yfuzEv8GEwU3koFd6"
          target="_blank"
          style={cardStyle}
          className="lg:text-[90%] h-[6rem] w-[100%] md:w-[35%] xl:w-[30%] border border-solid border-[#E5E9ED]-500 hover:bg-[#07363C] hover:text-[#fff] text-[#7D7789] flex flex-col gap-2 justify-center items-center"
        >
          <MdLocationOn />
          <p>USA/Nigeria</p>
        </a>
        <a
          href="mailto:abutsamercy@gmail.com"
          style={cardStyle}
          className="lg:text-[90%] h-[6rem] w-[100%] md:w-[40%] xl:w-[30%] border border-solid border-[#E5E9ED]-500 text-[#7D7789] hover:bg-[#07363C] hover:text-[#fff] flex flex-col gap-2 items-center justify-center"
        >
          <HiMail />
          <p>abutsamercy@gmail.com</p>
        </a>
        <a
          href="tel:+2349068777214"
          style={cardStyle}
          className="lg:text-[90%] h-[6rem] w-[100%] mb-8 md:mb-0 md:w-[35%] xl:w-[30%] border border-solid border-[#E5E9ED]-500 text-[#7D7789] hover:bg-[#07363C] hover:text-[#fff] flex flex-col gap-2 items-center justify-center"
        >
          <BsPhoneFill />
          <p>+234 906 877 7214</p>
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-x-5 w-[100%]">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-y-5 w-[100%] pb-5 md:pb-0"
        >
          <input
            type="text"
            placeholder="Name"
            name="from_name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="p-3 border border-solid border-[#E5E9ED]-500 bg-[#F8F9FA] hover:border-[#F48D3F] focus:border-[#F48D3F] text-sm w-full outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            name="from_email"
            className=" p-3 border border-solid border-[#E5E9ED]-500 bg-[#F8F9FA] hover:border-[#F48D3F] focus:border-[#F48D3F] text-sm w-full outline-none"
          />
          <textarea
            placeholder="Message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 border border-solid border-[#E5E9ED]-500 bg-[#F8F9FA] hover:border-[#F48D3F] focus:border-[#F48D3F] text-sm w-full h-40 outline-none"
          />
          <input
            type="submit"
            style={ButtonStyle}
            className=" bg-[#07363C] hover:bg-[#FFFFFF] text-[#ffffff] hover:text-[#07363C] w-[60%] xl:w-[50%] cursor-pointer m-auto"
            value="Send Message"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
