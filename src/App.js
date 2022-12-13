import React from "react";
import "./App.css";
import Input from "./components/Input";
import ShopItem from "./components/ShopItem";
import { useSelector } from "react-redux";
import { selectShopList } from "./features/shopSlice";

function App() {
  const shopList = useSelector(selectShopList);

  return (
    <div className="App">
      <h1>Shop List App</h1>
      {/* to do list */}
      <div className="app__container">
        <div className="shoplist__container">
          {shopList.map((item) => (
            //shoplist component
            <ShopItem
              name={item.shopName}
              area={item.shopArea}
              shopType={item.shopType}
              id={item.id}
              remove={item.remove}
            />
          ))}
        </div>
        {/* input component */}
        <Input />
      </div>
    </div>
  );
}

export default App;
