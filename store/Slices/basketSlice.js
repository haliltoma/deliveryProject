import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     items:[]
// }

export const basketSlice = createSlice({
  name: "halil",
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        `Cant remove product (id: ${action.payload.id}) as its not in basket`;
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basketReducer.items;

export const selectedBasketItemWithId = (state, id) => {
  return state.basketReducer.items.filter((item) => item.id === id);
};

export const selectedBasketTotal = (state) =>
  state.basketReducer.items.reduce((total, item) => {
   return total += item.price;
  }, 0);

export default basketSlice.reducer;
