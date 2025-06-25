import React from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const icons = [
  { icon: <FaReact />, style: "top-10 left-5 text-blue-400 animate-float1" },
  { icon: <FaNodeJs />, style: "top-32 right-6 text-green-500 animate-float2" },
  { icon: <FaPython />, style: "bottom-20 left-10 text-yellow-400 animate-float3" },
  { icon: <SiTailwindcss />, style: "bottom-10 right-10 text-cyan-400 animate-float1" },
];

const BackgroundIcons = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {icons.map((item, i) => (
        <div
          key={i}
          className={`absolute text-4xl opacity-10 ${item.style}`}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default BackgroundIcons;
