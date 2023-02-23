import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartTypes as CartItems } from "../../@types";

interface CartSliceState {
  items: CartItems[];
  totalPrice: number;
  totalCount: number;
}

const total = (state: CartSliceState) => {
  state.totalCount = state.items.reduce((acc, item) => {
    return item.count + acc;
  }, 0);
  state.totalPrice = state.items.reduce((acc, item) => {
    return item.price * item.count + acc;
  }, 0);

  localStorage.setItem("totlaCount", String(state.totalCount));
  localStorage.setItem("totalPrice", String(state.totalPrice));
  localStorage.setItem("pizzas", JSON.stringify(state.items));
};

const getPizzas: CartItems[] = JSON.parse(
  localStorage.getItem("pizzas") || "[]"
);
const getTotalCount: number = JSON.parse(
  localStorage.getItem("totlaCount") || "0"
);
const getTotalPrice: number = JSON.parse(
  localStorage.getItem("totalPrice") || "0"
);

const initialState: CartSliceState = {
  items: getPizzas,
  totalPrice: getTotalPrice,
  totalCount: getTotalCount,
};

const { actions, reducer } = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add Pizzas in cart
    setAddItems(state, { payload }: PayloadAction<CartItems>) {
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
    setPlusCount(state, { payload }: PayloadAction<number>) {
      const findItem = state.items.find((item) => item.id === payload);
      if (findItem) {
        findItem.count++;
      }

      total(state);
    },
    // Minus in cart page
    setMinusCount(state, { payload }: PayloadAction<number>) {
      const findItem = state.items.find((item) => item.id === payload);
      if (findItem) {
        findItem.count--;
      }
      total(state);
    },
    // Delete Pizza block
    setRemoveItem(state, { payload }: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== payload);
      total(state);
    },
    // Clear all
    setClearItems(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
      localStorage.clear();
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
