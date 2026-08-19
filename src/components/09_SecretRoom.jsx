import { useContext } from "react";
import { MessageContext } from "../context/messageContext/MessageContext";

export default function SecretRoom() {
  const { question, answer, handleAnswer } = useContext(MessageContext);

  return (
    <div className="flex flex-col items-center justify-start pt-6 pb-8 bg-[#1e293b] w-[90%] text-center text-white">
      <h1 className="text-white text-base font-medium mb-2">SecretRoom</h1>
      <p className="text-purple-300 text-sm mb-3">
        Message for Secret Room:{" "}
        <span className="text-yellow-300 font-semibold">
          {question ? `✅ ${question}` : "⏳ Waiting for a message..."}
        </span>
      </p>
      <textarea
        value={answer}
        onChange={handleAnswer}
        className="bg-white text-black rounded p-2 text-center text-sm font-medium w-64 h-16 resize-none focus:outline-none shadow-md mb-3"
        placeholder="Type your reply here..."
      />
      <p className="text-purple-300 text-sm">
        Message from Secret Room:{" "}
        <span className="text-yellow-300 font-semibold">
          {answer ? `✅ ${answer}` : "⏳ Waiting for a message..."}
        </span>
      </p>
    </div>
  );
}