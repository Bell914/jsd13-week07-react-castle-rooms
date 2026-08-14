// import { useState } from "react";
// import Castle from "./components/01_Castle";

// export default function App() {
//   const [question] = useState("hello?");
//   const [answer, setAnswer] = useState("hey help me!");

//   return (
//     <div className="min-h-screen w-full bg-gray-900 flex flex-col items-center">
//       <Castle question={question} answer={answer} setAnswer={setAnswer} />
//     </div>
//   );
// }

import { useState } from "react";
import Castle from "./components/01_Castle";

export default function App() {
  // declare React's state variable
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white pb-80 py-10 gap-y-4">
      <p className="text-purple-300">Message for Secret Room:</p>
      <span className="text-yellow-300">
        {question ? `✅ ${question}` : `⏳ Waiting for a message...`}
      </span>

      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />

      {/* ส่ง question, answer, setAnswer เข้าไปเป็น props */}
      <Castle question={question} answer={answer} setAnswer={setAnswer} />

      {question}
      {answer}
    </div>
  );
}