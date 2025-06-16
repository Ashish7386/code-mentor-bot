import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    // Give the outermost section the hero ID for the anchor link
    <section
      id="hero"
      className="w-full h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
    >
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Nexora
      </motion.h1>
      <motion.p
        className="text-sm text-gray-300 mt-2 tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        A Product by AnyaLabs
      </motion.p>

      <motion.p
        className="mt-6 text-xl text-gray-200 max-w-xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Simplify your coding journey. Explain, understand, and learn code instantly with the power of AI.
      </motion.p>

      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-800/40 to-pink-800/40 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2 }}
      />
    </section>
  );
};

export default Hero;
