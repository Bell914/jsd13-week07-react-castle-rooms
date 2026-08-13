import SecretRoom from "./09_SecretRoom";

export default function Nook({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col items-center pt-3 bg-violet-600 w-[90%] flex-1">
      <h1 className="text-white text-xl font-medium mb-3">Nook</h1>
      {/* Render SecretRoom here */}
      <SecretRoom question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}