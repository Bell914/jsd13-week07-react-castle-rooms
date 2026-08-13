// import Castle from "./components/01_Castle";

// export default function App() {
//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white pb-80 py-10 gap-y-4">
//       <Castle />
//     </div>
//   );
// }


import { useState } from "react";
import Castle from "./components/01_Castle";

export default function App() {
  const [question] = useState("hello-world!");
  const [answer] = useState("hello-earth!");

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white ...">
      <Castle />
      {question}
      {answer}
    </div>
  );
}