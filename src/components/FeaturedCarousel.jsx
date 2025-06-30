import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../assets/work-carousel/Img1.jpeg";
import Img2 from "../assets/work-carousel/Img2.jpeg";
import Img3 from "../assets/work-carousel/Img3.jpeg";
import Img4 from "../assets/work-carousel/Img4.jpg";
import Img5 from "../assets/work-carousel/Img5.webp";

const featuredItems = [
  {
    image: Img1,
    title: "Abutsa Climate Advocacy in Nigeria Webinar week 4 Climate Advocacy",
    date: "Jun 13, 2024",
    link: "https://www.youtube.com/watch?v=CpmjVSY8p9U",
    source: "Youtube",
    button: "Watch Now",
  },
  {
    image: Img2,
    title: "Mercy Abutsa, MPS '24: Engaging youth in climate action in Nigeria",
    date: "Feb 19, 2024",
    link: "https://cals.cornell.edu/news/2024/02/mercy-abutsa-mps-24-engaging-youth-climate-action-nigeria",
    source: "CornellCALS",
    button: "Read More",
  },
  {
    image: Img3,
    title: "#HerstoryOfChange – Mercy Abutsa from Nigeria",
    date: "July 14, 2024",
    link: "https://www.wecf.org/herstoryofchange-mercy-abutsa-from-nigeria/",
    source: "WECF",
    button: "Read More",
  },
  {
    image: Img4,
    title:
      "Nigeria’s Flood Disaster: Some Key insights and Potential Solutions.",
    date: "Nov 7, 2022",
    link: "https://environmentafricamag.com/2022/11/07/nigerias-flood-disaster-some-key-insights-and-potential-solutions/",
    source: "Environment Africa Magazine",
    button: "Read More",
  },
  {
    image: Img5,
    title: "Lessons about Climate Change From my NYSC Experience in Abuja",
    date: "Jul 7, 2022",
    link: "https://medium.com/@abutsamercy/lessons-about-climate-change-from-my-nysc-experience-in-abuja-d442db513073",
    source: "Medium",
    button: "Read More",
  },
];
const NextArrow = ({ onClick, currentSlide, slideCount }) => {
  const isDisabled = currentSlide >= slideCount - 3;
  if (isDisabled) return null;

  return (
    <div
      className="absolute right-[-0.5rem] top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 bg-white shadow rounded-full hover:bg-gray-100"
      onClick={onClick}
    >
      <svg
        className="w-5 h-5 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

const PrevArrow = ({ onClick, currentSlide }) => {
  if (currentSlide === 0) return null;

  return (
    <div
      className="absolute left-[-0.5rem] top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 bg-white shadow rounded-full hover:bg-gray-100"
      onClick={onClick}
    >
      <svg
        className="w-5 h-5 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

const FeaturedCarousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="w-full px-0 pt-12 ">
      <div className="flex flex-col md:flex-row items-center justify-center mb-7 text-center md:text-left gap-4 ">
        <p className="w-[40%] md:w-[20%] xl:w-[15%] mr-4 font-semibold tracking-[0.1rem] text-xl md:text-2xl">
          FEATURED
        </p>
        <div className="h-[2px] w-full md:w-[80%] xl:w-[85%] flex">
          <div className="w-[50%] h-[100%] bg-[#F48D3F]"></div>
          <div className="w-[50%] h-[100%] bg-[#07363C]"></div>
        </div>
      </div>
      <div className="relative">
        <Slider {...settings}>
          {featuredItems.map((item, index) => (
            <div key={index} className="px-2 mb-4">
              <div className="bg-white overflow-hidden h-full flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 flex flex-col justify-between gap-y-2 h-full">
                  <h3 className="text-[17px] font-medium leading-tight clamp-2">
                    {item.title}
                  </h3>
                  <a
                    href={item.link}
                    target="_blank"
                    className="font-semibold inline-flex items-center text-[#07363C] hover:text-[#F48D3F] text-[13px] uppercase"
                  >
                    {item.button}
                    <span className="ml-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </a>
                  <div className="flex justify-between text-xs text-gray-500 ">
                    <p className="">{item.source}</p>
                    <p className="">{item.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
