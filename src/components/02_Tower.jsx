import Chamber from "./03_Chamber";

export default function Tower({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col items-center pt-3 bg-orange-500 w-[90%] flex-1">
      <h1 className="text-white text-xl font-medium mb-3">Tower</h1>
      {/* Render Chamber here */}
      <Chamber question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}