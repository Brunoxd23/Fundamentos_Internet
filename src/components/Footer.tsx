import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900/10 to-gray-900 text-gray-300 py-4 sm:py-6 border-t border-transparent relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent" />
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4 text-sm sm:text-base bg-gradient-to-r from-purple-200/90 via-white to-purple-200/90 bg-clip-text text-transparent font-medium">
          Desenvolvido por Bruno Monteiro e Rafael Monteiro
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-3">
              <a
                href="https://github.com/Brunoxd23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-rose-400 transition-colors"
              >
                <FaGithub size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/bruno-monteiro-52b174255/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
              >
                <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
            <span className="text-xs sm:text-sm">Bruno Monteiro</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-3">
              <a
                href="https://github.com/pixeldreamdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-rose-400 transition-colors"
              >
                <FaGithub size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rafael-monteiro-ba42aa357/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-rose-400 transition-colors"
              >
                <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
            <span className="text-xs sm:text-sm">Rafael Monteiro</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
