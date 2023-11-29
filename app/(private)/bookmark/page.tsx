"use client"

import { Button } from "@/app/components/Button"
import { Bookmark, useBookmarkStore } from "@/lib/zustand/store"
import { useEffect, useState } from "react"
import { Toaster, toast } from "react-hot-toast"

export default function Page() {
  const [bookmarks, setBookmarks] = useState<Bookmark[] | null>(null)
  const [bookmarkState, removeBookmark] = useBookmarkStore((state) => [
    state.bookmark,
    state.removeBookmark,
  ])

  useEffect(() => {
    setBookmarks(bookmarkState)
  }, [bookmarkState])

  const removeMovie = (id: string) => {
    console.log(id)
    removeBookmark(id)
    toast.success("Remove succeed!")
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3 tracking-tight">Bookmark</h1>
      {bookmarks ? (
        bookmarks.map((bookmark, idx) => (
          <div className="flex gap-4 mb-4" key={idx}>
            <img src={bookmark.poster} alt={bookmark.title} />
            <div>
              <h3 className="text-lg font-bold">{bookmark.title}</h3>
              <p>Released: {bookmark.year}</p>
              <p>Rating:</p>
              <ul className="pl-3">
                {bookmark.ratings.map((rating, idx) => (
                  <li className="list-disc list-inside" key={idx}>
                    {rating.Source}: {rating.Value}
                  </li>
                ))}
              </ul>
              <p>Plot: {bookmark.plot}</p>
              <Button
                variant="PRIMARY"
                className="px-4 mt-4"
                onClick={() => removeMovie(bookmark.id)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))
      ) : (
        <p>Bookmark empty</p>
      )}
      <Toaster />
    </div>
  )
}
