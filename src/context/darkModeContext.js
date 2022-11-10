import { createContext } from "react";

const INITITAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITITAL_STATE);

export const DarkModeContextProvider = ({ children }) => {};
