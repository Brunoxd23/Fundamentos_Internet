"use client";

import React, { useState, useEffect } from "react";

const ScrollIndicator = () => {
  const [showScrollDown, setShowScrollDown] = useState(true);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Mostrar seta para baixo apenas quando não estiver no final
      setShowScrollDown(scrollPosition + windowHeight < documentHeight - 100);

      // Mostrar seta para cima apenas quando não estiver no topo
      setShowScrollUp(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollDown && (
        <button
          onClick={scrollToBottom}
          className="fixed right-6 bottom-20 z-20 bg-purple-600/80 text-white p-3 rounded-full 
            hover:bg-purple-500 transition-all duration-300 backdrop-blur-sm
            animate-bounce shadow-lg shadow-purple-500/20"
          aria-label="Rolar para baixo"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      )}

      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 z-20 bg-purple-600/80 text-white p-3 rounded-full 
            hover:bg-purple-500 transition-all duration-300 backdrop-blur-sm
            shadow-lg shadow-purple-500/20"
          aria-label="Rolar para cima"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollIndicator;
