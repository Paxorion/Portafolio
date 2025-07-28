"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Bot, Zap, Globe } from "lucide-react"
import { SplineScene } from "@/components/ui/spline-scene"
import { ThemeToggle } from "@/components/ui/theme-toggle"

interface LandingPageProps {
  onEnter: () => void
}

export function LandingPage({ onEnter }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-black dark:bg-black light:bg-white relative overflow-hidden">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Full screen Spline scene - Full width for tracking */}
      <div className="absolute inset-0 w-full h-full">
        <SplineScene
          scene="https://prod.spline.design/nY2aVj9JXDQtno2Y/scene.splinecode"
          className="w-full h-full"
          enableControls={true}
        />
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Ambient light effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Left content - Overlay on left side only */}
      <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
        <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center bg-transparent pointer-events-none">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="pointer-events-none">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-neutral-200 to-neutral-400 mb-6 leading-tight">
              Max Navarro
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-500 bg-clip-text text-transparent mb-4">
              Interactive AI
            </h2>
            <p className="mt-4 text-neutral-300 max-w-lg text-lg leading-relaxed">
              AI Agent & Automation Specialist. Crafting immersive experiences that transform business processes with
              technical precision and innovative thinking.
            </p>
          </motion.div>

          {/* Enhanced Stats with original vibrant colors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-8 mt-8 mb-8 pointer-events-none"
          >
            <div className="text-center group">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                300+
              </motion.div>
              <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Queries/week</div>
            </div>
            <div className="text-center group">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                85%
              </motion.div>
              <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">AI Accuracy</div>
            </div>
            <div className="text-center group">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                40%
              </motion.div>
              <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">More Traffic</div>
            </div>
          </motion.div>

          {/* Enhanced Features with original vibrant styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-6 mb-8 pointer-events-none"
          >
            <motion.div
              className="flex items-center gap-2 text-sm text-gray-300 bg-purple-500/10 px-3 py-2 rounded-full border border-purple-500/20"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(168, 85, 247, 0.15)" }}
              transition={{ duration: 0.2 }}
            >
              <Bot className="w-4 h-4 text-purple-400" />
              AI Agents
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-sm text-gray-300 bg-blue-500/10 px-3 py-2 rounded-full border border-blue-500/20"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
              transition={{ duration: 0.2 }}
            >
              <Zap className="w-4 h-4 text-blue-400" />
              Automation
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-sm text-gray-300 bg-green-500/10 px-3 py-2 rounded-full border border-green-500/20"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(16, 185, 129, 0.15)" }}
              transition={{ duration: 0.2 }}
            >
              <Globe className="w-4 h-4 text-green-400" />
              Digital Marketing
            </motion.div>
          </motion.div>
        </div>
        
        {/* Right side - Empty for tracking */}
        <div className="flex-1 pointer-events-none" />
      </div>

      {/* Floating Glassmorphism Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-0 right-0 mx-auto w-fit z-50"
      >
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        >
          <Button
            onClick={onEnter}
            size="lg"
            className="group relative bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 border-2 border-white/20 overflow-hidden shadow-lg"
          >
            {/* Glassmorphism effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ 
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1
              }}
            />
            
            <span className="relative z-10">Get in Touch</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform text-white relative z-10" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Subtle corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border border-white/10 rounded-lg pointer-events-none opacity-30" />
      <div className="absolute top-8 right-8 w-16 h-16 border border-white/10 rounded-lg pointer-events-none opacity-30" />
    </div>
  )
} 