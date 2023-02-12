import { createSlice } from "@reduxjs/toolkit";

export const { reducer: pizzasReducer, actions: pizzasActions } = createSlice({
  name: "pizzas",
  initialState: {
    pizzas: [],
    categoryActive: 0,
    sorting: "",
    isLoading: false,
  },

  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },

    setPizzas: (state, { payload }) => {
      state.pizzas = payload;
    },

    setCategoryActive: (state, { payload }) => {
      state.categoryActive = payload;
    },

    setSorting: (state, { payload }) => {
      state.sorting = payload;
    },
  },
});
