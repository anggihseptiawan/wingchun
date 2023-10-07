"use client"

import Link from "next/link"
import { Button } from "../../components/Button"
import { useState } from "react"
import { Toaster, toast } from "react-hot-toast"
import { UserData } from "../register/page"
import { redirect } from "next/navigation"

export default function Page() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  })

  const login = (e: React.FormEvent) => {
    e.preventDefault()

    const storage = localStorage.getItem("users")

    if (storage) {
      const users = JSON.parse(storage) as UserData[]
      const filtered = users.filter(
        (user) =>
          user.userName === formData.userName &&
          user.password === formData.password
      )
      if (filtered.length > 0) {
        toast.success("Login succeed")
        redirect("/")
      } else {
        toast.error("User not found!")
      }
    } else {
      toast.error("There is no user, please register!")
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-xl mb-4">Welcome</h1>
      <form
        className="flex flex-col w-1/3 mx-auto items-center"
        onSubmit={login}
      >
        <div className="mb-2 w-full">
          <input
            type="text"
            className="w-full border-2 border-slate-800 rounded-md px-4 py-2"
            placeholder="username"
            onChange={(e) =>
              setFormData({ ...formData, userName: e.target.value })
            }
          />
        </div>
        <div className="mb-6 w-full">
          <input
            type="password"
            className="w-full border-2 border-slate-800 rounded-md px-4 py-2"
            placeholder="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Link href="/register" className="w-full">
          <Button variant="SECONDARY" className="w-full">
            Register
          </Button>
        </Link>
      </form>
      <Toaster />
    </div>
  )
}
