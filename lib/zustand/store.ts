import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Bookmark {
  id: string
  title: string
  year: string
  plot: string
  ratings: {
    Source: string
    Value: string
  }[]
  poster: string
}

interface BookmarkState {
  bookmark: null | Bookmark[]
  setBookmark: (payload: Bookmark) => void
  removeBookmark: (id: string) => void
}

export const useBookmarkStore = create<BookmarkState>()(
  persist(
    (set) => ({
      bookmark: null,
      setBookmark: (payload) =>
        set((state) => {
          if (state.bookmark) {
            return { bookmark: [...state.bookmark, payload] }
          }

          return { bookmark: [payload] }
        }),
      removeBookmark: (id) =>
        set((state) => {
          if (state.bookmark) {
            const movieIndex = state.bookmark.findIndex(
              (movie) => movie.id === id
            )
            const updatedBookmark = [...state.bookmark]
            updatedBookmark.splice(movieIndex, 1)
            return { bookmark: updatedBookmark }
          }

          return { bookmark: state.bookmark }
        }),
    }),
    { name: "bookmark" }
  )
)
