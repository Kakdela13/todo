import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFilter } from "../../TypeScript/TypeScript";

interface FiltersState {
  filter: TFilter;
}
const initialState: FiltersState = {
  filter: "all",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<TFilter>) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
