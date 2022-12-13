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
  },
});

export const { saveShop } = shopSlice.actions;

export default shopSlice.reducer;
