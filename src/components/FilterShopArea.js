import React, { useState } from "react";
import "./FilterShopArea.css";
import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { filterShopArea } from "../features/shopSlice";

const FilterShopArea = ({ shopName, shopArea, shopType, id }) => {
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();
  const handleChange = () => {
    setChecked(false);
    dispatch(filterShopArea(shopArea));
  };
  return (
    <div className="filter">
      <Checkbox
        checked={checked}
        color="primary"
        onChange={handleChange}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <p>{shopArea}</p>
    </div>
  );
};

export default FilterShopArea;
