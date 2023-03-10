import { useEffect, useState, useRef, useContext } from "react";
import { stages, controllers } from "../constants/constants";
import { FormDataContext } from "../context/FormDataContext";
import ring from "../assets/bell-ring.mp3";

const useTimer = () => {
  const { formData } = useContext(FormDataContext);
  const [selectedControl, setSelectedControl] = useState(0);
  const [pomodoro, setPomodoro] = useState(stages);
  const periodId = useRef(stages.period);
  const Sound = () => {
    const audio = new Audio(ring);
    return audio.play();
  };

  const resetTimerValues = () => {
    setPomodoro((prevPomodoro) => ({
      ...prevPomodoro,
      pomodoroTime: formData.pomodoroTime * 60,
      shortBreakTime: formData.shortBreakTime * 60,
      longBreakTime: formData.longBreakTime * 60,
    }));
  };

  const getRemainingTimePercentage = () => {
    const totalTime = formData[controllers[selectedControl].value] * 60;
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
              if (periodId.current % 8 === 0) {
                return 2;
              } else {
                return prevState >= controllers.length - 1 ? 0 : prevState === 0 ? prevState + 1 : prevState === 1 ? prevState - 1 : 0;
              }
            });

            resetTimerValues();
            clearInterval(timer);
            Sound();
            periodId.current += 1;

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
  }, [pomodoro.isPaused, selectedControl, setPomodoro, setSelectedControl, pomodoro.period]);

  return { pomodoro, setPomodoro, selectedControl, setSelectedControl, resetTimerValues, getRemainingTimePercentage };
};

export default useTimer;
