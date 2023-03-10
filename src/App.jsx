import Labels from "./components/Labels";
import TimeDisplay from "./components/TimeDisplay";
import ToggleButton from "./components/ToggleButton";
import Modal from "./components/Modal";
import useTimer from "./hooks/useTimer";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import useCalculateTime from "./hooks/useCalculateTime";
import { controllers } from "./constants/constants";

const App = () => {
  const { pomodoro, selectedControl, setPomodoro, setSelectedControl, resetTimerValues, getRemainingTimePercentage } = useTimer();
  const { minutes, seconds } = useCalculateTime({ pomodoro, selectedControl });
  const [isSettingsOn, setIsSettingsOn] = useState(false);

  document.title = `${controllers[selectedControl].label} - ${minutes < 9 ? "0" : ""}${minutes}:${seconds < 9 ? "0" : ""}${seconds}`;

  return (
    <main className="relative flex flex-col justify-center items-center">
      <Labels
        resetTimerValues={resetTimerValues}
        selectedControl={selectedControl}
        setSelectedControl={setSelectedControl}
        setPomodoro={setPomodoro}
      />
      <div className="tw-timer-container">
        <div className="tw-timer">
          <div className="flex flex-col justify-center items-center font-semibold relative">
            <CircularProgressbarWithChildren
              strokeWidth={2}
              trailColor="transparent"
              value={getRemainingTimePercentage()}
              styles={buildStyles({
                trailColor: "transparent",
                pathColor: "#f87070",
              })}>
              <TimeDisplay
                pomodoro={pomodoro}
                selectedControl={selectedControl}
              />
              <ToggleButton
                pomodoro={pomodoro}
                setPomodoro={setPomodoro}
              />
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
      <button onClick={() => setIsSettingsOn(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 m-6 ">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
      <Modal
        isSettingsOn={isSettingsOn}
        setIsSettingsOn={setIsSettingsOn}
        setPomodoro={setPomodoro}
      />
    </main>
  );
};

export default App;
