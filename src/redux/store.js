import { configureStore } from "@reduxjs/toolkit";
import listSlice from "@src/redux/listSlice";
import filterSlice from "@src/redux/filterSlice";

export const store = configureStore({
  reducer: {
    list: listSlice,
    filter: filterSlice,
  },
});
