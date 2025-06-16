import React, { useState } from "react";
import { motion } from "framer-motion";
import CodeEditor from "./CodeEditor";
import { Loader2 } from "lucide-react";

const Works = () => {
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleExplain = async () => {
    if (!code.trim()) {
      setExplanation("Please enter some code to explain.");
      return;
    }

    setLoading(true);
    setExplanation("");

    try {
      const response = await fetch(
        "https://code-mentor-backend-y73r.onrender.com/api/explain",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setExplanation(data.explanation);
      } else {
        setExplanation("Error: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Error explaining code:", error);
      setExplanation("An error occurred while explaining the code.");
    }

    setLoading(false);
  };

  return (
    <div
      id="works"
      className="scroll-mt-128 mb-40 max-w-4xl mx-auto p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl backdrop-blur-md"
    >
      <h1 className="pt-20 pb-2 text-4xl font-bold mb-6 text-center text-white">
        Nexora Code Explainer
      </h1>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <CodeEditor code={code} setCode={setCode} />
        <button
          onClick={handleExplain}
          className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-4 rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-transform duration-300"
        >
          Explain Code
        </button>
      </motion.div>

      {loading && (
        <div className="flex justify-center mt-6">
          <Loader2 className="animate-spin text-purple-400 w-8 h-8" />
        </div>
      )}

      {!loading && explanation && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-6 p-5 bg-white/10 text-purple-100 rounded-xl shadow-lg border border-purple-500"
        >
          <h2 className="font-semibold mb-3 text-lg">Explanation:</h2>
          <p className="leading-relaxed whitespace-pre-wrap">{explanation}</p>
        </motion.div>
      )}
    </div>
  );
};

export default Works;