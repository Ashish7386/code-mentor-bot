import React, { useState } from "react";
import CodeEditor from "./CodeEditor";

const Works = () => {
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");

  const handleExplain = async () => {
    if (!code.trim()) {
      setExplanation("Please enter some code to explain.");
      return;
    }

    try {
      const response = await fetch("/api/explain", { // Relative path (correct)
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

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
  };

  return (
    <div id="works" className="max-w-3xl mx-auto p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Code Explanation Tool</h1>
      <CodeEditor code={code} setCode={setCode} />
      <button
        onClick={handleExplain}
        className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Explain Code
      </button>
      {explanation && (
        <div className="mt-6 p-4 bg-purple-200/20 text-purple-100 rounded-lg shadow-md">
          <h2 className="font-semibold mb-2">Explanation:</h2>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
};

export default Works;
