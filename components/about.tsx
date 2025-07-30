"use client"

import { motion } from "motion/react"
import { Bot, Zap, Globe, Users } from "lucide-react"
import GlowingEffectDemo from "@/components/glowing-effect-demo"
import { MorphingAnimation } from "./ui/morphing-animation"

export function About() {
  const features = [
    {
      icon: Bot,
      title: "AI Agent Development",
      description: "Specialized in conversational agents with Agno and OpenAI API",
    },
    {
      icon: Zap,
      title: "n8n Automation",
      description: "Workflows that reduce manual processing time by 30%",
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Google Ads campaigns that increase web traffic by 40%",
    },
    {
      icon: Users,
      title: "Web Development",
      description: "Responsive websites with React, Next.js, and SEO optimization",
    },
  ]

  return (
    <section id="about" className="pt-20 md:pt-32 pb-12 md:pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-neutral-200 to-neutral-400 px-6 md:px-8 leading-tight">
            Max Navarro
          </h2>
          <p className="text-lg md:text-xl bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-500 bg-clip-text text-transparent max-w-3xl mx-auto mb-3 md:mb-4 px-4">
            Technical Specialist in Virtual Environments and Digital Business
          </p>
          <p className="text-base md:text-lg text-neutral-400 max-w-3xl mx-auto px-4">
            Technical specialist in AI-driven automation and digital systems. I combine technical precision with
            creative thinking to deliver scalable and high-impact digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <MorphingAnimation 
                intensity="medium" 
                duration="8s" 
                className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center shadow-2xl border border-gray-700"
              >
                <img 
                  src="/images/pintura.png" 
                  alt="Oxidized Block" 
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
                  onError={(e) => {
                    // Fallback al emoji si la imagen no carga
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="text-4xl md:text-6xl hidden">🚀</div>
              </MorphingAnimation>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6 px-4 md:px-0"
          >
            <h3 className="text-xl md:text-2xl font-bold text-neutral-200">My Experience</h3>
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
              I have built intelligent agents that handle over 300 legal queries per week with 85% contextual accuracy.
              My n8n automation workflows have reduced manual processing time by 30%.
            </p>
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
              My Google Ads campaigns have increased web traffic by 40% and generated 25% more leads for small
              businesses in 3 months. I specialize in creating solutions that align digital strategies with business
              objectives.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
              <div className="text-center p-3 md:p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="text-xl md:text-2xl font-bold text-purple-400">300+</div>
                <div className="text-xs md:text-sm text-neutral-400">Queries/week</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="text-xl md:text-2xl font-bold text-blue-400">85%</div>
                <div className="text-xs md:text-sm text-neutral-400">AI Accuracy</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Glowing Effect Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-neutral-200 px-4">My Specialties</h3>
          <GlowingEffectDemo />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-4 md:px-0">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 md:p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-br from-purple-500 via-blue-600 to-green-500 flex items-center justify-center">
                <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-cyan-300" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-2 text-white">{feature.title}</h4>
              <p className="text-sm md:text-base text-neutral-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
