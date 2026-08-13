export default function SecretRoom({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col items-center justify-start pt-6 pb-10 bg-[#2d3748] w-[90%] flex-1 text-center">
      <h1 className="text-white text-3xl font-medium mb-4">SecretRoom</h1>

      {/* Message from the outside */}
      <p className="text-purple-200 text-sm font-medium mb-3">
        Message from the outside : <span className="text-yellow-300 font-semibold">✅ {question}</span>
      </p>

      {/* Textarea for reply */}
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="bg-white text-gray-900 rounded p-2 text-center text-sm font-medium w-52 h-16 resize-none focus:outline-none shadow-md"
      />

      {/* Reply to the outside */}
      <p className="text-emerald-400 text-sm font-medium mt-4">
        Reply to the outside: <span className="text-yellow-300 font-semibold">✅ {answer}</span>
      </p>
    </div>
  );
}