import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { FloatingDock } from "@/components/ui/floating-dock"
import { BackToTop } from "@/components/ui/back-to-top"
import { User, Briefcase, Code, Mail, Github, Linkedin, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { BackgroundEffects } from "@/components/background-effects" // REMOVED THIS IMPORT

interface PortfolioProps {
  onBack?: () => void;
}

export function Portfolio({ onBack }: PortfolioProps) {
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
      {/* Back to Landing Page Button */}
      {onBack && (
        <div className="fixed top-4 right-4 z-50">
          <Button
            onClick={onBack}
            variant="outline"
            size="sm"
            className="bg-black/20 backdrop-blur-md border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Landing
          </Button>
        </div>
      )}
      
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
      
      {/* Back to Top Button */}
      <BackToTop />
    </main>
  )
}
