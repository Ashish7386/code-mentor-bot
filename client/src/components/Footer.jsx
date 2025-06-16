// Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-800 to-pink-800 text-white py-6 mt-10 shadow-inner">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4"
      >
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Nexora — A product by AnyaLabs. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transform transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transform transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transform transition duration-300">
            <FaTwitter size={24} />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
