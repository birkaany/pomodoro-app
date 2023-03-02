import React from "react";

const Labels = ({ selected, handleEvent }) => {
  const controllers = [
    { label: "pomodoro", value: "pomodoroTime" },
    { label: "short break", value: "shortBreakTime" },
    { label: "long break", value: "longBreakTime" },
  ];
  return (
    <ul className="tw-infoContainer">
      {controllers.map((controller, index) => (
        <li
          key={index}
          className={`tw-infoItem ${selected === index && "active"}`}
          onClick={() => handleEvent(index)}>
          {controller.label}
        </li>
      ))}
    </ul>
  );
};

export default Labels;
