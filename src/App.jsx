import { useState } from "react";
import Castle from "./components/01_Castle";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const handleBuildEscapePod = () => {
    console.log("Build Escape Pod!");
  };

  const pokemonOutside = [
    {
      id: 25,
      name: "Pikachu",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
    {
      id: 1,
      name: "Bulbasaur",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      id: 4,
      name: "Charmander",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 7,
      name: "Squirtle",
      src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#1e293b] text-white pt-8 pb-16 w-full">
      <h1 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
        Outside the Castle
      </h1>
      <p className="text-gray-400 text-sm mb-3">Pokemon outside:</p>

      <div className="flex flex-row items-center justify-center gap-6 mb-5">
        {pokemonOutside.map((pokemon) => (
          <div key={pokemon.id} className="flex flex-col items-center">
            <img
              src={pokemon.src}
              alt={pokemon.name}
              className="w-14 h-14 md:w-16 md:h-16 object-contain [image-rendering:pixelated]"
            />
            <span className="text-gray-300 text-xs font-normal">
              {pokemon.name}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={handleBuildEscapePod}
        className="bg-[#22c55e] hover:bg-green-600 active:scale-95 text-white text-base font-bold px-6 py-2.5 rounded-lg shadow-md cursor-pointer transition-all mb-4"
      >
        Build Escape Pod!
      </button>

      <p className="text-purple-300 text-sm mb-3">
        Message to the Secret Room:{" "}
        <span className="text-yellow-300 font-semibold">
          {question || "Waiting..."}
        </span>
      </p>

      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded p-2 text-sm font-normal w-64 h-16 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-md mb-3"
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