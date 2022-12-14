import React, { useState } from "react";
import "./Filter.css";
import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { filterShop } from "../features/shopSlice";

const Filter = ({ name, area, shopType, id }) => {
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();
  const handleChange = () => {
    setChecked(false);
    dispatch(filterShop(shopType));
  };
  return (
    <div className="filter">
      <Checkbox
        checked={checked}
        color="primary"
        onChange={handleChange}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <p>{shopType}</p>
    </div>
  );
};

export default Filter;
