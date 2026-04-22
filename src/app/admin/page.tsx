"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function Admin() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })
  }, [])

  if (!user) return <p>Loading...</p>

  if (user.email !== "sachinsinghas534@gmail.com") {
    return <p>Access Denied</p>
  }

  return <h1>Admin Panel</h1>
}