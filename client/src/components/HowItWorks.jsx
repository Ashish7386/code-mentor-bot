import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Code, Brain } from "lucide-react";

const steps = [
  {
    icon: <Code size={40} className="text-purple-400" />,
    title: "Write Your Code",
    description: "Enter any piece of code into our clean, easy-to-use code editor. We support various languages for explanation.",
  },
  {
    icon: <Lightbulb size={40} className="text-pink-400" />,
    title: "Click 'Explain'",
    description: "With a single click, our AI engine processes your code instantly via Nexora’s powerful backend.",
  },
  {
    icon: <Brain size={40} className="text-blue-400" />,
    title: "Get Explanation",
    description: "Receive a clear, human-like explanation of your code—perfect for learning, debugging, or understanding unfamiliar code blocks.",
  },
];

const HowItWorks = () => {
  return (
    <div
      id="howitworks"
      className="scroll-mt-96 pt-20 pb-24 px-4 mb-80 max-w-6xl mx-auto text-center"
    >
      <p className="scroll-mt-96 pt-20 pb-2 text-sm text-gray-400 mb-2">A product by AnyaLabs</p>
      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-10">
        How Nexora Works
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transform transition duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
            <p className="text-gray-300 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;