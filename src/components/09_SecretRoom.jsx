export default function SecretRoom(props) {
  return (
    <div className="flex flex-col items-center justify-start pt-6 pb-8 bg-[#1e293b] w-[90%] text-center text-white">
      <h1 className="text-white text-base font-medium mb-2">SecretRoom</h1>
      <p className="text-purple-300 text-sm mb-1">
        Message for Secret Room:{" "}
        <span className="text-yellow-300 font-semibold">
          {props.question ? `✅ ${props.question}` : "⏳ Waiting for a message..."}
        </span>
      </p>
      <p className="text-purple-300 text-sm mb-3">
        Message from Secret Room:{" "}
        <span className="text-yellow-300 font-semibold">
          {props.answer ? `✅ ${props.answer}` : "⏳ Waiting for a message..."}
        </span>
      </p>
      <textarea
        value={props.answer}
        onChange={(e) => props.setAnswer(e.target.value)}
        className="bg-white text-black rounded p-2 text-center text-sm font-medium w-64 h-16 resize-none focus:outline-none shadow-md"
        placeholder="Type your reply here..."
      />
    </div>
  );
}