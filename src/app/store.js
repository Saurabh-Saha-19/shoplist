import { configureStore } from "@reduxjs/toolkit";
import shopListReducer from "../features/shopSlice";

export const store = configureStore({
  reducer: {
    shops: shopListReducer,
  },
});
