import React from 'react'
import SkillBar from './SkillBar'
import { motion } from 'framer-motion'

const SkillGroup = ({ group, index }) => {
  const getStatusLabel = (val) => {
    if (val >= 95) return 'MAX_EFFICIENCY'
    if (val >= 90) return 'OPTIMIZED'
    if (val >= 80) return 'STABLE'
    return 'DEPLOYED'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col p-8 bg-slate-900/20 rounded-2xl border border-slate-800/50 hover:border-blue-500/30 transition-all group relative overflow-hidden backdrop-blur-sm"
    >
      <motion.h4 className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-10 flex justify-between relative z-10">
        <span>{group.category}</span>
        <span className="text-slate-600 group-hover:text-blue-400 transition-colors">[ {group.skills.length} UNITS ]</span>
      </motion.h4>

      <div className="space-y-8 relative z-10 flex-grow">
        {group.skills.map((skill) => (
          <div key={skill.name} className="space-y-3">
            <div className="flex justify-between items-end text-[10px] font-mono">
              <span className="text-slate-300 uppercase tracking-widest">{skill.name}</span>
              <span className={`font-bold ${skill.level >= 95 ? 'text-blue-300 animate-pulse' : 'text-slate-500'}`}>
                {getStatusLabel(skill.level)}
              </span>
            </div>

            <SkillBar level={skill.level} />
          </div>
        ))}
      </div>

      <div className="absolute -bottom-4 -right-2 text-7xl font-mono text-slate-800/10 pointer-events-none group-hover:text-blue-500/5 transition-colors">
        0{index + 1}
      </div>
    </motion.div>
  )
}

export default React.memo(SkillGroup)
