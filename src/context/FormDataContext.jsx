import { createContext } from "react";
import { useState } from "react";
import { stages } from "../constants/constants";

export const FormDataContext = createContext({});

const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    pomodoroTime: stages.pomodoroTime / 60,
    shortBreakTime: stages.shortBreakTime / 60,
    longBreakTime: stages.longBreakTime / 60,
  });
  const value = {
    formData,
    setFormData,
  };
  return <FormDataContext.Provider value={value}>{children}</FormDataContext.Provider>;
};

export default FormDataProvider;
