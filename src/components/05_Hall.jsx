import Corridor from "./06_Corridor";

export default function Hall({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col items-center pt-2 pb-6 bg-green-500 w-[90%] flex-1">
      <h1 className="text-white text-sm font-medium my-2">Hall</h1>
      <Corridor question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}