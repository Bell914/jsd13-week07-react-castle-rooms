import Gallery from "./07_Gallery";

export default function Corridor({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col items-center pt-3 bg-blue-600 w-[90%] flex-1">
      <h1 className="text-white text-xl font-medium mb-3">Corridor</h1>
      {/* Render Gallery here */}
      <Gallery question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}