import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectPage() {
  // Animation variants for the title string
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, // Speed of "typing"
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline-block" },
  };

  const titleText = "PanoHead Inversion";

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-10 max-w-4xl mx-auto px-6"
    >
      <header className="mb-12">
        {/* Typewriter Title */}
        <motion.h2 
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold mb-4 text-white font-mono"
        >
          {titleText.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-8 bg-blue-500 ml-1 translate-y-1"
          />
        </motion.h2>

        {/* Staggered Tags */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-2"
        >
          <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded text-xs font-mono">
            PyTorch
          </span>
          <span className="bg-slate-800 border border-slate-700 text-slate-400 px-3 py-1 rounded text-xs font-mono">
            3D Synthesis
          </span>
        </motion.div>
      </header>

      {/* ABSTRACT / PROBLEM */}
      <section className="mb-12">
        <h3 className="text-xl font-bold mb-4 text-blue-400 font-mono">_project_abstract</h3>
        <p className="text-slate-300 leading-relaxed">
          The challenge was performing high-fidelity 3D head synthesis from a single 2D image. 
          By utilizing Perceptual Triplet Inversion (PTI), we optimized the latent code $w$ 
          to minimize the loss function:
        </p>
        
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="bg-slate-900 border border-slate-800 p-6 rounded-xl my-6 font-mono text-center"
        >
          <span className="text-blue-400 text-lg">
            $$L_{total} = \lambda_{perc}L_{lpips} + \lambda_{mse}L_{mse}$$
          </span>
        </motion.div>
      </section>

      {/* METRICS SECTION */}
      <motion.aside 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-900/50 backdrop-blur-sm border-l-4 border-blue-500 p-8 mb-12 rounded-r-xl"
      >
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 font-mono">
          System_Metrics // Result_Analysis
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs text-slate-500 font-mono mb-1">FID_SCORE</p>
            <p className="text-3xl font-mono text-white">14.2</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 font-mono mb-1">INFERENCE_TIME</p>
            <p className="text-3xl font-mono text-blue-400">120<span className="text-lg">ms</span></p>
          </div>
        </div>
      </motion.aside>

      {/* Visual Workflow Diagram */}
      
    </motion.article>
  );
}