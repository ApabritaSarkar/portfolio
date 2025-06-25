import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Education", to: "education" },
    { name: "Projects", to: "projects" },
    { name: "Achievements", to: "achievements" },
    { name: "Certifications", to: "certifications" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
          Apabrita Sarkar
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-100 transition-all"
              activeClass="text-white bg-purple-600"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
