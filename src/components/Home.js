import React from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import ThemedButton from "./ThemedButton";
import DecorBlob from "./DecorBlob";
import profilePhoto from "../assets/profile photo.jpg";
import resumePDF from "../assets/resume.pdf";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="relative px-4 py-20 max-w-6xl mx-auto text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <DecorBlob position="top-[-50px] left-[-50px]" />
      <DecorBlob
        position="bottom-[-60px] right-[-40px]"
        color="from-blue-300 to-indigo-300"
      />
      {/* Profile Image */}
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-40 h-40 rounded-full shadow-lg mb-6 border-4 border-purple-300 object-cover mx-auto"
      />

      {/* Name & Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
        Apabrita Sarkar
      </h1>
      <p className="mt-2 text-xl text-gray-700">
        Full-Stack Developer & AI/ML Enthusiast
      </p>

      {/* Short Description */}
      <p className="mt-4 max-w-xl text-gray-600 mx-auto">
        Crafting innovative solutions with React, Node.js & Machine Learning.
        SIH 2024 Grand Finalist passionate about building for impact.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4 flex-wrap justify-center items-center">
        <ThemedButton
          text="Download Resume"
          href={resumePDF}
          download={true}
          icon={<FaDownload />}
        />

        {/* Social Icons */}
        <a
          href="https://github.com/ApabritaSarkar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-purple-600 text-2xl transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/apabritasarkar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 text-2xl transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </motion.section>
  );
};

export default Home;
