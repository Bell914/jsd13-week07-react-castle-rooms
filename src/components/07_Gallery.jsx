import Nook from "./08_Nook";

export default function Gallery({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col items-center pt-3 bg-indigo-600 w-[90%] flex-1">
      <h1 className="text-white text-xl font-medium mb-3">Gallery</h1>
      {/* Render Nook here */}
      <Nook question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}