"use client"

import { Button } from "@/app/components/Button"
import { Movie } from "@/app/(private)/page"
import { useEffect, useState } from "react"

export default function Page() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [pages, setPages] = useState({
    offset: 0,
    page: 20,
  })

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMovies(data.data))
  }, [])

  return (
    <div>
      <h1 className="font-bold text-2xl tracking-tight mb-3">All Movies</h1>
      <div className="flex justify-end gap-1 mb-3">
        <Button
          variant="SECONDARY"
          disabled={!pages.offset}
          onClick={() =>
            setPages({ ...pages, offset: pages.offset - pages.page })
          }
        >
          Prev
        </Button>
        <Button
          variant="SECONDARY"
          disabled={!!pages.offset}
          onClick={() =>
            setPages({ ...pages, offset: pages.offset + pages.page })
          }
        >
          Next
        </Button>
      </div>
      <table className="w-full border border-slate-500">
        <thead className="border border-slate-500">
          <tr>
            <td className="border border-slate-500 px-2 py-1">No.</td>
            <td className="border border-slate-500 px-2 py-1">Title</td>
            <td className="border border-slate-500 px-2 py-1">Year</td>
            <td className="border border-slate-500 px-2 py-1">Type</td>
          </tr>
        </thead>
        <tbody className="border border-slate-500">
          {movies
            .filter(
              (_, idx) => idx >= pages.offset && idx < pages.offset + pages.page
            )
            .map((movie, idx) => (
              <tr key={movie.imdbID}>
                <td className="border border-slate-500 px-2 py-1">
                  {pages.offset + idx + 1}.
                </td>
                <td className="border border-slate-500 px-2 py-1">
                  {movie.Title}
                </td>
                <td className="border border-slate-500 px-2 py-1">
                  {movie.Year}
                </td>
                <td className="border border-slate-500 px-2 py-1">
                  {movie.Type}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
