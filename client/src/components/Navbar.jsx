import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">Code Mentor Bot</h1>
        <div className="hidden md:flex space-x-6 text-gray-600">
          <a href="#howitworks" className="hover:text-indigo-600 transition">How It Works</a>
          <a href="#works" className="hover:text-indigo-600 transition">Works</a>
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </div>
        <div className="md:hidden">
          <Menu className="text-gray-600" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
