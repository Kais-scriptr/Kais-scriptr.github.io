"use client"

import { useEffect, useRef, useState } from "react"

export default function KnowledgeSection() {
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
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Knowledge
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full" />
          </div>

          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              My expertise spans across modern web technologies and creative coding practices. I have extensive
              experience building scalable applications, optimizing performance, and implementing best practices in
              software development. My focus is on creating solutions that are not just functional, but also elegant and
              maintainable.
            </p>
            <p>
              I specialize in crafting creative, optimized scripts and websites that deliver exceptional user
              experiences. Whether it's frontend development, backend optimization, or full-stack solutions, I approach
              every project with a commitment to excellence and innovation. I'm constantly exploring new frameworks,
              tools, and methodologies to stay at the forefront of web development.
            </p>
            <p>
              My coding philosophy centers on clean architecture, performance optimization, and user-centric design. I
              believe in writing code that's not only correct but also readable, maintainable, and scalable. Every line
              of code is an opportunity to create something meaningful and impactful.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-3xl mb-3 text-cyan-400">⚡</div>
              <h3 className="text-xl font-bold text-slate-200 mb-2">Performance</h3>
              <p className="text-slate-400 text-sm">
                Optimized code and efficient algorithms for lightning-fast applications
              </p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <div className="text-3xl mb-3 text-purple-400">🎨</div>
              <h3 className="text-xl font-bold text-slate-200 mb-2">Creativity</h3>
              <p className="text-slate-400 text-sm">Innovative solutions that blend aesthetics with functionality</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-300">
              <div className="text-3xl mb-3 text-pink-400">🔧</div>
              <h3 className="text-xl font-bold text-slate-200 mb-2">Expertise</h3>
              <p className="text-slate-400 text-sm">Deep knowledge across multiple technologies and frameworks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
