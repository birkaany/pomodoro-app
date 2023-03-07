import { useEffect, useState } from "react";
import { stages, controllers } from "../constants/constants";

const useTimer = () => {
  const [selectedControl, setSelectedControl] = useState(0);
  const [pomodoro, setPomodoro] = useState(stages);

  // Calculate percentage of remaining time
  const getRemainingTimePercentage = () => {
    const totalTime = stages[controllers[selectedControl].value];
    const remainingTime = pomodoro[controllers[selectedControl].value];

    return (remainingTime / totalTime) * 100;
  };

  useEffect(() => {
    let timer = null;

    if (!pomodoro.isPaused) {
      timer = setInterval(() => {
        setPomodoro((prevPomodoro) => {
          if (prevPomodoro[controllers[selectedControl].value] === 0) {
            setSelectedControl((prevState) => {
              return prevState < controllers.length - 1 ? prevState + 1 : 0;
            });

            clearInterval(timer);
            return prevPomodoro;
          }
          return {
            ...prevPomodoro,
            [controllers[selectedControl].value]: prevPomodoro[controllers[selectedControl].value] - 1,
          };
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [pomodoro.isPaused, selectedControl, setPomodoro, setSelectedControl]);

  return { pomodoro, setPomodoro, selectedControl, setSelectedControl, getRemainingTimePercentage };
};

export default useTimer;
