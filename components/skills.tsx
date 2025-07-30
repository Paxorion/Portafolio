"use client"

import { motion } from "motion/react"

export function Skills() {
  const skillCategories = [
    {
      title: "AI & Automation",
      skills: [
        { name: "Agno (AI Agents)", level: 75 },
        { name: "OpenAI API", level: 70 },
        { name: "n8n Workflows", level: 68 },
        { name: "Prompt Engineering", level: 72 },
        { name: "RAG & Semantic Search", level: 65 },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "React & Next.js", level: 67 },
        { name: "TypeScript", level: 62 },
        { name: "JavaScript", level: 65 },
        { name: "C# (Unity)", level: 60 },
        { name: "Python", level: 58 },
      ],
    },
    {
      title: "Marketing & Tools",
      skills: [
        { name: "Google Ads", level: 70 },
        { name: "SEO", level: 65 },
        { name: "Git", level: 68 },
        { name: "Unity & Maya", level: 55 },
        { name: "pgvector & SQL", level: 50 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-neutral-200 to-neutral-400">
            Technical Skills
          </h2>
          <p className="text-lg md:text-xl bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-500 bg-clip-text text-transparent max-w-3xl mx-auto px-4">
            Specialized technologies and tools in AI, automation, and web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-neutral-200">{category.title}</h3>
              <div className="space-y-4 md:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm md:text-base text-neutral-300 font-medium">{skill.name}</span>
                      <span className="text-xs md:text-sm text-neutral-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5 md:h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-purple-500 to-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-neutral-200">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto px-4">
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-xl font-semibold text-neutral-200">Spanish</div>
              <div className="text-purple-400">Native</div>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-xl font-semibold text-neutral-200">English</div>
              <div className="text-blue-400">B2</div>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-xl font-semibold text-neutral-200">German</div>
              <div className="text-green-400">A1</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
