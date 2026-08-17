import { useState } from "react";
import Castle from "./components/01_Castle";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#1e293b] text-white pt-8 pb-16 w-full">
      <h1 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
        Outside the Castle
      </h1>
      <p className="text-gray-400 text-sm mb-1">Pokemon outside:</p>

      <div className="flex flex-col items-center mb-4">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt="Pikachu"
          className="w-16 h-16 object-contain [image-rendering:pixelated]"
        />
        <span className="text-gray-300 text-xs font-normal">Pikachu</span>
      </div>

      <p className="text-purple-300 text-sm mb-3">
        Message to the Secret Room:{" "}
        <span className="text-yellow-300 font-semibold">
          {question || "Waiting..."}
        </span>
      </p>

      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded p-2 text-sm font-normal w-64 h-16 resize-none focus:outline-none shadow-md mb-3"
        placeholder="Type your message here..."
      />

      <p className="text-emerald-400 text-sm mb-8">
        Reply from the Secret Room:{" "}
        <span className="text-yellow-300 font-semibold">
          {answer || "Waiting for a reply..."}
        </span>
      </p>

      <Castle question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}