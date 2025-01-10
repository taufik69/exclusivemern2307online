import { createSlice } from "@reduxjs/toolkit";
import { ToastSucess, ToastError, infoToast } from "../../helpers/Toast";

const initialState = {
  cart: localStorage.getItem("cartitem")
    ? JSON.parse(localStorage.getItem("cartitem"))
    : [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const indexNumber = state.cart.findIndex((item) => {
        return item._id === action.payload._id;
      });
      if (indexNumber >= 0) {
        state.cart[indexNumber].quantity += 1;
        infoToast(`${action.payload.name} again add to cart`);
        localStorage.setItem("cartitem", JSON.stringify(state.cart));
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        ToastSucess(`${action.payload.name} is add to cart`);
        localStorage.setItem("cartitem", JSON.stringify(state.cart));
      }
    },
    removeCart: (state, action) => {
      const containCartItem = state.cart.filter((item) => {
        return item._id !== action.payload._id;
      });
      state.cart = containCartItem;
      localStorage.setItem("cartitem", JSON.stringify(state.cart));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtoCart, removeCart } = productSlice.actions;

export default productSlice.reducer;
