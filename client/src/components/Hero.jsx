import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-16">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Understand Your Code Instantly</h1>
        <p className="text-lg md:text-xl mb-6">Paste your code and get clear, AI-powered explanations in seconds.</p>
        <a
          href="#works"
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Try It Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
