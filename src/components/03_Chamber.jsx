import Room from "./04_Room";

export default function Chamber({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col items-center pt-3 bg-amber-400 w-[90%] flex-1">
      <h1 className="text-white text-xl font-medium mb-3">Chamber</h1>
      {/* Render Room here */}
      <Room question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}