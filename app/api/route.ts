import { NextResponse } from "next/server"

export async function GET() {
  const getMovies = await fetch("http://localhost:3000/xyzflix/listmovie")
  const data = await getMovies.json()

  return NextResponse.json({ data }, { status: 200 })
}
