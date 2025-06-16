import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Works from "./components/Works";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="bg-gradient-to-tr from-gray-900 via-purple-900 to-gray-800 text-white">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="howitworks">
        <HowItWorks />
      </section>
      <section id="works">
        <Works />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;
