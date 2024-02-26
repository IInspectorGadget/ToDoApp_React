import { configureStore } from "@reduxjs/toolkit";
import listSlice from "@src/redux/listSlice";
import filterSlice from "@src/redux/filterSlice";
import { listStorageMiddleware, filterStorageMiddleware } from "@src/redux/LocalStorageMiddleware";

export const store = configureStore({
  reducer: {
    list: listSlice,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listStorageMiddleware.middleware).concat(filterStorageMiddleware.middleware),
});
