import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white fixed top-0 w-full z-50 shadow-lg">
        <a
    href="#hero"
    className="text-3xl font-extrabold text-purple-400 tracking-wide hover:opacity-80 transition-opacity"
  >
    Nexora
  </a>
      <ul className="flex space-x-6 text-base">
        <li><a href="#howitworks" className="hover:text-purple-400 transition-colors duration-300">The Process</a></li>
        <li><a href="#works" className="hover:text-purple-400 transition-colors duration-300">LaunchPad</a></li>
        <li><a href="#about" className="hover:text-purple-400 transition-colors duration-300">About</a></li>
        <li><a href="#contact" className="hover:text-purple-400 transition-colors duration-300">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
