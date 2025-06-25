import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-br from-white via-slate-50 to-slate-200 min-h-screen text-gray-800">
      <Navbar />
      <div className="pt-20 px-4">
        <div id="home">
          <Home />
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 opacity-30 rounded-full my-4" />

        <div id="about">
          <About />
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 opacity-30 rounded-full my-4" />

        <div id="skills">
          <Skills />
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 opacity-30 rounded-full my-4" />

        <div id="education">
          <Education />
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 opacity-30 rounded-full my-4" />

        <div id="projects">
          <Projects />
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 opacity-30 rounded-full my-4" />

        <div id="achievements">
          <Achievements />
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-pink-600 via-indigo-500 to-purple-500 opacity-30 rounded-full my-4" />

        <div id="certifications">
          <Certifications />
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-600 opacity-30 rounded-full my-4" />

        <div id="contact">
          <Contact />
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-600 opacity-30 rounded-full my-20" />
      </div>

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
