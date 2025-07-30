"use client"

import { motion } from "framer-motion"
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import ShineCard from "@/components/ui/shine-card"

export function Projects() {
  const projects = [
    {
      title: "AI Legal Agent",
      description:
        "Conversational agent specialized in Mexican criminal law using Agno and OpenAI. Handles 300+ weekly queries with 85% contextual accuracy.",
      tech: ["Agno", "OpenAI API", "RAG", "Contextual Segmentation"],
      status: "In Development",
      color: "from-purple-500 to-blue-600",
    },
    {
      title: "n8n Automation",
      description:
        "Automated workflows that reduce manual processing time by 30%. Integration with multiple APIs and systems.",
      tech: ["n8n", "API Integration", "Workflow Automation"],
      status: "Active",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Google Ads Campaigns",
      description:
        "SEM strategies that increased web traffic by 40% and lead generation by 25% in 3 months for small businesses.",
      tech: ["Google Ads", "SEM", "Analytics", "Conversion Optimization"],
      status: "Completed",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Enterprise Websites",
      description: "Development of responsive and SEO-optimized websites for local brands using React and Next.js.",
      tech: ["React", "Next.js", "SEO", "Responsive Design"],
      status: "Multiple Projects",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Unity & VR Development",
      description: "Game programming and VR experiences using Unity with C#. Basic 3D modeling with Maya.",
      tech: ["Unity", "C#", "Maya", "3D Modeling", "VR"],
      status: "Academic Projects",
      color: "from-pink-500 to-purple-600",
    },
    {
      title: "Semantic Search",
      description: "Implementation of semantic search systems using pgvector to improve query accuracy in databases.",
      tech: ["pgvector", "PostgreSQL", "Semantic Search", "Embeddings"],
      status: "Research",
      color: "from-indigo-500 to-purple-600",
    },
  ]

  return (
    <section id="projects" className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-neutral-200 to-neutral-400">
            My Projects
          </h2>
          <p className="text-lg md:text-xl bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-500 bg-clip-text text-transparent max-w-3xl mx-auto px-4">
            A collection of projects demonstrating my expertise in AI, automation, and web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ShineCard
                className="h-full p-4 md:p-6"
                speed={0.8}
                intensity={0.3}
                color="#8B5CF6"
                strokeColor="#A855F7"
                borderRadius="16px"
                background="rgba(31, 31, 31, 0.8)"
                backdropBlur="8px"
                border="1px solid rgba(139, 92, 246, 0.2)"
                direction="tl"
                typeCard="vertical"
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-purple-600/20 text-purple-300 rounded-full">
                      {project.status}
                    </span>
                  </div>

                  <p className="text-sm md:text-base text-neutral-300 mb-3 md:mb-4 leading-relaxed flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-1.5 md:px-2 py-0.5 md:py-1 bg-gray-700/50 text-neutral-300 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>


                </div>
              </ShineCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12 px-4"
        >
          <p className="text-sm md:text-base text-neutral-400 mb-4 md:mb-6">Interested in collaborating on a project?</p>
          <Button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
            className="group relative bg-white hover:bg-gray-50 text-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/30 border-2 border-white overflow-hidden"
          >
            {/* Animated background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 group-hover:rotate-12 transition-transform text-black relative z-10" />
            <span className="relative z-10">Contact Me</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-1.5 md:ml-2 group-hover:translate-x-1 transition-transform text-black relative z-10" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
