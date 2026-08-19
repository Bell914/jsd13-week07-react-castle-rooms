import { MessageContext } from "./MessageContext";

export const MessageProvider = ({ children }) => {
  return <MessageContext.Provider value={{}}>{children}</MessageContext.Provider>;
};