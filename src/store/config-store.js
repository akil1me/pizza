import { configureStore } from "@reduxjs/toolkit";

import { filterReducer } from "./filter-slice";
import { cartReducer } from "./cart-slice";
import { pizzasReducer } from "./pizza-slice";

export const configStore = configureStore({
  reducer: {
    filter: filterReducer,
    pizzas: pizzasReducer,
    cart: cartReducer,
  },
});
