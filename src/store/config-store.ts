import { configureStore } from "@reduxjs/toolkit";

import { filterReducer } from "./filter-slice";
import { cartReducer } from "./cart-slice";
import { pizzasReducer } from "./pizza-slice";
import { useDispatch } from "react-redux";

export const configStore = configureStore({
  reducer: {
    filter: filterReducer,
    pizzas: pizzasReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof configStore.getState>;

type AppDispatch = typeof configStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
