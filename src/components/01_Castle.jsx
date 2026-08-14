// import Tower from "./02_Tower";

// export default function Castle({ question, answer, setAnswer }) {
//   return (
//     <div className="flex flex-col items-center pt-3 bg-red-600 w-full min-h-screen">
//       <h1 className="text-white text-xl font-medium mb-3">Castle</h1>
//       {/* Render Tower here */}
//       <Tower question={question} answer={answer} setAnswer={setAnswer} />
//     </div>
//   );
// }
import Tower from "./02_Tower";

export default function Castle({ question, answer, handleAnswer }) {
  console.log(question, answer);
  return (
    <div className="flex flex-col justify-center items-center pt-10 🟥bg-red-500 w-full">
      <h1>Castle</h1>
      <p className="🟦text-purple-300">
        Message for Secret Room: {" "}
        <span className="🟨text-yellow-300">
          {question ? `✅ ${question}` : "⏳ Waiting for a message..."}
        </span>
      </p>
      <p className="🟦text-purple-300">
        Message for Secret Room: {" "}
        <span className="🟨text-yellow-300">
          {answer ? `✅ ${answer}` : "⏳ Waiting for a message..."}
        </span>
      </p>
      <Tower question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
};