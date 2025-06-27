import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-4xl mx-auto py-16 px-6 text-center">
      <motion.h2 
        className="text-4xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: -30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>
      <motion.p 
        className="text-purple-100 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Have questions or feedback? We'd love to hear from you!
      </motion.p>
      <motion.div 
        className="flex flex-col md:flex-row justify-center gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <a
          href="mailto:ashishreddy2310@gmail.com"
          className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-purple-500 hover:bg-purple-600/30 text-white py-4 px-6 rounded-2xl shadow-xl transition-transform transform hover:scale-105"
        >
          <Mail className="w-6 h-6" />
          bluacad@gmail.com
        </a>
        <a
          href="tel:+919493573861"
          className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-pink-500 hover:bg-pink-600/30 text-white py-4 px-6 rounded-2xl shadow-xl transition-transform transform hover:scale-105"
        >
          <Phone className="w-6 h-6" />
          +91 94935 73861
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
