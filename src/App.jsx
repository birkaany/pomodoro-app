import Labels from "./components/Labels";
import TimeDisplay from "./components/TimeDisplay";
import ToggleButton from "./components/ToggleButton";
import useTimer from "./hooks/useTimer";

const App = () => {
  const { pomodoro, selectedControl, setPomodoro, setSelectedControl } = useTimer();

  return (
    <>
      <Labels
        selectedControl={selectedControl}
        setSelectedControl={setSelectedControl}
      />
      <div className="tw-timer-container">
        <div className="tw-timer">
          <div className="flex flex-col justify-center items-center font-semibold">
            <TimeDisplay
              pomodoro={pomodoro}
              selectedControl={selectedControl}
            />
            <ToggleButton
              pomodoro={pomodoro}
              setPomodoro={setPomodoro}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
