"use client"

import { useEffect, useState } from "react"

interface Contact {
  name: string
  address: string
  phone: string
  phone_wa: string
  email: string
  latitude: number
  longitude: number
}

export default function Page() {
  const [contact, setContact] = useState<Contact | null>(null)
  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => setContact(data.data))
  }, [])

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3 tracking-tight">Contact</h1>
      <div>
        <p className="font-semibold">{contact?.name}</p>
        <p>{contact?.address}</p>
        <p>Phone: {contact?.phone}</p>
        <p>Whatsapp: {contact?.phone_wa}</p>
        <p>Email: {contact?.email}</p>
      </div>
    </div>
  )
}
