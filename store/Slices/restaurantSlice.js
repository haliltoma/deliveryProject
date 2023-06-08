import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   restaurant:{
    id:null,
    rating:null,
    genre:null,
    address:null,
    short_description:null,
    dishes:null,
   }
}

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant:(state,action)=>{
        state.restaurant=action.payload
    }
  },
});

export const { setRestaurant} = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurantReducer.restaurant;


export default restaurantSlice.reducer;
