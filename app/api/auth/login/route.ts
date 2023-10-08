import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(request: NextRequest) {
  // This is to get the data
  // console.log("body", await request.json())
  cookies().set({
    name: "isLoggedIn",
    value: "true",
    httpOnly: true,
    path: "/",
  })
  return NextResponse.json({ message: "succeed" }, { status: 200 })
}
