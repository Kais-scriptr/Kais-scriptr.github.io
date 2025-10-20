"use client"

import { useEffect, useRef, useState } from "react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
          </div>

          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              I'm T0xÏc, a passionate coder and creative developer dedicated to building exceptional digital
              experiences. With a deep love for technology and design, I transform ideas into elegant, functional
              solutions that push the boundaries of what's possible on the web.
            </p>
            <p>
              My journey in development has been driven by curiosity and a commitment to continuous learning. I
              specialize in creating performant, scalable applications that not only look stunning but also deliver real
              value to users. Every project is an opportunity to innovate and refine my craft.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              experimenting with creative coding concepts. I believe in the power of clean code, thoughtful design, and
              the endless possibilities of web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
