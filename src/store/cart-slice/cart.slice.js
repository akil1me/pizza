import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    totalCount: 0,
  },

  reducers: {
    setAddItems(state, { payload }) {
      state.items.push(payload);
    },
  },
});

export const { setAddItems } = actions;
export const cartReducer = reducer;
