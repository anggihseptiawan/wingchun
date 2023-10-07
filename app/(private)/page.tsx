"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMovies(data.data))
  }, [])

  const searchMovie = (value: string) => {
    if (value.length < 3) return

    const filteredMovies = movies.filter((movie) => {
      return movie.Title.toLowerCase().includes(value.toLowerCase())
    })
    setMovies(filteredMovies)
  }

  return (
    <main className="min-h-screen">
      <div className="flex justify-end">
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            className="border border-slate-800 rounded-md px-4"
            placeholder="search movie"
            onChange={(e) => searchMovie(e.target.value)}
          />
          <Link href="/login">
            <button className="w-full bg-slate-800 text-center px-6 py-2 rounded-md text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className="mb-3">
        <h3 className="text-2xl font-bold mb-3">Top movie (1-20)</h3>
        <div className="flex gap-2 w-full overflow-x-auto">
          {movies
            .filter((_, index) => index < 20)
            .map((movie, idx) => (
              <div key={idx} className="w-[150px] flex-shrink-0">
                <img className="mb-2" src={movie.Poster} alt={movie.Title} />
                <Link href={`/movie/${movie.imdbID}`}>
                  <span className="font-semibold">{movie.Title}</span>
                </Link>
                <p>Release: {movie.Year}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="mb-3">
        <h3 className="text-2xl font-bold mb-3">Top movie (21-40)</h3>
        <div className="flex gap-2 w-full overflow-x-auto">
          {movies
            .filter((_, index) => index > 19 && index < 40)
            .map((movie, idx) => (
              <div key={idx} className="w-[150px] flex-shrink-0">
                <img className="mb-2" src={movie.Poster} alt={movie.Title} />
                <Link href={`/movie/${movie.imdbID}`}>
                  <span className="font-semibold">{movie.Title}</span>
                </Link>
                <p>Release: {movie.Year}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="mb-3">
        <h3 className="text-2xl font-bold mb-3">Top movie (41-60)</h3>
        <div className="flex gap-2 w-full overflow-x-auto">
          {movies
            .filter((_, index) => index > 39 && index < 60)
            .map((movie, idx) => (
              <div key={idx} className="w-[150px] flex-shrink-0">
                <img className="mb-2" src={movie.Poster} alt={movie.Title} />
                <Link href={`/movie/${movie.imdbID}`}>
                  <span className="font-semibold">{movie.Title}</span>
                </Link>
                <p>Release: {movie.Year}</p>
              </div>
            ))}
        </div>
      </div>
    </main>
  )
}
