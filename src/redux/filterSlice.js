import { createSlice } from "@reduxjs/toolkit";

export const storageName = "ToDoFilter";

const initialState = {
  value: JSON.parse(localStorage.getItem(storageName)) || "all",
};

export const listSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilter } = listSlice.actions;

export default listSlice.reducer;
