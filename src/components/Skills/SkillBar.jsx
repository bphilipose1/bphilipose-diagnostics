import React from 'react'
import { motion } from 'framer-motion'

const electricityVariants = {
  flicker: {
    opacity: [0.9, 1, 0.8, 1, 0.9],
    filter: [
      'drop-shadow(0 0 4px #3b82f6) brightness(1)',
      'drop-shadow(0 0 12px #60a5fa) brightness(1.2)',
      'drop-shadow(0 0 6px #3b82f6) brightness(1)',
      'drop-shadow(0 0 15px #93c5fd) brightness(1.4)',
      'drop-shadow(0 0 4px #3b82f6) brightness(1)'
    ],
    transition: { duration: 0.2, repeat: Infinity, repeatType: 'mirror' }
  }
}

export default function SkillBar({ level }) {
  return (
    <div className="flex gap-1 h-1.5 w-full">
      {Array.from({ length: 10 }).map((_, step) => {
        const isActive = (step * 10) < level
        const isMaxed = level >= 95

        return (
          <motion.div
            key={step}
            animate={isActive && isMaxed ? 'flicker' : undefined}
            variants={electricityVariants}
            className={`h-full flex-1 rounded-full transition-all duration-500 ${
              isActive
                ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]'
                : 'bg-slate-800/50'
            }`}
          />
        )
      })}
    </div>
  )
}
