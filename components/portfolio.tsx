import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { FloatingDock } from "@/components/ui/floating-dock"
import { User, Briefcase, Code, Mail, Github, Linkedin } from "lucide-react"
// import { BackgroundEffects } from "@/components/background-effects" // REMOVED THIS IMPORT

export function Portfolio() {
  const dockItems = [
    {
      title: "About Me",
      icon: <User className="h-full w-full text-white" />,
      href: "#about",
    },
    {
      title: "Projects",
      icon: <Briefcase className="h-full w-full text-white" />,
      href: "#projects",
    },
    {
      title: "Skills",
      icon: <Code className="h-full w-full text-white" />,
      href: "#skills",
    },
    {
      title: "Contact",
      icon: <Mail className="h-full w-full text-white" />,
      href: "#contact",
    },
    {
      title: "GitHub",
      icon: <Github className="h-full w-full text-white" />,
      href: "https://github.com/Paxorion",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-full w-full text-white" />,
      href: "https://www.linkedin.com/in/maximiliano-navarro-ochoa-067128278",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white relative">
      {" "}
      {/* Removed overflow-x-hidden */}
      {/* Background Effects - REMOVED FROM HERE */}
      {/* Content sections */}
      <div className="relative z-10 overflow-y-hidden">
        {" "}
        {/* Added overflow-y-hidden */}
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
      {/* Floating Dock */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <FloatingDock items={dockItems} />
      </div>
    </main>
  )
}
