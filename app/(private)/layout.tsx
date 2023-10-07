import Link from "next/link"
import React from "react"

export default function PrivatePageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav className="flex gap-6">
        <Link href="/" className="font-semibold">
          Home
        </Link>
        <Link href="/movie/list" className="font-semibold">
          Movies
        </Link>
        <Link href="/bookmark" className="font-semibold">
          Bookmarks
        </Link>
        <Link href="/contact" className="font-semibold">
          Contact
        </Link>
      </nav>
      <main className="py-8">{children}</main>
    </>
  )
}
