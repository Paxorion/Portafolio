"use client"

import { useState, useEffect } from "react"
import { LandingPage } from "@/components/landing-page"
import { Portfolio } from "@/components/portfolio"

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!showPortfolio) {
    return <LandingPage onEnter={() => setShowPortfolio(true)} />
  }

  return <Portfolio />
}
