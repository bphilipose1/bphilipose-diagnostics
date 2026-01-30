import React from 'react';
import { motion } from 'framer-motion';
import EducationBIOS from '../components/EducationBIOS';
import SkillsMatrix from '../components/SkillsMatrix';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-mono text-white mb-2 underline decoration-blue-500 underline-offset-8">
          _system_diagnostics
        </h2>
        <p className="text-slate-400 font-mono text-sm mb-12 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Execution of academic and technical profiling... [DONE]
        </p>
      </motion.div>

      <section className="space-y-16">
        {/* The Credentials */}
        <motion.div variants={itemVariants}>
          <EducationBIOS />
        </motion.div>

        {/* The Toolset */}
        <motion.div variants={itemVariants}>
          <SkillsMatrix />
        </motion.div>

        {/* The Personal Specs / Bio */}
        <motion.div 
          variants={itemVariants}
          className="p-8 bg-slate-900/30 border border-slate-800 rounded-xl font-mono relative overflow-hidden group"
        >
          {/* Decorative Corner Accent */}
          <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
            <span className="text-[10px] text-blue-500">REV_04.2</span>
          </div>

          <h4 className="text-blue-400 text-xs uppercase mb-6 tracking-[0.3em] font-bold">
            // Developer_Bio
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 border-b border-slate-800 pb-8 text-[11px]">
             <div>
               <p className="text-slate-500 mb-1">USER_ROLE</p>
               <p className="text-slate-200">ML_ALGO_ENGINEER</p>
             </div>
             <div>
               <p className="text-slate-500 mb-1">INTERESTS</p>
               <p className="text-slate-200">3D_GEN // GNNs</p>
             </div>
             <div>
               <p className="text-slate-500 mb-1">ENVIRONMENT</p>
               <p className="text-slate-200">LINUX // CUDA</p>
             </div>
             <div>
               <p className="text-slate-500 mb-1">OPTIMIZATION</p>
               <p className="text-slate-200">LATENCY_MINIMALISM</p>
             </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
            I am a Software and Algorithms Engineer focused on the intersection of Machine Learning and Systems Programming. 
            My work spans from high-level Graph Neural Networks to low-level C++ optimization for embedded hardware. 
            I thrive in resource-constrained environments where every clock cycle and byte of memory matters.
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
}