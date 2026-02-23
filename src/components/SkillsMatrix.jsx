import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: "Intelligence",
    skills: [
      { name: "PyTorch", level: 96 }, 
      { name: "TensorFlow", level: 88 },
      { name: "GNNs", level: 76 }, 
      { name: "Transformers", level: 90 },
      { name: "TFLite Quantization", level: 92 }, 
      { name: "LLMs / RAG", level: 90 }
    ]
  },
  {
    category: "Systems & Compute",
    skills: [
      { name: "C++", level: 98 }, 
      { name: "CUDA", level: 87 }, 
      { name: "NPU Optimization", level: 92 }, 
      { name: "Embedded Systems", level: 95 }, 
      { name: "SLURM + DDP", level: 95 }, 
      { name: "Linux", level: 97 }
    ]
  },
  {
    category: "Cloud & Data",
    skills: [
      { name: "AWS (SageMaker/EMR)", level: 83 },
      { name: "Apache Spark", level: 88 }, 
      { name: "MongoDB", level: 85 }, 
      { name: "ROS2 / NS-3", level: 86 },
      { name: "Docker/K8s", level: 90 },
      { name: "SQL/NoSQL", level: 85 }
    ]
  }
];

const electricityVariants = {
  flicker: {
    opacity: [0.9, 1, 0.8, 1, 0.9],
    filter: [
      "drop-shadow(0 0 4px #3b82f6) brightness(1)",
      "drop-shadow(0 0 12px #60a5fa) brightness(1.2)",
      "drop-shadow(0 0 6px #3b82f6) brightness(1)",
      "drop-shadow(0 0 15px #93c5fd) brightness(1.4)",
      "drop-shadow(0 0 4px #3b82f6) brightness(1)",
    ],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
};

export default function SkillsMatrix() {
  const getStatusLabel = (val) => {
    if (val >= 95) return "MAX_EFFICIENCY";
    if (val >= 90) return "OPTIMIZED";
    if (val >= 80) return "STABLE";
    return "DEPLOYED";
  };

  return (
    <div className="py-24 w-full text-white overflow-hidden">
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-2xl font-mono mb-12 text-white flex items-center gap-3"
      >
        <span className="text-blue-500">/</span>_system_capabilities
      </motion.h3>
      
      {/* Changed to items-stretch to ensure boxes are equal height */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {skillGroups.map((group, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col p-8 bg-slate-900/20 rounded-2xl border border-slate-800/50 hover:border-blue-500/30 transition-all group relative overflow-hidden backdrop-blur-sm"
          >
            <motion.h4 
              className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-10 flex justify-between relative z-10"
            >
              <span>{group.category}</span>
              <span className="text-slate-600 group-hover:text-blue-400 transition-colors">
                [ {group.skills.length} UNITS ]
              </span>
            </motion.h4>

            <div className="space-y-8 relative z-10 flex-grow">
              {group.skills.map((skill, j) => (
                <div key={j} className="space-y-3">
                  <div className="flex justify-between items-end text-[10px] font-mono">
                    <span className="text-slate-300 uppercase tracking-widest">{skill.name}</span>
                    <span className={`font-bold ${
                      skill.level >= 95 ? 'text-blue-300 animate-pulse' : 'text-slate-500'
                    }`}>
                      {getStatusLabel(skill.level)}
                    </span>
                  </div>
                  
                  <div className="flex gap-1 h-1.5 w-full">
                    {[...Array(10)].map((_, step) => {
                      const isActive = (step * 10) < skill.level;
                      const isMaxed = skill.level >= 95;
                      
                      return (
                        <motion.div 
                          key={step}
                          animate={isActive && isMaxed ? "flicker" : ""}
                          variants={electricityVariants}
                          className={`h-full flex-1 rounded-full transition-all duration-500 ${
                            isActive 
                              ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]' 
                              : 'bg-slate-800/50'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Background Decoration */}
            <div className="absolute -bottom-4 -right-2 text-7xl font-mono text-slate-800/10 pointer-events-none group-hover:text-blue-500/5 transition-colors">
              0{i + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
