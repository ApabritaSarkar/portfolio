import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import DecorBlob from "./DecorBlob";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="relative px-20 py-20 max-w-3xl mx-auto text-center overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Decorative Blobs */}
      <DecorBlob position="top-[-50px] left-[-60px]" size="w-60 h-60" />
      <DecorBlob position="bottom-[-60px] right-[-40px]" size="w-72 h-72" color="from-indigo-300 to-blue-300" />

      <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
        Contact Me
      </h2>

      <p className="text-lg text-gray-700 mb-6">
        Have a question, opportunity, or collaboration in mind? Feel free to reach out!
      </p>

      <div className="flex flex-col items-center gap-4 text-gray-700 text-md mb-10">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-purple-600" />
          <span>apabrita0403@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-purple-600" />
          <span>+91 9476295470</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 text-2xl text-gray-600">
        <a
          href="https://github.com/ApabritaSarkar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-600 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/apabritasarkar/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
