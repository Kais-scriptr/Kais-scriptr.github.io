"use client"

import { useEffect, useRef, useState } from "react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import KnowledgeSection from "@/components/knowledge-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
        setScrollProgress(scrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full overflow-x-hidden bg-background">
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <KnowledgeSection />
      <ContactSection />
    </div>
  )
}
