import React from "react";

const expertise = [
  {
    icon: "🌍",
    title: "Global Development",
    description:
      "Expertise in locally-led adaptation, gender-responsive policy, and sustainable development.",
  },
  {
    icon: "📝",
    title: "Policy Writing",
    description:
      "Experienced in drafting, reviewing, and publishing donor-aligned technical reports and climate frameworks.",
  },
  {
    icon: "📣",
    title: "Communication & Engagement",
    description:
      "Amplified stakeholder voices through scripts, strategies, and public platforms for climate awareness.",
  },
  {
    icon: "📊",
    title: "Research & Analysis",
    description:
      "Analyzed climate data, community metrics, and policy documents for equity-focused project insights.",
  },
];

export default function WorkExpertise() {
  return (
    <div className="relative py-12">
      <div className="flex items-center mb-7 ">
        <p className="w-[40%] xl:w-[40%] mr-4 font-semibold tracking-[0.1rem] text-2xl md:text-2xl uppercase">
          Expertise & Specialization
        </p>
        <div className="h-[2px] w-[60%] xl:w-[60%] flex">
          <div className="w-[50%] h-[100%] bg-[#F48D3F]"></div>
          <div className="w-[50%] h-[100%] bg-[#07363C]"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {expertise.map((item, idx) => (
          <div
            key={idx}
            className={`group bg-white px-6 pt-10 pb-6 rounded-lg text-center hover:shadow-md shadow-[0_8px_20px_rgba(7,54,60,0.15)]
 transition duration-300 cursor-default ${
   idx === 1 || idx === 3 ? "mt-20" : ""
 } ${idx === 0 || idx === 2 ? "mb-20" : ""}`}
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 text-3xl group-hover:bg-orange-100 transition duration-300">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
