import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="mb-2">
    <button
      onClick={onClick}
      className="w-full text-left p-3 flex justify-between items-center bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#07363C]"
      aria-expanded={isOpen}
    >
      <span className="text-base font-medium text-[#07363C]">{title}</span>
      <svg
        className={`w-5 h-5 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { height: "auto", opacity: 1 },
            collapsed: { height: 0, opacity: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden bg-gray-50 mt-2"
        >
          <div className="p-3 text-sm text-gray-700">{content}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const WorkAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleAccordion = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  const items = [
    {
      title: "About",
      content:
        "This section introduces the organization, its founding purpose, and its broader context. Founded by Mercy Abutsa, the organization is committed to advancing equitable climate and development solutions through community-led engagement, research, and advocacy. It operates at the intersection of gender, environment, and policy, with a strong focus on amplifying local voices in global dialogues.",
    },
    {
      title: "Mission & Focus",
      content:
        "This captures the organization’s core purpose and thematic areas of work. The mission of the organization is to empower underrepresented communities—particularly women and youth—to drive climate resilience and development outcomes through inclusive governance, knowledge co-creation, and strategic partnerships. Its work spans climate justice, locally led adaptation, and environmental literacy.",
    },
    {
      title: "Programs & Approach",
      content:
        "This highlights how the mission is put into practice—your strategy and initiatives. The organization implements research-backed programs and participatory models to ensure community ownership and policy impact. Through stakeholder engagement, capacity-building workshops, and climate education campaigns, it bridges the gap between grassroots realities and global policy frameworks.",
    },
  ];

  return (
    <div className="w-full" role="region" aria-label="Work project details">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default WorkAccordion;
