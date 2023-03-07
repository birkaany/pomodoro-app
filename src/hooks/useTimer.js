import { useEffect, useState } from "react";
import { stages, controllers } from "../constants/constants";

const useTimer = () => {
  const [selectedControl, setSelectedControl] = useState(0);
  const [pomodoro, setPomodoro] = useState(stages);

  useEffect(() => {
    const stageValue = controllers[selectedControl].value;
    let timer = null;

    if (!pomodoro.isPaused) {
      timer = setInterval(() => {
        setPomodoro((prevPomodoro) => {
          if (prevPomodoro[stageValue] === 0) {
            setSelectedControl((prevState) => {
              return prevState < controllers.length - 1 ? prevState + 1 : 0;
            });
            clearInterval(timer);
            return prevPomodoro;
          }
          return {
            ...prevPomodoro,
            [stageValue]: prevPomodoro[stageValue] - 1,
          };
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [pomodoro.isPaused, selectedControl, setPomodoro, setSelectedControl]);

  return { pomodoro, setPomodoro, selectedControl, setSelectedControl };
};

export default useTimer;
