import { useState, useEffect } from "react";

export default function SecretRoom(props) {
  const [prisoner, setPrisoner] = useState({
    name: "Seaking",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
  });

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 151) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then((res) => res.json())
      .then((data) => {
        setPrisoner({
          name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
          image:
            data.sprites.front_default ||
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomId}.png`,
        });
      })
      .catch((err) => {
        console.error("Error fetching random pokemon:", err);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-start pt-6 pb-8 bg-[#1e293b] w-[90%] text-center text-white">
      <h1 className="text-white text-base font-medium mb-4">SecretRoom</h1>

      <div className="flex flex-col items-center justify-center border-2 border-red-400 rounded-2xl p-4 w-64 mb-4">
        <p className="text-red-400 font-semibold text-sm mb-2">
          A prisoner is trapped here!
        </p>
        <img
          src={prisoner.image}
          alt={prisoner.name}
          className="w-16 h-16 object-contain grayscale [image-rendering:pixelated]"
        />
        <span className="text-slate-400 text-xs mt-1">{prisoner.name}</span>
      </div>

      <p className="text-purple-300 text-sm mb-3">
        Message from outside:{" "}
        <span className="text-yellow-300 font-semibold">
          {props.question || "Waiting for a message..."}
        </span>
      </p>

      <textarea
        value={props.answer}
        onChange={(e) => props.setAnswer(e.target.value)}
        className="bg-white text-black rounded p-2 text-sm font-normal w-64 h-16 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-md mb-3"
        placeholder="Type your reply here..."
      />

      <p className="text-emerald-400 text-sm">
        Your reply:{" "}
        <span className="text-yellow-300 font-semibold">
          {props.answer || "..."}
        </span>
      </p>
    </div>
  );
}