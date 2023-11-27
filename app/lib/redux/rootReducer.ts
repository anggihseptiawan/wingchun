import { combineReducers } from "@reduxjs/toolkit"
// import { counterSlice } from "./slices/counter"
import persistReducer from "redux-persist/es/persistReducer"
import storage from "./storage"
import { bookmarkSlice } from "./slices/bookmarkSlice"

// const counterPersistConfig = {
//   key: "counter",
//   storage,
// }
const bookmarkPersistConfig = {
  key: "bookmark",
  storage,
}

export const rootReducer = {
  // counter: persistReducer(counterPersistConfig, counterSlice.reducer),
  bookmark: persistReducer(bookmarkPersistConfig, bookmarkSlice.reducer),
}
