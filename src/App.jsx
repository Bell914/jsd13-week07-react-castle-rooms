import { useContext } from "react";
import Castle from "./components/01_Castle";
import { MessageContext } from "./context/messageContext/MessageContext";

export default function App() {
  const { question, answer, handleQuestion } = useContext(MessageContext);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white pt-8 pb-16 w-full">
      <p className="text-purple-300 text-sm mb-1">
        Message for Secret Room:{" "}
        <span className="text-yellow-300 font-semibold">
          {question ? `✅ ${question}` : "⏳ Waiting for a message..."}
        </span>
      </p>
      <p className="text-purple-300 text-sm mb-3">
        Message from Secret Room:{" "}
        <span className="text-yellow-300 font-semibold">
          {answer ? `✅ ${answer}` : "⏳ Waiting for a message..."}
        </span>
      </p>

      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded p-2 text-center text-sm font-medium w-64 h-16 resize-none focus:outline-none shadow-md mb-6"
        placeholder="Type your message here..."
      />

      <Castle />
    </div>
  );
}