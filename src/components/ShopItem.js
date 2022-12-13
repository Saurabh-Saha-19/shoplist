import React from "react";
import "./ShopItem.css";
import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeShop } from "../features/shopSlice";

const ShopItem = ({ name, area, shopType, id }) => {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(removeShop(id));
  };

  return (
    <div className="shopItem">
      <Checkbox
        checked={false}
        color="primary"
        onChange={handleChange}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <p> {`Shop Name : ${name}`}</p>
      <p>{`Location : ${area}`}</p>
      <p>{`Shop Type : ${shopType}`}</p>
    </div>
  );
};

export default ShopItem;
