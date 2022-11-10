import { createContext, useReducer } from "react";
import DardModeReducer from "./darkModeReducer";

const INITITAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITITAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DardModeReducer, INITITAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
