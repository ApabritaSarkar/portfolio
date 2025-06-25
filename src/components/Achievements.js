import React from "react";
import { FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Smart India Hackathon 2024 – Grand Finalist",
    description:
      "National level Hackathon by AICTE & MIC. Designed an AI-powered Crowd Management Surveillance System with a team of six. Presented to industry experts and government officials.",
    badge: "SIH 2024",
  },
  {
    title: "Flipkart GRiD 6.0",
    description:
      "Participated in national innovation challenge conducted by Flipkart.",
    badge: "Flipkart GRiD",
  },
  {
    title: "NITS HACKS 7.0 – UI/UX Track",
    description:
      "Built a UI/UX prototype for real-world problem statement under time constraints.",
    badge: "NITS Hacks",
  },
  {
    title: "Hackfest 2024 – UEMK",
    description: "Participated in university-wide Hackathon at UEM Kolkata.",
    badge: "Hackfest",
  },
  {
    title: "Project Making Competition – 2022 & 2024",
    description: "Showcased innovative projects under college R&D cell events.",
    badge: "Project Comp",
  },
];

const Achievements = () => {
  return (
    <motion.section
      id="achievements"
      className="px-4 py-8 max-w-6xl mx-auto text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {" "}
<h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 border-b-4 border-purple-200 inline-block pb-1">
        Hackathons & Achievements
      </h2>
      <div className="flex flex-col gap-6">
        {achievements.map((hack, i) => (
          <div
            key={i}
            className="bg-white border-l-4 border-purple-500 p-4 shadow-md rounded-r-xl text-left relative"
          >
            <div className="absolute -left-5 top-4 bg-purple-500 text-white p-2 rounded-full shadow">
              <FaTrophy />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {hack.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{hack.description}</p>
            <span className="inline-block mt-2 text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              {hack.badge}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Achievements;
