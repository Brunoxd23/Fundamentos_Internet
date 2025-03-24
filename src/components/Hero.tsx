import React from "react";
import Link from "next/link";
import Topics from "./Topics";

const Hero = () => {
  return (
    <div className="relative mt-20">
      {" "}
      {/* Increased from mt-16 to mt-20 */}
      <div className="bg-gradient-to-r from-gray-900 via-rose-900 to-gray-900 text-white py-10">
        {" "}
        {/* Reduced padding */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-100 to-rose-500">
              Fundamentos da Internet
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300">
              Descubra como a internet funciona, sua história e os elementos
              essenciais para o desenvolvimento web moderno.
            </p>
            <Link
              href="/dns"
              className="bg-rose-600 text-white px-6 py-3 rounded-full 
                font-medium shadow-lg flex items-center gap-2
                hover:bg-rose-500 transform hover:scale-105
                transition-all duration-300 hover:shadow-rose-500/50 hover:shadow-xl"
            >
              Começar Jornada
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 -mt-10 relative">
        {" "}
        {/* Adjusted margin top */}
        <Topics />
      </div>
    </div>
  );
};

export default Hero;
