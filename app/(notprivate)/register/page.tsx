"use client"

import { useState } from "react"
import { Toaster, toast } from "react-hot-toast"

export interface UserData {
  firstName: string
  lastName: string
  userName: string
  password: string
  dob: string
}

export default function Page() {
  const [formData, setFormData] = useState<UserData>({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    dob: "",
  })

  const register = (e: React.FormEvent) => {
    e.preventDefault()

    const storage = localStorage.getItem("users")

    if (storage) {
      const users = JSON.parse(storage)
      localStorage.setItem("users", JSON.stringify([...users, formData]))
    } else {
      localStorage.setItem("users", JSON.stringify([formData]))
    }

    toast.success("New User added")
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="font-bold mb-4 text-xl">Register</h1>
      <form
        className="flex flex-col w-1/3 mx-auto items-center"
        onSubmit={register}
      >
        <div className="flex gap-2 mb-2 w-full">
          <input
            type="text"
            className="w-full border-2 border-slate-800 rounded-md px-4 py-2"
            placeholder="First name"
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <input
            type="text"
            className="w-full border-2 border-slate-800 rounded-md px-4 py-2"
            placeholder="Last name"
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
        <div className="mb-2 w-full">
          <input
            type="text"
            className="w-full border-2 border-slate-800 rounded-md px-4 py-2"
            placeholder="username"
            onChange={(e) =>
              setFormData({ ...formData, userName: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-2 w-full">
          <input
            type="password"
            className="w-full border-2 border-slate-800 rounded-md px-4 py-2"
            placeholder="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-6 w-full">
          <input
            type="date"
            className="w-full border-2 border-slate-800 rounded-md px-4 py-2"
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-slate-800 text-center py-2 rounded-md text-white mb-2"
        >
          Register
        </button>
      </form>

      <Toaster />
    </div>
  )
}
