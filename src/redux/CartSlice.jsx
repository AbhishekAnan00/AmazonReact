import { createSlice } from "@reduxjs/toolkit";

//store item in local storage
const initialState = JSON.parse(localStorage.getItem("cart"))?? [];

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: { 
    addToCart(state, action) {
      state.push(action.payload);
    },
    deleteFromCart(state, action) {
      return state.filter((item) => item.id != action.payload.id);
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;