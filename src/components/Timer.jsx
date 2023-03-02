import React, { useState, useEffect } from "react";
import ControlButton from "./ControlButton";

const Timer = ({ selected }) => {
  const stages = ["pomodoroTime", "shortBreakTime", "longBreakTime"];

  const [pomodoro, setPomodoro] = useState({
    pomodoroTime: 1 * 2,
    shortBreakTime: 5 * 60,
    longBreakTime: 10 * 60,
    isPaused: true,
    period: 4,
    currentStage: stages[selected],
  });
  useEffect(() => {
    let timer = null;

    if (!pomodoro.isPaused) {
      timer = setInterval(() => {
        setPomodoro((prevPomodoro) => {
          if (prevPomodoro[pomodoro.currentStage] === 0) {
            prevPomodoro.currentStage = stages[selected];
            clearInterval(timer);
            return prevPomodoro;
          }
          return {
            ...prevPomodoro,
            [pomodoro.currentStage]: prevPomodoro[pomodoro.currentStage] - 1,
          };
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [pomodoro.isPaused, pomodoro.currentStage]);

  function pauseTimer() {
    setPomodoro((prevPomodoro) => {
      return {
        ...prevPomodoro,
        isPaused: !prevPomodoro.isPaused,
      };
    });
  }

  return (
    <>
      <div className="tw-timer-container">
        <div className="tw-timer">
          <div className="flex flex-col justify-center items-center font-semibold">
            {Math.floor(pomodoro[pomodoro.currentStage] / 60)}:{pomodoro[pomodoro.currentStage] % 60 < 10 ? "0" : ""}
            {pomodoro[pomodoro.currentStage] % 60}
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
