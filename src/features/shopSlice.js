import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopList: [],
};

const shopSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    saveShop: (state, action) => {
      state.shopList.push(action.payload);
    },

    removeShop: (state, action) => {
      state.shopList = state.shopList.filter(
        (item) => item.id !== action.payload
      );
    },

    filterShop: (state, action) => {
      state.shopList = state.shopList.filter(
        (item) => item.shopType !== action.payload
      );
    },

    filterShopArea: (state, action) => {
      state.shopList = state.shopList.filter(
        (item) => item.shopArea !== action.payload
      );
    },
  },
});

export const { saveShop, removeShop, filterShop, filterShopArea } =
  shopSlice.actions;

export const selectShopList = (state) => state.shops.shopList;

export default shopSlice.reducer;
