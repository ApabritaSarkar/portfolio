import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Name and Copyright */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Apabrita Sarkar. All rights reserved.
        </div>

        {/* Socials */}
        <div className="flex space-x-4 text-gray-600 text-lg">
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
      </div>
    </footer>
  );
};

export default Footer;
