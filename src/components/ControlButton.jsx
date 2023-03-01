import React from "react";

const ControlButton = ({ handleEvent, isPaused }) => {
  return (
    <button
      className="text-xl uppercase tracking-[0.5rem]"
      onClick={handleEvent}>
      {isPaused ? "Devam et" : "Durdur"}
    </button>
  );
};

export default ControlButton;
