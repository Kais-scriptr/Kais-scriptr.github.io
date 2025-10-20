"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto w-full">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-12 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-slate-400 text-lg">Let's create something amazing together</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
              <h3 className="text-slate-200 font-bold mb-2">Email</h3>
              <p className="text-cyan-400 font-mono">contact@t0xic.dev</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
              <h3 className="text-slate-200 font-bold mb-2">Phone</h3>
              <p className="text-purple-400 font-mono">+1 (000) 123-4567</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-slate-300 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 resize-none"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
