import React from "react";
import Link from "next/link";
import Topics from "./Topics";

const Hero = () => {
  return (
    <div className="relative mt-[3.5rem] sm:mt-16 md:mt-0">
      <div className="relative bg-[#090d1f] bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 text-white py-6 sm:py-8 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="px-4 sm:px-6 md:px-8 relative z-10">
          <div className="flex flex-col max-w-[1200px] mx-auto md:mx-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-rose-400 to-purple-300">
              Fundamentos da Internet
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 bg-gradient-to-r from-purple-200/80 via-white to-purple-200/80 bg-clip-text text-transparent font-medium">
              Descubra como a internet funciona, sua história e os elementos
              essenciais para o desenvolvimento web moderno.
            </p>
            <Link
              href="/dns"
              className="bg-gradient-to-r from-purple-600 via-rose-500 to-purple-600 text-white px-4 py-2 text-sm sm:text-base rounded-full 
                font-medium shadow-lg flex items-center gap-2 w-fit
                hover:from-purple-500 hover:via-rose-400 hover:to-purple-500
                transition-all duration-300 hover:shadow-purple-500/50 hover:shadow-xl
                animate-pulse hover:animate-none"
            >
              Começar Jornada
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-8">
        <Topics />
      </div>
    </div>
  );
};

export default Hero;
