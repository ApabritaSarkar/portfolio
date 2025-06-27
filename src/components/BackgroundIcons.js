import React from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiGithub, SiHtml5 } from "react-icons/si";

const icons = [
  { icon: <FaReact />, style: "top-10 left-5 text-blue-400 animate-float1" },
  { icon: <FaNodeJs />, style: "top-32 right-6 text-green-500 animate-float2" },
  { icon: <FaPython />, style: "bottom-20 left-10 text-yellow-400 animate-float3" },
  { icon: <SiTailwindcss />, style: "bottom-10 right-10 text-cyan-400 animate-float1" },
  { icon: <SiMongodb />, style: "top-1/3 right-10 text-green-600 animate-float3" },
  { icon: <SiGithub />, style: "bottom-1/3 left-1/3 text-white animate-float1" },
  { icon: <SiHtml5 />, style: "bottom-6 right-1/4 text-orange-500 animate-float2" },
  { icon: <SiJavascript />, style: "top-1/2 left-2 text-yellow-300 animate-float2" },
];

const BackgroundIcons = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {icons.map((item, i) => (
        <div
          key={i}
          className={`absolute text-6xl opacity-20 ${item.style}`}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default BackgroundIcons;
