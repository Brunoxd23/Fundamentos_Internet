import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          Desenvolvido por Bruno Monteiro e Rafael Monteiro
        </p>
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-2">
              <a
                href="https://github.com/Brunoxd23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/bruno-monteiro-52b174255/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
            <span className="text-sm">Bruno Monteiro</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-2">
              <a
                href="https://github.com/pixeldreamdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rafael-monteiro-ba42aa357/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
            <span className="text-sm">Rafael Monteiro</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
