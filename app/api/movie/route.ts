import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const imdbID = request.headers.get("imdbID")
  console.log("id ", imdbID)
  const getMovies = await fetch(
    `http://www.omdbapi.com?apikey=3a2fff02&i=${imdbID}&plot=full`
  )
  const data = await getMovies.json()

  return NextResponse.json({ data }, { status: 200 })
}
