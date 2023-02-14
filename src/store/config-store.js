import { configureStore } from "@reduxjs/toolkit";
import { pizzasReducer } from "./pizza-slice";
import { cartReducer } from "./cart-slice";

export const configStore = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    cartReducer,
  },
});
