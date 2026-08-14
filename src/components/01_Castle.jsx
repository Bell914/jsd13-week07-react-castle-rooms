import Tower from "./02_Tower";

export default function Castle(props) {
  return (
    <div className="flex flex-col items-center pt-6 pb-12 bg-red-600 w-full text-white">
      <h1 className="text-white text-base font-medium mb-1">Castle</h1>
      <p className="text-purple-300 text-sm mb-1">

        <span className="text-yellow-300 font-semibold">
        </span>
      </p>
      <Tower
        question={props.question}
        answer={props.answer}
        setAnswer={props.setAnswer}
      />
    </div>
  );
}