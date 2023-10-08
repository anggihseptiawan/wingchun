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
      <div className="mb-3">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.5795263870796!2d${contact?.longitude}!3d${contact?.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTEnMTMuMiJTIDEwNsKwNTYnNTYuMSJF!5e0!3m2!1sid!2sid!4v1696735229918!5m2!1sid!2sid`}
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
      <div>
        <p className="font-semibold">{contact?.name}</p>
        <p>{contact?.address}</p>
        <p>Phone: {contact?.phone}</p>
        <p>Whatsapp: {contact?.phone_wa}</p>
        <p>Email: {contact?.email}</p>
        <p>long: {contact?.longitude}</p>
        <p>lat: {contact?.latitude}</p>
      </div>
    </div>
  )
}
