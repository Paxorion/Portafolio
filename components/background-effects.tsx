"use client"

import { motion } from "framer-motion"
import { Spotlight } from "@/components/ui/spotlight"
import { useState, useEffect } from "react"

export function BackgroundEffects() {
  const [particles, setParticles] = useState<Array<{
    id: number
    width: number
    height: number
    backgroundColor: string
    opacity: number
    left: number
    top: number
    animateX: number
    animateY: number
    duration: number
    delay: number
  }>>([])

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = [...Array(40)].map((_, i) => ({
      id: i,
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      backgroundColor: i % 3 === 0 ? "#a855f7" : i % 3 === 1 ? "#3b82f6" : "#10b981",
      opacity: 0.1 + Math.random() * 0.2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animateX: Math.random() * 200 - 100,
      animateY: Math.random() * 200 - 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {" "}
      {/* Wrapper for fixed background */}
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.width,
              height: particle.height,
              backgroundColor: particle.backgroundColor,
              opacity: particle.opacity,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              x: [0, particle.animateX],
              y: [0, particle.animateY],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      {/* Spotlight effect */}
      {/* Adjusted class for fixed positioning and full coverage */}
      <Spotlight className="fixed inset-0 opacity-20" fill="white" />
    </div>
  )
}
