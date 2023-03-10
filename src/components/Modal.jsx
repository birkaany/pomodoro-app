import React, { useContext } from "react";
import { stages } from "../constants/constants";
import ModalInput from "./ModalInput";
import { FormDataContext } from "../context/FormDataContext";

const Modal = ({ isSettingsOn, setIsSettingsOn, setPomodoro }) => {
  const { formData, setFormData } = useContext(FormDataContext);

  function handleSubmit(e) {
    e.preventDefault();
    setPomodoro((prevPomodoro) => ({
      ...prevPomodoro,
      pomodoroTime: formData.pomodoro * 60,
      shortBreakTime: formData.shortBreakTime * 60,
      longBreakTime: formData.longBreakTime * 60,
    }));
    setIsSettingsOn(false);
  }

  function closeModal(e) {
    e.preventDefault();
    console.log(e);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <>
      {isSettingsOn && (
        <div className={`block modal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[28rem] rounded-2xl text-pmd-blue-800 p-6`}>
          <div className=" flex py-6 border-b justify-between items-center">
            <h2>Settings</h2>
            <button onClick={() => setIsSettingsOn(false)}>X</button>
          </div>

          <div>
            <h3>Time (minutes)</h3>

            <form
              className="inputs flex"
              onSubmit={handleSubmit}>
              <ModalInput
                label={"pomodoro"}
                name={"pomodoro"}
                defaultValue={stages.pomodoroTime / 60}
                setFormData={setFormData}
                onChange={handleInputChange}
              />
              <ModalInput
                label={"short break"}
                name={"shortBreakTime"}
                defaultValue={stages.shortBreakTime / 60}
                setFormData={setFormData}
                onChange={handleInputChange}
              />
              <ModalInput
                label={"long break"}
                name={"longBreakTime"}
                defaultValue={stages.longBreakTime / 60}
                setFormData={setFormData}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="absolute -bottom-5 bg-pmd-red-700 text-white font-semibold text-sm rounded-full px-8 py-3 left-1/2 -translate-x-1/2 hover:bg-pmd-red-600 transition-all cursor-pointer">
                Apply
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
