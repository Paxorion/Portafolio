"use client"

import { motion } from "motion/react"
import { Mail, Phone, MapPin } from "lucide-react"
import ProfileCard from "./ProfileCard" // Import the new ProfileCard component

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "maxnavar@gmail.com",
      href: "mailto:maxnavar@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "614-229-26-22",
      href: "tel:+526142292622",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Chihuahua, Mexico",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-neutral-200 to-neutral-400 px-6 md:px-8 leading-tight">
            Contact
          </h2>
          <p className="text-lg md:text-xl bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-500 bg-clip-text text-transparent max-w-3xl mx-auto px-4">
            Do you have an AI or automation project in mind? I'd love to hear about it and see how I can help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 px-4 lg:px-0"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-neutral-200">Contact Information</h3>
              <p className="text-sm md:text-base text-neutral-300 mb-6 md:mb-8">
                Specialized in AI agents, n8n automation, and web development. Ready to collaborate on your next digital
                project.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                    <info.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-neutral-200">{info.title}</h4>
                    <p className="text-sm md:text-base text-neutral-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Profile Card instead of Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center" // Added flexbox for centering the card
          >
            <ProfileCard
              name="Max Navarro"
              title="AI Technical Specialist"
              handle="maxnavar"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/images/profile-avatar.png"
              miniAvatarUrl="/images/profile-avatar.png"
              showUserInfo={true}
              enableTilt={true}
              iconUrl="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><text x='10' y='100' font-size='100' fill='black'>&lt;/&gt;</text></svg>"
              onContactClick={() => console.log("Contact clicked")}
              className="w-full max-w-sm"
            />
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-8 border-t border-gray-700"
        >
          <p className="text-neutral-400">© 2024 Max Navarro. AI & Automation Specialist</p>
        </motion.div>
      </div>
    </section>
  )
}
