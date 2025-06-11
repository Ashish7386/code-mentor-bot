import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const CodeEditor = ({ code, setCode }) => {
  return (
    <div className="p-4 bg-gray-900 rounded-xl border border-gray-700 shadow-lg">
      <h2 className="text-lg mb-2 font-semibold">Enter Your Code:</h2>
      <CodeMirror
        value={code}
        height="200px"
        theme="dark"
        extensions={[javascript()]}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
};

export default CodeEditor;
