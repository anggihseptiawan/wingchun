import { NextResponse } from "next/server"

export async function GET() {
  const getContact = await fetch("http://localhost:3000/xyzflix/contactus")
  const data = await getContact.json()

  return NextResponse.json({ data }, { status: 200 })
}
