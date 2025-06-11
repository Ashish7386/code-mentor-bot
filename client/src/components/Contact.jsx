import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Have feedback or questions? Reach out to us anytime and we'll get back to you as soon as possible.
        </p>
        <a
          href="mailto:support@codementorbot.com"
          className="bg-indigo-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-indigo-700 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Contact;
