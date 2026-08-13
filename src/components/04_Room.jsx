import Hall from "./05_Hall";

export default function Room({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col items-center pt-3 bg-emerald-500 w-[90%] flex-1">
      <h1 className="text-white text-xl font-medium mb-3">Room</h1>
      {/* Render Hall here */}
      <Hall question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}