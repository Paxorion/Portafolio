import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { BackgroundEffects } from "@/components/background-effects" // Import BackgroundEffects

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Max Navarro - Interactive AI Portfolio",
  description: "A modern and interactive portfolio that combines elegant design with cutting-edge technology, including immersive 3D experiences and motion tracking.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
