import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

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

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-lg border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 text-2xl font-extrabold">
          <FaCode className="text-purple-600" />
          <span>Apabrita Sarkar</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={closeMenu}
              activeClass="text-white bg-gradient-to-r from-purple-600 to-pink-500"
              className="cursor-pointer px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-all duration-300"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-purple-600 text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-purple-100 px-6 py-4 shadow-md">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={closeMenu}
                className="cursor-pointer text-sm font-medium text-gray-700 px-3 py-2 rounded-md hover:bg-purple-100 hover:text-purple-700 transition"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
