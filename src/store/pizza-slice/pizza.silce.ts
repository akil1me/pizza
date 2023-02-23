import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "../../utils";
import { Pizzas } from "../../@types";

type Params = Record<string, string>;

interface PizzasSliceState {
  pizzas: Pizzas[];
  status: string;
  isLoading: boolean;
}

export const fetchPizzas = createAsyncThunk<Pizzas[], Params>(
  "pizzas/fetchPizzasStatus",
  async ({ page, category, sort }) => {
    const { data } = await axios<Pizzas[]>(
      API_URL + "?" + page + category + sort
    );

    return data;
  }
);

const initialState: PizzasSliceState = {
  pizzas: [],
  status: "",
  isLoading: false,
};

export const { reducer: pizzasReducer, actions: pizzasActions } = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.isLoading = true;
      state.pizzas = [];
    });
    builder.addCase(
      fetchPizzas.fulfilled,
      (state, { payload }: PayloadAction<Pizzas[]>) => {
        state.pizzas = payload;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = action.error.message || "";
      state.pizzas = [];
      state.isLoading = false;
    });
  },
});

// JavaScript :

// extraReducers: {
//   [fetchPizzas.pending]: (state) => {
//     state.isLoading = true;
//     state.pizzas = [];
//   },
//   [fetchPizzas.fulfilled]: (state, { payload }) => {
//     state.pizzas = payload;
//     state.isLoading = false;
//   },
//   [fetchPizzas.rejected]: (state, action) => {
//     state.status = action.error.message;
//     state.pizzas = [];
//     state.isLoading = false;
//   },
// },
