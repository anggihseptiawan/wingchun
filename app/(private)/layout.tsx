"use client"

import Link from "next/link"
import React from "react"
import { Counter } from "../components/Counter"
import { useSelector } from "react-redux"
import { selectTheme } from "../lib/redux/slices/theme/selector"
import { Text } from "../components/Text"

export default function PrivatePageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = useSelector(selectTheme)

  return (
    <>
      <nav className="flex justify-between">
        <div className="flex gap-6">
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
        </div>
        <p>Theme: {theme}</p>
        <Counter>
          <Text />
        </Counter>
      </nav>
      <main className="py-8">{children}</main>
    </>
  )
}
