"use client"

import { useEffect, useState } from "react"

interface SkillBarProps {
  skill: { name: string; percentage: number }
  isVisible: boolean
}

export default function SkillBar({ skill, isVisible }: SkillBarProps) {
  const [fillPercentage, setFillPercentage] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setFillPercentage(skill.percentage)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isVisible, skill.percentage])

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-slate-300 font-medium text-lg">{skill.name}</span>
        <span className="text-cyan-400 font-bold text-lg">{fillPercentage}%</span>
      </div>
      <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${fillPercentage}%` }}
        />
      </div>
    </div>
  )
}
