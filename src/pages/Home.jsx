import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ExperienceTimeline from '../components/Experience/ExperienceTimeline'; 
import SkillsMatrix from '../components/SkillsMatrix';
import EducationBIOS from '../components/EducationBIOS';
import HeadRender from '../components/HeadRender';
import ProjectGrid from '../components/ProjectGrid';
import resumeFile from '../assets/Benjamin_Philipose_Resume.pdf';
import Navbar from '../components/Navbar';

export default function Home() {
  const { scrollY } = useScroll();
  
  // Parallax background effect
  const backgroundY = useTransform(scrollY, [0, 2000], [0, -200]);

  // Framer Motion Variants for the "About" section components
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Improved smooth scroll helper
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for the sticky navbar
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
      {/* 00. NAV - Pass the scroll function if needed, or use IDs in Navbar.tsx */}
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
              Algorithms Engineer at Meta specializing in model training and deployment for real-time computer vision on Meta Raybans.
            </p>
            
            <div className="flex gap-4 font-mono text-sm">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all shadow-lg shadow-blue-500/20 active:scale-95"
              >
                _initialize_demo
              </button>
              
              <a 
                href={resumeFile}
                download="Benjamin_Philipose_Resume.pdf"
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

        {/* 02. SYSTEM DIAGNOSTICS (Integrated About Section) */}
        <section id="about" className="py-20 border-t border-slate-900/50">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* The Credentials */}
              <motion.div variants={itemVariants}>
                <EducationBIOS />
              </motion.div>

              {/* The Personal Specs / Bio Card */}
              <motion.div 
                variants={itemVariants}
                className="p-8 bg-slate-900/30 border border-slate-800 rounded-xl font-mono relative overflow-hidden group h-fit"
              >
                <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] text-blue-500">REV_04.2</span>
                </div>

                <h4 className="text-blue-400 text-xs uppercase mb-6 tracking-[0.3em] font-bold">
                  // Developer_Bio
                </h4>

                // Developer_Bio Component
                <div className="grid grid-cols-2 gap-4 mb-8 border-b border-slate-800 pb-8 text-[11px]">
                  <div>
                    <p className="text-slate-500 mb-1">USER_ROLE</p>
                    <p className="text-slate-200">ALGORITHMS_ENGINEER_V</p> 
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1">CORE_STACK</p>
                    <p className="text-slate-200">C++ // CUDA // PYTORCH</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1">SPECIALIZATION</p>
                    <p className="text-slate-200">EMBEDDED_CV</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1">EDUCATION</p>
                    <p className="text-slate-200">BS/MS_ACCEL [4.0 GPA]</p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
  I specialize in the deployment of complex AI research into production-grade, 
  resource-constrained environments. Currently at Meta, I architect high-performance 
  inference pipelines for real-time computer vision—porting and optimizing 
  architectures like ResNet and EfficientNet from Python to C++ to deliver an 
  87% reduction in end-to-end latency. My work focuses on maximizing efficiency 
  at the hardware level, from memory-aligned image processing primitives to 
  cross-platform validation.
</p>

              </motion.div>
            </div>
          </motion.div>
        </section>

        
        {/* 05. PROFESSIONAL TIMELINE */}
        <section id="experience" className="py-20 border-t border-slate-900/50">
          <ExperienceTimeline />
        </section>
        
        {/* 03. FEATURED PROJECTS */}
        <section id="projects" className="py-20 border-t border-slate-900/50">
          <div className="mb-10">
            <h2 className="text-3xl font-mono text-white mb-2">_project_archive</h2>
            <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Selected engineering outputs</p>
          </div>
          <ProjectGrid />
        </section>


        {/* 04. SYSTEM SKILLS MATRIX */}
        <section id="skills" className="py-20 border-t border-slate-900/50">
          <SkillsMatrix />
        </section>

        {/* 06. CONTACT TERMINAL */}
        <footer className="py-20 border-t border-slate-900 text-center relative z-20">
          <p className="text-slate-500 font-mono text-xs mb-4">TERMINAL_SESSION_END: 2026</p>
          <div className="flex justify-center gap-8 font-mono text-sm">
            <a href="mailto:philiposebenjamin@gmail.com" className="text-blue-400 hover:text-white transition-colors underline decoration-blue-500/30 underline-offset-4">email</a>
            <a href="https://linkedin.com/in/bphilipose" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-white transition-colors underline decoration-blue-500/30 underline-offset-4">linkedin</a>
            <a href="https://github.com/bphilipose1" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-white transition-colors underline decoration-blue-500/30 underline-offset-4">github</a>
          </div>
        </footer>
      </div>
    </div>
  );
}