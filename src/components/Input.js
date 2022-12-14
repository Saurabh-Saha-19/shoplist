import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveShop } from "../features/shopSlice";
import Checkbox from "./Checkbox";
import "./Input.css";

const Input = () => {
  const [input, setInput] = useState("");
  const [area, setArea] = useState("");
  const [checked1, setChecked1] = useState();
  const [checked2, setChecked2] = useState();
  const [checked3, setChecked3] = useState();
  const [checked4, setChecked4] = useState();

  const dispatch = useDispatch();
  const addTODO = () => {
    console.log(`Adding ${input}`);

    dispatch(
      saveShop({
        id: Date.now(),
        shopName: input,
        shopArea: area,
        shopType: checked1 || checked2 || checked3 || checked4,
      })
    );
    setInput("");
    setArea("");
  };

  return (
    <div className="input">
      <label>
        Name:
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </label>

      <Checkbox
        label="Grocery"
        value="Grocery"
        onChange={(e) => setChecked1(e.target.value)}
      />
      <Checkbox
        label="Butcher"
        value="Butcher"
        onChange={(e) => setChecked2(e.target.value)}
      />
      <Checkbox
        label="Baker"
        value="Baker"
        onChange={(e) => setChecked3(e.target.value)}
      />
      <Checkbox
        label="Chemist"
        value="Chemist"
        onChange={(e) => setChecked4(e.target.value)}
      />

      <button onClick={addTODO}> Add !</button>
    </div>
  );
};

export default Input;
