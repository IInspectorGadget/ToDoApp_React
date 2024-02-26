import { createSlice } from "@reduxjs/toolkit";

export const storageName = "ToDoList";

const initialState = {
  value: JSON.parse(localStorage.getItem(storageName)) || [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteItem: (state, action) => {
      state.value = state.value.filter((el) => el.id !== action.payload);
    },
    deleteCompleted: (state) => {
      state.value = state.value.filter((el) => el.completed !== true);
    },
    changeItem: (state, action) => {
      state.value = state.value.map((el) => {
        if (el.id === action.payload.id) {
          el.value = action.payload.editValue;
        }
        return el;
      });
    },
    changeCompletes: (state, action) => {
      state.value = state.value.map((el) => {
        el.completed = action.payload;
        return el;
      });
    },

    changeItemComplete: (state, action) => {
      state.value = state.value.map((el) => {
        if (el.id === action.payload) {
          el.completed = !el.completed;
        }
        return el;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, deleteCompleted, changeItem, changeCompletes, changeItemComplete } = listSlice.actions;

export default listSlice.reducer;
