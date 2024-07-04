import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">ASIF</h2>
            <p className="text-gray-400">Fullstack Web Developer</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <div className="flex justify-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="uil uil-github text-2xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="uil uil-linkedin text-2xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="uil uil-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400">&copy; 2024 ASIF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
