import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ReduxState } from "../store"
import { toast } from "react-hot-toast"
import { MovieDetail } from "@/app/(private)/movie/[id]/page"

const initialState: { value: MovieDetail[] | null } = {
  value: null,
}

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MovieDetail>) => {
      if (state.value) {
        const index = state.value.findIndex(
          (item) => item.id === action.payload.id
        )

        if (index < 0) {
          const updatedState = [...state.value]
          updatedState.push(action.payload)
          state.value = updatedState
          toast.success("Added to bookmark")
        } else {
          toast.error("This movie has bookmarked already!")
        }
      } else {
        state.value = [action.payload]
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      if (state.value) {
        const indexItem = state.value.findIndex(
          (item) => item.id === action.payload
        )

        if (indexItem >= 0) {
          const updatedState = [...state.value]
          updatedState.splice(indexItem, 1)
          state.value = updatedState
          toast.success("Remove succeed!")
        }
      }
    },
  },
})

const selectBookmark = (state: ReduxState) => state.bookmark.value

const { add, remove } = bookmarkSlice.actions

export { bookmarkSlice, selectBookmark, add, remove }
