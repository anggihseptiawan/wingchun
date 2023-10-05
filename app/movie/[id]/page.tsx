"use client"

import { useEffect, useState } from "react"

export interface MovieDetail {
  Title: string
  Year: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Country: string
  Plot: string
  Genre: string
  Writer: string
  Actors: string
  Poster: string
}

export default function Page({ params }: { params: { id: string } }) {
  const [movieDetail, setMovieDetail] = useState<MovieDetail | null>(null)

  useEffect(() => {
    fetch(`/api/movie`, {
      headers: {
        imdbID: params.id,
      },
    })
      .then((res) => res.json())
      .then((data) => setMovieDetail(data.data))
  }, [])

  if (!movieDetail) return <p>Loading..</p>

  const addToBookmark = () => {
    const data = {
      title: movieDetail.Title,
      year: movieDetail.Year,
      plot: movieDetail.Plot,
      ratings: movieDetail.Ratings,
      poster: movieDetail.Poster,
    }

    const storage = localStorage.getItem("bookmark")

    if (storage) {
      const bookmark = JSON.parse(storage)
      localStorage.setItem("bookmark", JSON.stringify([...bookmark, data]))
    } else {
      localStorage.setItem("bookmark", JSON.stringify([data]))
    }
  }

  return (
    <div>
      <div className="flex gap-4">
        <img
          src={movieDetail.Poster}
          className="mb-2"
          alt={movieDetail.Title}
        />
        <div>
          <div className="mb-5">
            <h1 className="font-bold text-2xl mb-4">{movieDetail.Title}</h1>
            <p>
              <span className="font-semibold">Released: </span>{" "}
              {movieDetail.Year}
            </p>
            <p className="font-semibold">Ratings:</p>
            <ul className="pl-3">
              {movieDetail.Ratings.map((rating, idx) => (
                <li className="list-disc list-inside" key={idx}>
                  {rating.Source}: {rating.Value}
                </li>
              ))}
            </ul>
            <p>
              <span className="font-semibold">Country: </span>{" "}
              {movieDetail.Country}
            </p>
            <p>
              <span className="font-semibold">Plot: </span> {movieDetail.Plot}
            </p>
            <p>
              <span className="font-semibold">Genre: </span> {movieDetail.Genre}
            </p>
            <p>
              <span className="font-semibold">Writer: </span>{" "}
              {movieDetail.Writer}
            </p>
            <p>
              <span className="font-semibold">Actors: </span>{" "}
              {movieDetail.Actors}
            </p>
          </div>
          <div className="flex gap-1">
            <button className="font-semibold px-6 bg-slate-800 text-center py-2 rounded-md text-white">
              Play
            </button>
            <button
              className="font-semibold px-6 border-2 border-slate-800 py-2 rounded-md"
              onClick={addToBookmark}
            >
              Add Bookmark
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
