import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../../types/cart";
import { Product } from "../../types/products";

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload as Product;
      const index = state.items.findIndex((p) => p.product.id === product.id);
      if (index >= 0) {
        state.items[index].quantity++;
      } else {
        state.items.push({ quantity: 1, product });
      }
      state.total += product.price;
    },
    removeProduct: (state, action) => {
      const product = action.payload.product as Product;
      const removeAll = action.payload.removeAll as boolean;
      const index = state.items.findIndex((p) => p.product.id === product.id);
      if (index >= 0) {
        if (removeAll) {
          state.total -= product.price * state.items[index].quantity;
          state.items.splice(index, 1);
        } else {
          state.items[index].quantity--;
          state.total -= product.price;
          if (state.items[index].quantity === 0) {
            state.items.splice(index, 1);
          }
        }
      }
    },
    clear: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, clear } = cartSlice.actions;

export default cartSlice.reducer;
