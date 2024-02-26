import { createSlice } from "@reduxjs/toolkit";

const storageName = "ToDoFilter";

const initialState = {
  value: JSON.parse(localStorage.getItem(storageName)) || "all",
};

export const listSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
      localStorage.setItem(storageName, JSON.stringify(state.value));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilter } = listSlice.actions;

export default listSlice.reducer;
