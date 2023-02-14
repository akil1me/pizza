import { createSlice } from "@reduxjs/toolkit";

export const { reducer: pizzasReducer, actions: pizzasActions } = createSlice({
  name: "pizzas",
  initialState: {
    pizzas: [],
    categoryActive: 0,
    sorting: "",
    isLoading: false,
    pageNum: 1,
  },

  reducers: {
    setIsLoading(state, { payload }) {
      state.isLoading = payload;
    },

    setPizzas(state, { payload }) {
      state.pizzas = payload;
    },

    setCategoryActive(state, { payload }) {
      state.categoryActive = +payload;
    },

    setSorting(state, { payload }) {
      state.sorting = payload;
    },
    setPageNum(state, { payload }) {
      state.pageNum = payload;
    },
    setParapms(state, { payload }) {
      state.categoryActive = +payload.categoryActive;
      state.pageNum = +payload.pageNum;
      state.sorting = payload.sorting;
    },
  },
});
