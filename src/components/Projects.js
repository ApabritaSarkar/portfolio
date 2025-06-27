import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Crowd Management Surveillance System",
    description:
      "AI-powered solution to detect crowd density, identify missing persons, and send alerts to a centralized police dashboard.",
    tech: ["MERN", "Python", "Flask", "Axios", "GitHub"],
    live: "",
    github: "https://github.com/ApabritaSarkar/crowdManagement",
  },
  {
    title: "GreenVerse – Eco lifestyle Platform",
    description:
      "A full-stack engagement app with plant logging, forums, and responsive design — deployed on Vercel.",
    tech: ["React", "Tailwind", "Framer Motion", "MongoDB", "JWT"],
    live: "https://greenverse-ten.vercel.app/",
    github: "https://github.com/ApabritaSarkar/greenverse",
  },
  {
    title: "Student Expense Tracker",
    description:
      "Budgeting dashboard with AI tips, expense analytics, and visualizations — migrated to React + Tailwind.",
    tech: ["React", "Chart.js", "Node", "MongoDB", "Tailwind"],
    live: "https://expense-tracker-eight-mu-99.vercel.app/",
    github: "https://github.com/ApabritaSarkar/expenseTracker",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="px-4 py-8 max-w-6xl mx-auto text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 border-b-4 border-purple-200 inline-block pb-1">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-white/80 backdrop-blur-md border border-purple-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 text-left relative"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-4 text-xl">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-600 transition"
                >
                  <FaGithub />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-pink-600 transition"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
