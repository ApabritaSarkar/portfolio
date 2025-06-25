import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const strengths = [
    "Proactive problem solver",
    "Highly adaptable",
    "Team oriented",
    "Innovative thinker",
    "Empathetic leader",
  ];

  return (
    <motion.section
      id="about"
      className="px-4 py-8 max-w-5xl mx-auto text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 border-b-4 border-purple-200 inline-block pb-1">
  About Me
</h2>


      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        I’m a passionate Computer Science undergraduate with strong programming, full-stack development,
        and AI/ML skills. As a Grand Finalist of Smart India Hackathon 2024, I’ve worked on scalable
        projects like Crowd Surveillance and GreenVerse. I enjoy building impactful tech with creative problem-solving.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Strengths</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {strengths.map((item, idx) => (
          <motion.span
            key={idx}
            className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow transition"
            whileHover={{ scale: 1.1 }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
