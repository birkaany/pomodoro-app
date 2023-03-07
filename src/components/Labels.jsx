import { controllers } from "../constants/constants";

const Labels = ({ selectedControl, setSelectedControl, resetTimerValues }) => {
  function handleSelectedControl(index) {
    setSelectedControl(index);
    resetTimerValues();
  }

  return (
    <div>
      <ul className="tw-infoContainer">
        {controllers.map((controller, index) => (
          <li
            key={index}
            className={`tw-infoItem ${selectedControl === index && "active"}`}
            onClick={() => handleSelectedControl(index)}>
            {controller.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Labels;
