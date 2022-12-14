import React from "react";
import "./Checkbox.css";
const Checkbox = ({ label, value, onChange, check }) => {
  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          checked={check}
          value={value}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
