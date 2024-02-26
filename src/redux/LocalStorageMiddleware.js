import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  addItem,
  changeCompletes,
  changeItem,
  changeItemComplete,
  deleteCompleted,
  deleteItem,
  storageName as listStorage,
} from "@src/redux/listSlice";

import { setFilter, storageName as filterStorage } from "@src/redux/filterSlice";

export const listStorageMiddleware = createListenerMiddleware();
export const filterStorageMiddleware = createListenerMiddleware();

listStorageMiddleware.startListening({
  matcher: isAnyOf(addItem, changeCompletes, changeItem, changeItemComplete, deleteCompleted, deleteItem),
  effect: (action, listenerApi) => localStorage.setItem(listStorage, JSON.stringify(listenerApi.getState().list.value)),
});

filterStorageMiddleware.startListening({
  matcher: isAnyOf(setFilter),
  effect: (action, listenerApi) => localStorage.setItem(filterStorage, JSON.stringify(listenerApi.getState().filter.value)),
});
