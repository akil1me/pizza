import { configureStore } from "@reduxjs/toolkit";
import { pizzasReducer } from "./pizza-slice/pizza.slice";

export const configStore = configureStore({
  reducer: pizzasReducer,
});
