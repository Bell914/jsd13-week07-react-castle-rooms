import { useState } from "react";
import { MessageContext } from "./MessageContext";

export const MessageProvider = ({ children }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestion = (e) => {
    setQuestion(e?.target ? e.target.value : e);
  };

  const handleAnswer = (e) => {
    setAnswer(e?.target ? e.target.value : e);
  };

  return (
    <MessageContext.Provider
      value={{ question, answer, handleQuestion, handleAnswer }}
    >
      {children}
    </MessageContext.Provider>
  );
};