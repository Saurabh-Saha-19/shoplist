import React from "react";
import "./App.css";
import Input from "./components/Input";
import ShopItem from "./components/ShopItem";
import Filter from "./components/Filter";
import { useSelector } from "react-redux";
import { selectShopList } from "./features/shopSlice";
import { shopTypeList } from "./components/ShopType";
import { shopAreaList } from "./components/ShopArea";
import FilterShopArea from "./components/FilterShopArea";

function App() {
  const shopList = useSelector(selectShopList);

  return (
    <div className="App">
      <h1>Shop List App</h1>
      {/* to do list */}
      <div className="app__container">
        <div className="firstTwoComp">
          <div className="shoplist__container">
            {shopList.map((item) => (
              //shoplist component
              <ShopItem
                name={item.shopName}
                area={item.shopArea}
                shopType={item.shopType}
                id={item.id}
              />
            ))}
          </div>
          <div className="shoplistfilter__container">
            {shopTypeList.map((item) => (
              //shoplist component
              <Filter shopType={item} />
            ))}
          </div>

          <div className="shopAreafilter__container">
            {shopAreaList.map((item) => (
              //shoplist component
              <FilterShopArea shopArea={item} />
            ))}
          </div>
        </div>
        {/* input component */}
        <Input />
      </div>
    </div>
  );
}

export default App;
