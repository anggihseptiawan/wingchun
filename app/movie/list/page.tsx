"use client"

import { Button } from "@/app/components/Button"
import { Movie } from "@/app/page"
import { useEffect, useState } from "react"

export default function Page() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMovies(data.data))
  }, [])

  return (
    <div>
      <h1 className="font-bold text-2xl tracking-tight mb-3">All Movies</h1>
      <div className="flex justify-end mb-3">
        <Button variant="SECONDARY">Next</Button>
      </div>
      <table className="w-full border border-slate-500">
        <thead className="border border-slate-500">
          <tr>
            <td className="border border-slate-500 px-2 py-1">Title</td>
            <td className="border border-slate-500 px-2 py-1">Year</td>
            <td className="border border-slate-500 px-2 py-1">Type</td>
          </tr>
        </thead>
        <tbody className="border border-slate-500">
          {movies.map((movie) => (
            <tr key={movie.imdbID}>
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
