import React from "react";
import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Foundations of Cybersecurity",
    platform: "Google Cybersecurity Professional Certificate",
  },
  {
    title: "Career Essentials in Generative AI",
    platform: "Microsoft",
  },
  {
    title: "Git Essential Training",
    platform: "LinkedIn Learning",
  },
  {
    title: "Operating Systems: Becoming a Power User",
    platform: "Google IT Support Professional Certificate",
  },
  {
    title: "Foundations of Project Management",
    platform: "Google Project Management Certificate",
  },
  {
    title: "Database Structures and Management with MySQL",
    platform: "Meta Database Engineer Certificate",
  },
  {
    title: "Introduction to Soft Skills",
    platform: "TCS iON",
  },
];

const Certifications = () => {
  return (
    <motion.section
      id="certifications" // update per section
      className="px-4 py-8 max-w-6xl mx-auto text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {" "}
      <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 border-b-4 border-purple-200 inline-block pb-1">
        Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="bg-white border border-purple-200 p-5 rounded-xl shadow-md text-left hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaCertificate className="text-purple-600 text-xl" />
              <h3 className="font-semibold text-gray-800">{cert.title}</h3>
            </div>
            <p className="text-sm text-gray-600">{cert.platform}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
