"use client";

import React, { useState, useEffect } from "react";

const PageScrollIndicator = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setShowScrollUp(scrollPosition > 200);
      setIsAtBottom(scrollPosition + windowHeight >= documentHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Down Arrow - Fixed at top */}
      {!isAtBottom && !showScrollUp && (
        <div className="fixed top-24 right-8 z-50">
          <button
            onClick={scrollToNextSection}
            className="bg-rose-500/80 text-white p-3 rounded-full 
              hover:bg-rose-400 transition-all duration-500 backdrop-blur-sm
              animate-bounce-slow shadow-lg shadow-rose-500/20
              hover:scale-110 hover:shadow-xl"
            aria-label="Continuar lendo"
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
        </div>
      )}

      {/* Up Arrow - Fixed at bottom */}
      {showScrollUp && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={scrollToTop}
            className="bg-rose-500/80 text-white p-3 rounded-full 
              hover:bg-rose-400 transition-all duration-300 backdrop-blur-sm
              shadow-lg shadow-rose-500/20 hover:scale-110
              hover:shadow-xl"
            aria-label="Voltar ao topo"
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
        </div>
      )}
    </>
  );
};

export default PageScrollIndicator;
