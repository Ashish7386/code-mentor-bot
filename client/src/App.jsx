import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Works from "./components/Works";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-gray-800 min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Works />
      <About />
      <Contact />
    </div>
  );
};

export default App;