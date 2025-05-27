import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },

    calculateTotal: (state) => {
      state.total = state.cartItems.reduce((acc, item) => {
        const price = item.price?.discount ?? item.price?.original ?? 0;
        return acc + price * item.quantity;
      }, 0);
    },
  },
});

export const { addToCart, removeFromCart, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;
