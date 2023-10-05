"use client"

import { useEffect, useState } from "react"

interface BookmarkedMovie {
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

  useEffect(() => {
    const bookmark = localStorage.getItem("bookmark")
    if (bookmark) setBookmarks(JSON.parse(bookmark!))
  }, [])

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
            </div>
          </div>
        ))
      ) : (
        <p>Bookmark empty</p>
      )}
    </div>
  )
}
