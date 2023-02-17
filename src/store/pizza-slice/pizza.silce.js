import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "../../utils";

export const fetchPizzas = createAsyncThunk(
  "users/fetchPizzasStatus",
  async ({ page, category, sort }) => {
    const { data } = await axios(API_URL + "?" + page + category + sort);
    return data;
  }
);

export const { reducer: pizzasReducer, actions: pizzasActions } = createSlice({
  name: "pizzas",
  initialState: {
    pizzas: [],
    status: "",
    isLoading: false,
  },

  reducers: {},
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.isLoading = true;
      state.pizzas = [];
    },
    [fetchPizzas.fulfilled]: (state, { payload }) => {
      state.pizzas = payload;
      state.isLoading = false;
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = "Error";
      state.pizzas = [];
      state.isLoading = false;
    },
  },
});
