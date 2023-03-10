import { useEffect } from "react";
import { controllers } from "../constants/constants";

const useCalculateTime = ({ pomodoro, selectedControl }) => {
  const minutes = Math.floor(pomodoro[controllers[selectedControl].value] / 60);
  const seconds = Math.floor(pomodoro[controllers[selectedControl].value] % 60);
  return { minutes, seconds };
};

export default useCalculateTime;
