import { createSlice } from "@reduxjs/toolkit";

const storageName = "ToDoList";

const initialState = {
  value: JSON.parse(localStorage.getItem(storageName)) || [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.value = [...state.value, action.payload];
      localStorage.setItem(storageName, JSON.stringify(state.value));
    },
    deleteItem: (state, action) => {
      state.value = state.value.filter((el) => el.id !== action.payload);
      localStorage.setItem(storageName, JSON.stringify(state.value));
    },
    deleteCompleted: (state) => {
      state.value = state.value.filter((el) => el.completed !== true);
      localStorage.setItem(storageName, JSON.stringify(state.value));
    },
    changeItem: (state, action) => {
      state.value = state.value.map((el) => {
        if (el.id === action.payload.id) {
          el.value = action.payload.editValue;
        }
        return el;
      });
      localStorage.setItem(storageName, JSON.stringify(state.value));
    },
    changeCompletes: (state, action) => {
      state.value = state.value.map((el) => {
        el.completed = action.payload;
        return el;
      });
      localStorage.setItem(storageName, JSON.stringify(state.value));
    },

    changeItemComplete: (state, action) => {
      state.value = state.value.map((el) => {
        if (el.id === action.payload) {
          el.completed = !el.completed;
        }
        return el;
      });
      localStorage.setItem(storageName, JSON.stringify(state.value));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, deleteCompleted, changeItem, changeCompletes, changeItemComplete } = listSlice.actions;

export default listSlice.reducer;
