import { createSlice } from "@reduxjs/toolkit";

export const { reducer: pizzasReducer, actions: pizzasActions } = createSlice({
  name: "pizzas",
  initialState: {
    pizzas: [],
  },

  reducers: {
    setPizzas: (state, { payload }) => {
      state.pizzas = payload;
    },
  },
});
