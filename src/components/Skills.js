import React from "react";
import { motion } from "framer-motion";
import BackgroundIcons from "./BackgroundIcons";
import {
  FaPython,
  FaJava,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiFigma,
  SiBootstrap,
  SiCanva,
  SiJavascript,
  SiJquery,
} from "react-icons/si";

const Skills = () => {
  const programming = [
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <SiJavascript /> },
  ];

  const tools = [
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Canva", icon: <SiCanva /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "jQuery", icon: <SiJquery /> },
  ];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Adaptability",
    "Design Thinking",
    "Time Management",
  ];

  const renderSkillCard = (skill, i) => (
    <div
      key={i}
      className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 border border-purple-200"
    >
      <div className="text-4xl text-purple-600 mb-2">{skill.icon}</div>
      <div className="text-sm font-medium text-gray-800">{skill.name}</div>
    </div>
  );

  return (
    <motion.section
      id="skills"
      className="relative px-4 py-8 max-w-6xl mx-auto text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {" "}
      <BackgroundIcons />
      <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 border-b-4 border-purple-200 inline-block pb-1">
        Skills
      </h2>
        {/* Programming */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Programming Languages
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
          {programming.map(renderSkillCard)}
        </div>

        {/* Tools */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Tools & Frameworks
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
          {tools.map(renderSkillCard)}
        </div>

        {/* Soft Skills */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Soft Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {softSkills.map((item, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow transition"
            >
              {item}
            </span>
          ))}
        </div>
    </motion.section>
  );
};

export default Skills;
