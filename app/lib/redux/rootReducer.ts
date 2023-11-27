import { combineReducers } from "@reduxjs/toolkit"
import { counterSlice } from "./slices/counter"
import { themeSlice } from "./slices/theme"
import persistReducer from "redux-persist/es/persistReducer"
import storage from "./storage"

const counterPersistConfig = {
  key: "counter",
  storage,
}

export const rootReducer = combineReducers({
  counter: persistReducer(counterPersistConfig, counterSlice.reducer),
  theme: themeSlice.reducer,
})
