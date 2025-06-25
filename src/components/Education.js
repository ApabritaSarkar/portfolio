import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const educationData = [
  {
    title: "B.Tech in Computer Science and Engineering",
    institution: "University of Engineering and Management, Kolkata",
    board: "UEM Kolkata",
    duration: "2022 – 2026",
    cgpa: "8.52 (up to 5th Sem)",
    coursework: [
      "Data Structures and Algorithms",
      "Object Oriented Programming",
      "DBMS",
      "AI & ML",
      "Cyber Security",
    ],
    icon: <FaGraduationCap />,
    color: "purple",
  },
  {
    title: "Class 12 – WBCHSE Board",
    institution: "Holy Family Girls' High School",
    duration: "2022",
    percentage: "87.4%",
    icon: <FaSchool />,
    color: "pink",
  },
  {
    title: "Class 10 – WBBSE Board",
    institution: "Lady Carmichael Girls' High School",
    duration: "2020",
    percentage: "91.9%",
    icon: <FaSchool />,
    color: "blue",
  },
];

const Education = () => {
  return (
    <motion.section
      id="education"
      className="px-4 py-10 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
        Education
      </h2>

      <div className="relative border-l-4 border-purple-200 pl-6 space-y-12">
        {educationData.map((edu, index) => (
          <div key={index} className="relative">
            {/* Icon Marker */}
            <span
              className={`absolute -left-7 top-1 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm shadow-md ${
                edu.color === "purple"
                  ? "bg-purple-500"
                  : edu.color === "pink"
                  ? "bg-pink-500"
                  : edu.color === "blue"
                  ? "bg-blue-500"
                  : "bg-gray-400"
              }`}
            >
              {edu.icon}
            </span>

            {/* Timeline Card */}
            <div className="bg-white shadow-md rounded-xl p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                {edu.title}
              </h3>
              <p className="text-sm text-gray-600">{edu.institution}</p>
              <p className="text-xs text-gray-500 mb-2">{edu.duration}</p>

              {edu.cgpa && (
                <p className="text-sm text-gray-700 font-medium">
                  CGPA: <span className="text-purple-600">{edu.cgpa}</span>
                </p>
              )}
              {edu.percentage && (
                <p className="text-sm text-gray-700 font-medium">
                  Percentage:{" "}
                  <span className="text-pink-600">{edu.percentage}</span>
                </p>
              )}

              {edu.coursework && (
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">
                    Relevant Coursework:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    {edu.coursework.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
