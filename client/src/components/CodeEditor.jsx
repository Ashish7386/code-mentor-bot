import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";

const CodeEditor = ({ code, setCode, setExplanation, explanation }) => {
  const handleClear = () => {
    const lastCode = code;
    const lastExplanation = explanation;

    if (!code.trim()) {
      toast.dismiss("clean-toast");
      toast("💎 Editor is already clean.", {
        id: "clean-toast",
        duration: 3000,
        className:
          "rounded-xl px-4 py-3 text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-xl backdrop-blur-md border border-white/20 font-[Poppins]",
      });
      return;
    }

    setCode("");
    if (setExplanation) setExplanation("");

    toast.dismiss("clear-toast");
    toast(
      (t) => (
        <div className="flex items-center justify-between text-sm font-medium text-white font-[Poppins]">
          <span>🧹 Editor cleared.</span>
          <button
            onClick={() => {
              setCode(lastCode);
              if (setExplanation) setExplanation(lastExplanation);
              toast.dismiss(t.id);
            }}
            className="ml-4 underline hover:text-pink-200 transition duration-200"
          >
            Undo
          </button>
        </div>
      ),
      {
        id: "clear-toast",
        duration: 4000,
        className:
          "rounded-xl px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-500 shadow-xl backdrop-blur-md border border-white/20",
      }
    );
  };

  return (
    <section id="CodeEditor" className="max-w-4xl mx-auto px-4 py-12 relative">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Code Editor</h2>

      <div className="relative border-2 border-purple-500 rounded-xl overflow-hidden shadow-xl">
        <CodeMirror
          value={code}
          height="300px"
          extensions={[javascript()]}
          theme={dracula}
          onChange={(value) => setCode(value)}
        />

        {/* Floating clear button */}
        <button
          onClick={handleClear}
          title="Clear code"
          className="absolute bottom-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/30 hover:scale-110 hover:bg-white/20 transition-all duration-300 shadow-lg"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </section>
  );
};

export default CodeEditor;
