import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";

const CodeEditor = ({ code, setCode }) => {  // Receive props properly
  return (
    <section id="CodeEditor" className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Code Editor</h2>
      <div className="border-2 border-purple-500 rounded-xl overflow-hidden shadow-lg">
        <CodeMirror
          value={code}                        // Controlled by parent Works.jsx
          height="300px"
          extensions={[javascript()]}
          theme={dracula}
          onChange={(value) => setCode(value)} // Updates Works.jsx state
        />
      </div>
    </section>
  );
};

export default CodeEditor;
