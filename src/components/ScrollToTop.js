import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    visible && (
      <button
        onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
        className="fixed bottom-5 right-5 z-50 bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Scroll to Top"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTop;
