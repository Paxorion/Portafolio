"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { Bot } from "lucide-react"
import Spline from "@splinetool/react-spline"

interface SplineSceneProps {
  scene: string
  className?: string
  enableControls?: boolean
}

export function SplineScene({ scene, className, enableControls = true }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const splineRef = useRef<any>(null)
  const robotRef = useRef<any>(null)
  const animationRef = useRef<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Mouse tracking for robot
  const updateRobotTracking = useCallback((mouseX: number, mouseY: number) => {
    if (!splineRef.current || !robotRef.current || isMobile) return

    const { innerWidth, innerHeight } = window
    if (!innerWidth || !innerHeight) return

    // Calculate normalized position (-1 to 1)
    const normalizedX = (mouseX / innerWidth) * 2 - 1
    const normalizedY = -(mouseY / innerHeight) * 2 + 1

    // Apply smooth movement to robot
    const currentRotation = robotRef.current.rotation
    const targetRotationX = normalizedY * 0.3 // Vertical movement affects X rotation
    const targetRotationY = normalizedX * 0.3 // Horizontal movement affects Y rotation

    // Smooth interpolation
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor

    const animate = () => {
      if (!robotRef.current) return

      currentRotation.x = lerp(currentRotation.x, targetRotationX, 0.05)
      currentRotation.y = lerp(currentRotation.y, targetRotationY, 0.05)

      animationRef.current = requestAnimationFrame(animate)
    }

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
    animate()
  }, [isMobile])

  // Mouse event handlers
  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      const { innerWidth, innerHeight } = window
      if (!innerWidth || !innerHeight) return
      updateRobotTracking(clientX, clientY)
    }

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault()
      const touch = event.touches[0]
      if (!touch) return
      const { clientX, clientY } = touch
      const { innerWidth, innerHeight } = window
      if (!innerWidth || !innerHeight) return
      updateRobotTracking(clientX, clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [updateRobotTracking, isMobile])

  // Initialize Spline scene
  const onLoad = (splineApp: any) => {
    splineRef.current = splineApp
    setIsLoading(false)

    // Find robot object
    const findRobot = (obj: any): any => {
      if (!obj || typeof obj !== 'object') return null

      if (obj.name && (obj.name.toLowerCase().includes('robot') ||
                       obj.name.toLowerCase().includes('character') ||
                       obj.name.toLowerCase().includes('model'))) {
        return obj
      }
      if (obj.children && Array.isArray(obj.children)) {
        for (const child of obj.children) {
          const found = findRobot(child)
          if (found) return found
        }
      }
      return null
    }

    // Find robot object
    const robot = findRobot(splineApp.scene)
    if (robot) {
      robotRef.current = robot
    }
  }

  const onError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  // Loading animation component
  const LoadingAnimation = () => (
    <div className="text-center">
      <div className="relative mb-6">
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-20 h-20 border-2 border-purple-500/30 border-t-purple-500 rounded-full mx-auto"
        />

        {/* Inner pulsing core */}
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mx-auto my-auto"
        />

        {/* Center AI icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Loading text */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <p className="text-gray-300 font-medium mb-2">Loading Scene</p>
        <div className="flex items-center justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
              className="w-1 h-1 bg-purple-500 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  )

  // Error fallback component
  const ErrorFallback = () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
      <div className="text-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden"
        >
          <Bot className="w-10 h-10 text-white z-10" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </motion.div>
        <p className="text-gray-300 font-medium mb-2">Scene</p>
        <p className="text-gray-400 text-sm">Interactive experience available</p>
      </div>
    </div>
  )

  return (
    <div className={`relative ${className}`}>
      {!hasError ? (
        <>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm z-10">
              <LoadingAnimation />
            </div>
          )}
          <Spline
            scene={scene}
            onLoad={onLoad}
            onError={onError}
            style={{ width: '100%', height: '100%' }}
          />
        </>
      ) : (
        <ErrorFallback />
      )}
    </div>
  )
} 