import { useState } from "react";
import Castle from "./components/01_Castle";

export default function App() {
  const [question] = useState("hello?");
  const [answer, setAnswer] = useState("hey help me!");

  return (
    <div className="min-h-screen w-full bg-gray-900 flex flex-col items-center">
      <Castle question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}