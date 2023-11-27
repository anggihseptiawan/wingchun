"use client"

import { remove, selectBookmark } from "@lib/redux/slices/bookmarkSlice"
import { useEffect, useState } from "react"
import { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"

interface BookmarkedMovie {
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

export default function Page() {
  const [bookmarks, setBookmarks] = useState<BookmarkedMovie[] | null>(null)
  const bookmark = useSelector(selectBookmark)
  const dispatch = useDispatch()

  useEffect(() => {
    if (bookmark) {
      setBookmarks(bookmark)
    }
  }, [bookmark])

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3 tracking-tight">Bookmark</h1>
      {bookmarks ? (
        bookmarks.map((bookmark, idx) => (
          <div className="flex gap-4 mb-4" key={bookmark.id}>
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
              <button
                className="font-semibold px-6 bg-slate-800 text-center py-2 rounded-md text-white self-start mt-4"
                onClick={() => dispatch(remove(bookmark.id))}
              >
                Remove
              </button>
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
