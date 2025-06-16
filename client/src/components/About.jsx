import React from "react";

const About = () => {
  return (
    <div id="about" className="pt-24 pb-24 max-w-4xl mx-auto p-8 my-12 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20">
      <h2 className="text-4xl font-bold text-center text-white mb-6 drop-shadow-lg">About Nexora</h2>
      <p className="text-lg text-purple-100 leading-relaxed text-center">
        Nexora is your smart coding companion, designed to make code explanation
        simple, fast, and insightful. Whether you're a beginner trying to learn or
        a professional debugging complex systems, Nexora is here to assist.
      </p>
      <p className="text-lg text-purple-100 leading-relaxed mt-4 text-center">
        <span className="font-semibold text-white">A product by AnyaLabs</span>,
        Nexora embodies elegance in functionality, ensuring developers enjoy a
        smooth and delightful experience with every line of code they write.
      </p>
    </div>
  );
};

export default About;
