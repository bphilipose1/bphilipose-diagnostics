import React from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import ExperienceTimeline from '../components/Experience/ExperienceTimeline'; 
import SkillsMatrix from '../components/SkillsMatrix';
import EducationBIOS from '../components/EducationBIOS';
import HeadRender from '../components/HeadRender';
import resumeFile from '../assets/Benjamin_Philipose_Resume.pdf';
import Navbar from '../components/Navbar';

export default function Home() {
  const { scrollY } = useScroll();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowX = useSpring(pointerX, { stiffness: 180, damping: 28 });
  const glowY = useSpring(pointerY, { stiffness: 180, damping: 28 });
  
  // Subtle background parallax
  const backgroundY = useTransform(scrollY, [0, 2000], [0, -200]);

  const bioStats = [
    { label: "USER_ROLE", value: "ALGORITHMS_ENGINEER_V" },
    { label: "INTERESTS", value: "EMBEDDED_AI // GNNs" },
    { label: "ENVIRONMENT", value: "LINUX // C++ // CUDA" },
    { label: "OPTIMIZATION", value: "ML_LATENCY // PERFORMANCE" },
  ];

  // Helper function for the Hero CTA to scroll to projects
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-x-hidden">
      {/* 00. FIXED SMART NAVBAR */}
      <Navbar />
      
      {/* 🌌 GLOBAL PARALLAX BACKGROUND GRID */}
      <motion.div 
        style={{ 
          y: backgroundY,
          backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }}
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20"> 
        
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
              {/* PRIMARY CTA: Initialize Demo */}
              <button 
                onClick={scrollToProjects}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all shadow-lg shadow-blue-500/20 active:scale-95"
              >
                _initialize_demo
              </button>
              
              {/* SECONDARY CTA: Resume */}
              <a 
                href={resumeFile}
                download="Benjamin_Philipose_Resume.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-slate-700 hover:border-slate-500 text-slate-300 px-6 py-3 rounded-lg transition-all text-center font-mono"
              >
                _get_resume.pdf
              </a>
            </div>
          </div>
          
          <div className="aspect-square bg-slate-900 rounded-3xl border border-slate-800 flex items-center justify-center overflow-hidden relative group">
             <HeadRender />
          </div>
        </motion.section>

        {/* 02. DEVELOPER BIO */}
        <section id="projects" className="py-10">
          <div
            className="relative p-8 md:p-10 bg-slate-950/70 border border-blue-500/20 rounded-2xl font-mono overflow-hidden"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              pointerX.set(e.clientX - rect.left);
              pointerY.set(e.clientY - rect.top);
            }}
          >
            <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_45%)]" />
            <motion.div
              className="absolute pointer-events-none w-52 h-52 rounded-full bg-blue-400/10 blur-3xl"
              style={{ x: glowX, y: glowY, translateX: "-50%", translateY: "-50%" }}
            />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full border border-blue-500/10" />
            <div className="absolute -bottom-28 -left-20 w-72 h-72 rounded-full border border-slate-700/20" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-blue-400 text-xs uppercase tracking-[0.3em] font-bold">// Developer_Bio</h4>
                <span className="text-[10px] text-blue-500/70 border border-blue-500/20 px-2 py-1 rounded">REV_05.0</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-[11px]">
                {bioStats.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -3, borderColor: "rgba(59,130,246,0.45)" }}
                    transition={{ type: "spring", stiffness: 280, damping: 18 }}
                    className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
                  >
                    <p className="text-slate-500 mb-1">{item.label}</p>
                    <p className="text-slate-200">{item.value}</p>
                  </motion.div>
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed max-w-3xl border-l-2 border-blue-500/40 pl-6">
                I am an Algorithms Engineer focused on building practical machine learning systems from research to deployment.
                My work spans model development, training, and optimization across PyTorch, C++, and embedded inference pipelines.
                I enjoy solving applied ML problems where model quality and system performance both matter.
              </p>
            </div>
          </div>
        </section>

        {/* 03. PROFESSIONAL TIMELINE */}
        <section id="experience" className="py-20">
          <ExperienceTimeline />
        </section>

        {/* 04. EDUCATION BIOS */}
        <section className="py-20">
          <EducationBIOS />
        </section>

        {/* 05. SYSTEM SKILLS MATRIX */}
        <section id="skills" className="py-20">
          <SkillsMatrix />
        </section>

        {/* 07. CONTACT TERMINAL */}
        <footer className="py-20 border-t border-slate-900 text-center relative z-20">
          <p className="text-slate-500 font-mono text-xs mb-4">TERMINAL_SESSION_END: 2026</p>
          <div className="flex justify-center gap-8 font-mono text-sm">
            <a href="mailto:philiposebenjamin@gmail.com" className="text-blue-400 hover:text-white transition-colors underline decoration-blue-500/30 underline-offset-4">email</a>
            <a href="https://linkedin.com/in/bphilipose" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors underline decoration-blue-500/30 underline-offset-4">linkedin</a>
            <a href="https://github.com/bphilipose1" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors underline decoration-blue-500/30 underline-offset-4">github</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
