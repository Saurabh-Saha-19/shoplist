import React from "react";
import "./Checkbox.css";
const Checkbox = ({ label, value, onChange }) => {
  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" value={value} onChange={onChange} />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
