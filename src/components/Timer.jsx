import React, { useState, useEffect } from "react";
import ControlButton from "./ControlButton";

const Timer = ({ selected }) => {
  const [pomodoro, setPomodoro] = useState({
    pomodoroTime: 25 * 60,
    shortBreakTime: 5 * 60,
    longBreakTime: 10 * 60,
    isPaused: false,
    period: 4,
  });

  const controllerValues = ["pomodoroTime", "shortBreakTime", "longBreakTime"];
  useEffect(() => {
    let timer = null;
    if (!pomodoro.isPaused) {
      timer = setInterval(() => {
        setPomodoro((prevPomodoro) => {
          if (prevPomodoro[`${controllerValues[selected]}`] === 0) {
            clearInterval(timer);
            return prevPomodoro;
          }
          const returnValue = {
            ...prevPomodoro,
            [`${controllerValues[selected]}`]: prevPomodoro[`${controllerValues[selected]}`] - 1,
          };

          return returnValue;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [pomodoro.isPaused]);

  function pauseTimer() {
    setPomodoro((prevState) => {
      return {
        ...prevState,
        isPaused: !prevState.isPaused,
      };
    });
  }

  return (
    <>
      <div className="tw-timer-container">
        <div className="tw-timer">
          <div className="flex flex-col justify-center items-center font-semibold">
            {Math.floor(pomodoro[`${controllerValues[selected]}`] / 60)}:{pomodoro[`${controllerValues[selected]}`] % 60 < 10 ? "0" : ""}
            {pomodoro[`${controllerValues[selected]}`] % 60}
            <ControlButton
              handleEvent={pauseTimer}
              isPaused={pomodoro.isPaused}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
