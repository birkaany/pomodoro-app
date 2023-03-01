import React, { useState, useEffect } from "react";
import ControlButton from "./ControlButton";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timerId = null;

    if (!isPaused) {
      timerId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft === 0) {
            clearInterval(timerId);
            return 0;
          } else {
            return prevTimeLeft - 1;
          }
        });
      }, 1000);
    } else {
    }

    return () => clearInterval(timerId);
  }, [isPaused]);

  function pauseTimer() {
    setIsPaused((prevState) => !prevState);
    console.log(isPaused);
  }
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <div className="tw-timer-container">
        <div className="tw-timer">
          <div className="flex flex-col justify-center items-center">
            {minutes}:{seconds < 10 ? "0" : ""}
            {seconds}
            <ControlButton
              handleEvent={pauseTimer}
              isPaused={isPaused}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
