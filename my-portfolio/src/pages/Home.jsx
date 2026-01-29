import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ExperienceTimeline from '../components/ExperienceTimeline'; 
import SkillsMatrix from '../components/SkillsMatrix';
import EducationBIOS from '../components/EducationBIOS';
import HeadRender from '../components/HeadRender';
import ProjectGrid from '../components/ProjectGrid';
import resumeFile from '../assets/Benjamin_Philipose_Resume.pdf';

export default function Home() {
  const { scrollY } = useScroll();
  
  // Subtle background parallax: The grid moves slower than the content
  const backgroundY = useTransform(scrollY, [0, 2000], [0, -200]);

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-x-hidden">
      
      {/* 🌌 GLOBAL PARALLAX BACKGROUND GRID */}
      <motion.div 
        style={{ 
          y: backgroundY,
          backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }}
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* 01. HERO SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4"
            >
              System_Status: Operational
            </motion.div>
            <h2 className="text-5xl font-bold mb-4 text-white leading-tight">
              Algorithms & <br/>
              <span className="text-blue-500">ML Engineer</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
              Architecting 3D generative pipelines and optimizing embedded computer vision for resource-constrained hardware.
            </p>
            <div className="flex gap-4 font-mono text-sm">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all shadow-lg shadow-blue-500/20">
                _view_research
              </button>
              <a 
                href={resumeFile}
                download="Benjamin_Philipose_Resume.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-slate-700 hover:border-slate-500 text-slate-300 px-6 py-3 rounded-lg transition-all text-center font-mono text-sm"
              >
                _get_resume.pdf
              </a>
            </div>
          </div>
          
          <div className="aspect-square bg-slate-900 rounded-3xl border border-slate-800 flex items-center justify-center overflow-hidden relative group">
             <HeadRender />
          </div>
        </motion.section>

        {/* 02. FEATURED PROJECTS (Abstracted Grid) */}
        <ProjectGrid />

        {/* 03. PROFESSIONAL TIMELINE */}
        <section className="py-12">
          <ExperienceTimeline />
        </section>

        {/* 04. EDUCATION BIOS */}
        <section className="py-12">
          <EducationBIOS />
        </section>

        {/* 05. SYSTEM SKILLS MATRIX */}
        <section className="py-12">
          <SkillsMatrix />
        </section>

        {/* 06. CONTACT TERMINAL */}
        <footer className="py-20 border-t border-slate-900 text-center relative z-20">
          <p className="text-slate-500 font-mono text-xs mb-4">TERMINAL_SESSION_END: 2026</p>
          <div className="flex justify-center gap-8 font-mono text-sm">
            <a href="mailto:philiposebenjamin@gmail.com" className="text-blue-400 hover:text-white transition-colors underline decoration-blue-500/30 underline-offset-4">email</a>
            <a href="https://linkedin.com/in/bphilipose" target="_blank" className="text-blue-400 hover:text-white transition-colors underline decoration-blue-500/30 underline-offset-4">linkedin</a>
            <a href="https://github.com/bphilipose1" target="_blank" className="text-blue-400 hover:text-white transition-colors underline decoration-blue-500/30 underline-offset-4">github</a>
          </div>
        </footer>
      </div>
    </div>
  );
}