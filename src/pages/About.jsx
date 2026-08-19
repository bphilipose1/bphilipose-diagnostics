import React from 'react';
import { motion } from 'framer-motion';
import EducationBIOS from '../components/EducationBIOS';
import SkillsMatrix from '../components/SkillsMatrix';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <div>
        <h2 className="text-3xl font-mono text-white mb-2 underline decoration-blue-500 underline-offset-8">
          _about
        </h2>
        <p className="text-slate-400 font-mono text-sm mb-12 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Professional profile // public overview
        </p>
      </div>

      <section className="space-y-16">
        <EducationBIOS />
        <SkillsMatrix />

        <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-xl font-mono">
          <h4 className="text-blue-400 text-xs uppercase mb-6 tracking-[0.3em] font-bold">
            // Professional_Summary
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-b border-slate-800 pb-8 text-[11px]">
            <div><p className="text-slate-500 mb-1">ROLE</p><p className="text-slate-200">SOFTWARE & ML ENGINEER</p></div>
            <div><p className="text-slate-500 mb-1">FOCUS</p><p className="text-slate-200">SYSTEMS // ML</p></div>
            <div><p className="text-slate-500 mb-1">APPROACH</p><p className="text-slate-200">PRACTICAL // RESPONSIBLE</p></div>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
            I build practical software and machine-learning systems, drawing on experience in research, systems engineering, and collaborative development.
            This site intentionally shares only public, high-level information; employer, project, and implementation details are omitted.
          </p>
        </div>
      </section>
    </motion.div>
  );
}
