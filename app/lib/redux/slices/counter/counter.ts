import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: "0",
  },
  reducers: {
    increment: (state) => {
      state.value = String(Number(state.value) + 1)
    },
    decrement: (state) => {
      state.value = String(Math.max(Number(state.value) - 1, 0))
    },
  },
})
