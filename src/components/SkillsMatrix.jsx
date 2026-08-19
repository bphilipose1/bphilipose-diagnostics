import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: "ML & AI",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "GNNs", "Transformers", "LLMs", "RAG"]
  },
  {
    category: "Robotics & Systems",
    skills: ["Brax", "MJX", "MuJoCo Warp", "ROS 2", "C++", "Python", "CUDA", "SLURM", "Linux", "MPI"]
  },
  {
    category: "Software & Infrastructure",
    skills: ["Distributed Systems", "TCP/UDP", "Docker", "Kubernetes", "AWS", "Spark", "MySQL", "MongoDB", "Git", "CI/CD"]
  }
];

export default function SkillsMatrix() {
  return (
    <div className="py-24 w-full text-white overflow-hidden">
      <motion.h3 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="text-2xl font-mono mb-12 text-white">
        Skills
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col p-8 bg-slate-900/20 rounded-2xl border border-slate-800/50 hover:border-blue-500/30 transition-all"
          >
            <h4 className="text-blue-400 font-mono text-sm uppercase tracking-[0.16em] mb-6">{group.category}</h4>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-900/70 border border-slate-700 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
