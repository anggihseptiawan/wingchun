"use client"

import { remove, selectBookmark } from "@lib/redux/slices/bookmarkSlice"
import { useEffect, useState } from "react"
import { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { MovieDetail } from "../movie/[id]/page"

export default function Page() {
  const [bookmarks, setBookmarks] = useState<MovieDetail[] | null>(null)
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
        bookmarks.map((bookmark) => (
          <div className="flex gap-4 mb-4" key={bookmark.id}>
            <img
              src={"https://image.tmdb.org/t/p/w500//" + bookmark.poster_path}
              className="w-1/3"
              alt={bookmark.title}
            />
            <div>
              <div className="mb-5">
                <h1 className="font-bold text-2xl mb-4">{bookmark.title}</h1>
                <div className="mb-4">
                  <p>
                    <span className="font-semibold">Released: </span>{" "}
                    {new Date(bookmark.release_date).toLocaleDateString(
                      "en-EN",
                      {
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </p>
                  <p className="font-semibold">
                    Ratings: {bookmark.vote_average}
                  </p>
                  <p>
                    <span className="font-semibold">Genre: </span>
                    {bookmark.genres.map((genre) => (
                      <span>{genre.name},</span>
                    ))}
                  </p>
                </div>
                <div className="mb-5">
                  <h3 className="text-xl font-bold mb-2">Overview</h3>
                  <p>{bookmark.overview}</p>
                </div>
              </div>
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
