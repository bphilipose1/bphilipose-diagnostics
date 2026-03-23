import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { projectData } from '../data/projects';

const sentence = { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: 0.04 } } };
const letter = { hidden: { opacity: 0, display: "none" }, visible: { opacity: 1, display: "inline-block" } };

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 text-center font-mono"
      >
        <p className="text-slate-500 text-sm mb-4">ERROR_404: Project not found</p>
        <button
          onClick={() => navigate('/')}
          className="text-blue-400 hover:text-white transition-colors text-sm border border-blue-500/30 px-4 py-2 rounded"
        >
          ← Return to Home
        </button>
      </motion.div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-10 max-w-4xl mx-auto px-6"
    >
      <header className="mb-12">
        <motion.h2
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold mb-4 text-white font-mono"
        >
          {project.title.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>{char}</motion.span>
          ))}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-8 bg-blue-500 ml-1 translate-y-1"
          />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-2 flex-wrap"
        >
          <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded text-xs font-mono">
            {project.tag}
          </span>
          {project.stack.slice(0, 2).map(tech => (
            <span key={tech} className="bg-slate-800 border border-slate-700 text-slate-400 px-3 py-1 rounded text-xs font-mono">
              {tech}
            </span>
          ))}
        </motion.div>
      </header>

      <motion.aside
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-900/50 backdrop-blur-sm border-l-4 border-blue-500 p-8 mb-12 rounded-r-xl"
      >
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 font-mono">
          System_Metrics // Result_Analysis
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {project.metrics.map((m, idx) => (
            <div key={idx}>
              <p className="text-xs text-slate-500 font-mono mb-1">{m.label.toUpperCase()}</p>
              <p className="text-2xl font-mono text-white">{m.value}</p>
            </div>
          ))}
        </div>
      </motion.aside>

      <section className="mb-12">
        <h3 className="text-xl font-bold mb-4 text-blue-400 font-mono">_problem_constraint</h3>
        <p className="text-slate-300 leading-relaxed border-l-2 border-slate-800 pl-6">
          {project.constraint}
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-bold mb-4 text-blue-400 font-mono">_implementation</h3>
        <p className="text-slate-300 leading-relaxed border-l-2 border-slate-800 pl-6">
          {project.implementation}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map(tech => (
            <span key={tech} className="px-3 py-1 bg-blue-500/5 border border-blue-500/20 text-blue-400 text-xs font-mono rounded">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <div className="pt-8 border-t border-slate-900 flex justify-between items-center font-mono text-[9px] text-slate-600">
        <span>Status: 0x00_SUCCESS</span>
        <button onClick={() => navigate('/')} className="hover:text-blue-400 transition-colors">
          ← Back to Home
        </button>
      </div>
    </motion.article>
  );
}
