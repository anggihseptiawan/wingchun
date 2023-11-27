"use client"

import { useSelector } from "react-redux"
import { selectCount } from "../lib/redux/slices/counter/selector"
import { useEffect, useState } from "react"

export const Counter = ({ children }: { children: React.ReactElement }) => {
  const count = useSelector(selectCount)
  const [syncedCount, setSyncedCount] = useState("")

  useEffect(() => {
    if (count) {
      setSyncedCount(count)
    }
  }, [count])

  return (
    <div>
      <p>Count: {syncedCount}</p>
      {children}
    </div>
  )
}
