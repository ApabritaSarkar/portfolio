import React from "react";

const DecorBlob = ({ position = "top-0 left-0", size = "w-72 h-72", color = "from-purple-300 to-pink-300" }) => {
  return (
    <div
      className={`absolute ${position} ${size} rounded-full bg-gradient-to-br ${color} opacity-30 blur-2xl pointer-events-none animate-pulse`}
    />
  );
};

export default DecorBlob;
