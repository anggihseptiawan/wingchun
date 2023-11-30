"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export interface Movie {
  id: string
  title: string
  release_date: string
  poster_path: string
  vote_average: string
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])
  // const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data)
        setMovies(data.data.results)
        // setFilteredMovies(data.data)
      })
  }, [])

  // const searchMovie = (value: string) => {
  //   const filtered = movies.filter((movie) =>
  //     movie.Title.toLowerCase().includes(value.toLowerCase())
  //   )
  //   setFilteredMovies(filtered)
  // }

  const dispatch = useDispatch()

  return (
    <main className="min-h-screen">
      <div className="flex justify-end">
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            className="border border-slate-800 rounded-md px-4"
            placeholder="search movie"
            // onChange={(e) => searchMovie(e.target.value)}
          />
          <Link href="/auth/login">
            <button className="w-full bg-slate-800 text-center px-6 py-2 rounded-md text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className="mb-3">
        <h3 className="text-2xl font-bold mb-3">Top movie</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full">
          {movies.map((movie) => (
            <div key={movie.id}>
              <Link href={`/movie/${movie.id}`}>
                <figure className="relative rounded-2xl overflow-hidden">
                  <img
                    className="object-cover mb-2"
                    src={
                      "https://image.tmdb.org/t/p/w500//" + movie.poster_path
                    }
                    alt={movie.title}
                    style={{ aspectRatio: "10/14" }}
                  />
                  <figcaption className="absolute bottom-0 h-16 backdrop-blur-sm bg-transparent w-full p-2 flex justify-between items-center">
                    <div className="flex items-center bg-indigo-700 py-1 px-2 gap-1 rounded-lg">
                      <img
                        src="/star.svg"
                        className="w-4 h-4"
                        alt="star-icon"
                      />
                      <span>{movie.vote_average}</span>
                    </div>
                    <span className="font-bold">
                      {new Date(movie.release_date).toLocaleDateString(
                        "en-EN",
                        { month: "short", year: "numeric" }
                      )}
                    </span>
                  </figcaption>
                </figure>
                <p className="title mb-4">{movie.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
