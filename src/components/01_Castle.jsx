import Tower from "./02_Tower";

export default function Castle({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col items-center pt-3 bg-red-600 w-full min-h-screen">
      <h1 className="text-white text-xl font-medium mb-3">Castle</h1>
      {/* Render Tower here */}
      <Tower question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}