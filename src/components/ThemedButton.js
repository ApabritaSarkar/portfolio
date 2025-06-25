import React from "react";

const ThemedButton = ({ text, href, download = false, icon }) => {
  return (
    <a
      href={href}
      download={download}
      target={!download ? "_blank" : undefined}
      rel={!download ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-full shadow-lg hover:scale-105 transition-transform hover:shadow-xl"
    >
      {icon && <span className="text-lg">{icon}</span>}
      {text}
    </a>
  );
};

export default ThemedButton;
