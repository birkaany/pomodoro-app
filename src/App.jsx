import Labels from "./components/Labels";
import TimeDisplay from "./components/TimeDisplay";
import ToggleButton from "./components/ToggleButton";
import useTimer from "./hooks/useTimer";
import { CircularProgressbarWithChildren, buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const App = () => {
  const { pomodoro, selectedControl, setPomodoro, setSelectedControl, resetTimerValues, getRemainingTimePercentage } = useTimer();
  // Calculate percentage of remaining time for progress bar

  return (
    <>
      <Labels
        resetTimerValues={resetTimerValues}
        selectedControl={selectedControl}
        setSelectedControl={setSelectedControl}
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
    </>
  );
};

export default App;
