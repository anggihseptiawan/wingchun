"use client"

import { add } from "@/app/lib/redux/slices/bookmarkSlice"
import { useEffect, useState } from "react"
import { Toaster, toast } from "react-hot-toast"
import { useDispatch } from "react-redux"

export interface MovieDetail {
  id: number
  overview: string
  genres: {
    id: string
    name: string
  }[]
  title: string
  poster_path: string
  release_date: string
  vote_average: number
}

export default function Page({ params }: { params: { id: string } }) {
  const [movieDetail, setMovieDetail] = useState<MovieDetail | null>(null)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`/api/movie`, {
      headers: {
        id: params.id,
      },
    })
      .then((res) => res.json())
      .then((data) => setMovieDetail(data.data))
  }, [])

  if (!movieDetail) return <p>Loading..</p>

  const addToBookmark = () => {
    const data = {
      id: Number(params.id),
      title: movieDetail.title,
      year: movieDetail.release_date,
      overview: movieDetail.overview,
      genres: movieDetail.genres,
      vote_average: movieDetail.vote_average,
      poster_path: movieDetail.poster_path,
      release_date: movieDetail.release_date,
    }

    dispatch(add(data))
  }

  return (
    <div>
      <div className="flex gap-6">
        <img
          src={"https://image.tmdb.org/t/p/w500//" + movieDetail.poster_path}
          className="w-1/3 rounded-xl"
          alt={movieDetail.title}
        />
        <div>
          <div className="mb-5">
            <h1 className="font-bold text-2xl mb-4">{movieDetail.title}</h1>
            <div className="mb-4">
              <p>
                <span className="font-semibold">Released: </span>{" "}
                {new Date(movieDetail.release_date).toLocaleDateString(
                  "en-EN",
                  {
                    month: "long",
                    year: "numeric",
                  }
                )}
              </p>
              <p className="font-semibold">
                Ratings: {movieDetail.vote_average}
              </p>
              <p>
                <span className="font-semibold">Genre: </span>
                {movieDetail.genres.map((genre, idx) => (
                  <span key={idx}>{genre.name},</span>
                ))}
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-xl font-bold mb-2">Overview</h3>
              <p>{movieDetail.overview}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="font-semibold px-6 border-2 border-indigo-700 text-center py-2 rounded-md text-white">
              Play
            </button>
            <button
              className="font-semibold px-6 bg-indigo-700 hover:bg-indigo-600 py-2 rounded-md"
              onClick={addToBookmark}
            >
              Add Bookmark
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
