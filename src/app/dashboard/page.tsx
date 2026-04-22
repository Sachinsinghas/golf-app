"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser()

      if (!data.user) {
        router.push("/login")
      } else {
        setUser(data.user)
      }
    }

    checkUser()
  }, [])

  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <h1 className="text-2xl">Dashboard</h1>
        <p>{user?.email}</p>

        <button
          className="bg-red-500 text-white p-2 mt-4"
          onClick={async () => {
            await supabase.auth.signOut()
            router.push("/login")
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}