import { createSlice } from "@reduxjs/toolkit"

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: "system",
  },
  reducers: {
    makeItDark: (state) => {
      state.value = "dark"
    },
    makeItLight: (state) => {
      state.value = "light"
    },
    reset: (state) => {
      state.value = "system"
    },
  },
})
