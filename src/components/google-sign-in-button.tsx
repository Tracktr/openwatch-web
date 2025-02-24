"use client"

import { useState } from "react"
import { Chrome } from "lucide-react"

import { Button } from "@/components/ui/button"

export function GoogleSignInButton() {
  const [isLoading, setIsLoading] = useState(false)

  const login = () => {
    setIsLoading(true)
    window.location.href = "/auth/google"
  }

  return (
    <Button onClick={login} disabled={isLoading} className="w-full">
      {isLoading ? <Chrome className="mr-2 h-4 w-4 animate-spin" /> : <Chrome className="mr-2 h-4 w-4" />}
      Continue with Google
    </Button>
  )
}

