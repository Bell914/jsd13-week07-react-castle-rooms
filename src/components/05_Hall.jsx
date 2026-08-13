import Corridor from "./06_Corridor";

export default function Hall({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col items-center pt-3 bg-green-500 w-[90%] flex-1">
      <h1 className="text-white text-xl font-medium mb-3">Hall</h1>
      {/* Render Corridor here */}
      <Corridor question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}