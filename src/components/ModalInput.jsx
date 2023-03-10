import React from "react";

const ModalInput = ({ label, defaultValue, onChange, name }) => {
  return (
    <div className="form-group flex flex-col flex-auto">
      <label htmlFor={name}>{label}</label>
      <input
        className="settingsInput w-24 bg-pmd-blue-50 py-2 px-4 text-sm font-bold rounded-xl focus:outline-none"
        min="1"
        max="60"
        type="number"
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
};

export default ModalInput;
