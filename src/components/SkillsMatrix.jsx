import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  { category: "Machine Learning", skills: ["Machine Learning", "Computer Vision", "Deep Learning", "Data Analysis"] },
  { category: "Systems Engineering", skills: ["C++", "Python", "Performance Engineering", "Linux", "Parallel Computing"] },
  { category: "Software Development", skills: ["Distributed Systems", "Web Development", "Databases", "Cloud Fundamentals"] }
];

export default function SkillsMatrix() {
  return (
    <div className="py-24 w-full text-white overflow-hidden">
      <motion.h3 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="text-2xl font-mono mb-12 text-white flex items-center gap-3">
        <span className="text-blue-500">/</span>_system_capabilities
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col p-8 bg-slate-900/20 rounded-2xl border border-slate-800/50 hover:border-blue-500/30 transition-all group relative overflow-hidden backdrop-blur-sm"
          >
            <div className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-10 flex justify-between relative z-10">
              <span>{group.category}</span>
              <span className="text-slate-600 group-hover:text-blue-400 transition-colors">[ {group.skills.length} AREAS ]</span>
            </div>
            <div className="space-y-4 relative z-10 flex-grow">
              {group.skills.map((skill) => (
                <div key={skill} className="border-l border-slate-700 pl-3 text-[11px] font-mono text-slate-300 uppercase tracking-widest">
                  {skill}
                </div>
              ))}
            </div>
            <div className="absolute -bottom-4 -right-2 text-7xl font-mono text-slate-800/10 pointer-events-none group-hover:text-blue-500/5 transition-colors">0{i + 1}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
