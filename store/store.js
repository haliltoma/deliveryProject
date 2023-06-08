import { configureStore } from "@reduxjs/toolkit";
import basketSlice  from "./Slices/basketSlice";
import restaurantSlice from "./Slices/restaurantSlice";

export const store = configureStore({
  reducer: {
    basketReducer:basketSlice,
    restaurantReducer:restaurantSlice
  },
});


