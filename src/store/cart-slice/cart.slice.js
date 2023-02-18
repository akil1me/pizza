import { createSlice } from "@reduxjs/toolkit";

const total = (state) => {
  state.totalCount = state.items.reduce((acc, item) => {
    return item.count + acc;
  }, 0);
  state.totalPrice = state.items.reduce((acc, item) => {
    return item.price * item.count + acc;
  }, 0);

  localStorage.setItem("totlaCount", state.totalCount);
  localStorage.setItem("totalPrice", state.totalPrice);
  localStorage.setItem("pizzas", JSON.stringify(state.items));
};

const getPizzas = JSON.parse(localStorage.getItem("pizzas"));
const getTotalCount = JSON.parse(localStorage.getItem("totlaCount"));
const getTotalPrice = JSON.parse(localStorage.getItem("totalPrice"));

const { actions, reducer } = createSlice({
  name: "cart",
  initialState: {
    items: getPizzas || [],
    totalPrice: getTotalPrice || 0,
    totalCount: getTotalCount || 0,
  },

  reducers: {
    // Add Pizzas in cart
    setAddItems(state, { payload }) {
      const findItem = state.items.find(
        (item) =>
          item.imageUrl === payload.imageUrl &&
          item.types === payload.types &&
          item.sizes === payload.sizes
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push(payload);
      }

      total(state);
    },
    // Plus in cart page
    setPlusCount(state, { payload }) {
      const findItem = state.items.find((item) => item.id === payload);
      if (findItem) {
        findItem.count++;
      }

      total(state);
    },
    // Minus in cart page
    setMinusCount(state, { payload }) {
      const findItem = state.items.find((item) => item.id === payload);
      if (findItem) {
        findItem.count--;
      }
      total(state);
    },
    // Delete Pizza block
    setRemoveItem(state, { payload }) {
      state.items = state.items.filter((item) => item.id !== payload);
      total(state);
    },
    // Clear all
    setClearItems(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
      localStorage.removeItem("pizzas");
    },
  },
});

export const {
  setAddItems,
  setClearItems,
  setRemoveItem,
  setPlusCount,
  setMinusCount,
} = actions;
export const cartReducer = reducer;
