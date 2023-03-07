import { controllers } from "../constants/constants";

const TimeDisplay = ({ pomodoro, selectedControl }) => {
  const minutes = Math.floor(pomodoro[controllers[selectedControl].value] / 60);
  const seconds = Math.floor(pomodoro[controllers[selectedControl].value] % 60);
  return (
    <>
      {minutes < 9 ? "0" : ""}
      {minutes}:{seconds < 9 ? "0" : ""}
      {seconds}
    </>
  );
};

export default TimeDisplay;
