import Tower from "./02_Tower";

export default function Castle({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col items-center pt-6 pb-12 bg-red-600 w-full text-white">
      <h1 className="text-white text-base font-medium mb-1">Castle</h1>
      <p className="text-purple-300 text-sm mb-1">
        Message for Secret Room:{" "}
        <span className="text-yellow-300 font-semibold">
          {question ? `✅ ${question}` : "⏳ Waiting for a message..."}
        </span>
      </p>
      <p className="text-purple-300 text-sm mb-4">
        Message for Secret Room:{" "}
        <span className="text-yellow-300 font-semibold">
          {answer ? `✅ ${answer}` : "⏳ Waiting for a message..."}
        </span>
      </p>
      <Tower question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}