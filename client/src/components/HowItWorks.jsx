import React from "react";

const steps = [
  { title: "Step 1", description: "Enter your code into our beautiful editor." },
  { title: "Step 2", description: "Click 'Explain Code' and let AI process it." },
  { title: "Step 3", description: "Receive a clear explanation instantly." },
];

const HowItWorks = () => {
  return (
    <section id="howitworks" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
