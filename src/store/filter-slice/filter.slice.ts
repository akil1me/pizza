import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type FilterSliceState = {
    categoryActive: number;
    sorting: string;
    pageNum: number;
}

const initialState: FilterSliceState = {
  categoryActive: 0,
  sorting: "",
  pageNum: 1,
}

export const { reducer: filterReducer, actions: filterActions } = createSlice({
  name: "filter",
  initialState,

  reducers: {
       setCategoryActive(state, { payload }: PayloadAction<number>) {
      state.categoryActive = payload;
    },

    setSorting(state, { payload }) {
      state.sorting = payload;
    },
    setPageNum(state, { payload }: PayloadAction<number>) {
      state.pageNum = payload;
    },
    setParapms(state, { payload }: PayloadAction<FilterSliceState>) {
      state.categoryActive = +payload.categoryActive;
      state.pageNum = +payload.pageNum;
      state.sorting = payload.sorting;
    },
  },
});
