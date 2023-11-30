import { NextResponse } from "next/server"

export async function GET() {
  const getMovies = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&year=2023",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmQ4NGRjMzU2MjE5YTU2M2I3Y2M2YjA4MGVjMGEzNCIsInN1YiI6IjY1Njg0NzFjOWFmZmMwMDBlYmNmMzYxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjKnLcdDMZ5D3BgFW7IFGXUEhRFFLXGik9SUpB9p68c",
        accept: "application/json",
      },
    }
  )
  const data = await getMovies.json()

  return NextResponse.json({ data }, { status: 200 })
}
