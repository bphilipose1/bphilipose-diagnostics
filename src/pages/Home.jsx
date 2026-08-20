import React from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import ExperienceTimeline from '../components/Experience/ExperienceTimeline';
import SkillsMatrix from '../components/SkillsMatrix';
import EducationBIOS from '../components/EducationBIOS';
import HeadRender from '../components/HeadRender';
import ProjectGrid from '../components/ProjectGrid';
import Navbar from '../components/Navbar';
import { scrollToSection } from '../utils/scroll';

export default function Home() {
  const { scrollY } = useScroll();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowX = useSpring(pointerX, { stiffness: 180, damping: 28 });
  const glowY = useSpring(pointerY, { stiffness: 180, damping: 28 });
  const backgroundY = useTransform(scrollY, [0, 2000], [0, -200]);

  const focusAreas = [
    { label: "Focus", value: "ML Systems & Robotics" },
    { label: "Strengths", value: "Learning, Control, Performance" },
    { label: "Core tools", value: "Python, C++, PyTorch, CUDA" },
    { label: "Experience", value: "Research to Deployment" },
  ];

  const scrollToProjects = () => scrollToSection('projects');

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-x-hidden">
      <Navbar />

      <motion.div
        style={{
          y: backgroundY,
          backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
        className="fixed inset-0 z-0 opacity-[0.08] md:opacity-[0.14] pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center"
        >
          <div>
            <p className="text-blue-400 text-sm font-mono mb-4">Benjamin Philipose</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white leading-[1.08] tracking-tight">
              <span className="block">Algorithms Engineer</span>
              <span className="block text-blue-500">ML Systems & Robotics</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg mb-7 max-w-xl leading-relaxed">
              Building machine-learning, robotics, and systems software for embodied AI and performance-sensitive applications.
            </p>

            <button
              onClick={scrollToProjects}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all shadow-lg shadow-blue-500/20 active:scale-95 font-mono text-sm"
            >
              View selected work
            </button>
          </div>

          <div className="w-full max-w-md mx-auto aspect-[4/5] md:aspect-square bg-slate-900 rounded-3xl border border-slate-800 flex items-center justify-center overflow-hidden relative group">
            <HeadRender />
          </div>
        </motion.section>

        <section id="bio" className="py-10">
          <div
            className="relative p-8 md:p-10 bg-slate-950/70 border border-blue-500/20 rounded-2xl overflow-hidden"
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              pointerX.set(event.clientX - rect.left);
              pointerY.set(event.clientY - rect.top);
            }}
          >
            <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_45%)]" />
            <motion.div className="absolute pointer-events-none w-52 h-52 rounded-full bg-blue-400/10 blur-3xl" style={{ x: glowX, y: glowY, translateX: "-50%", translateY: "-50%" }} />
            <div className="relative z-10">
              <h2 className="text-2xl text-white font-semibold mb-5">About</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-sm">
                {focusAreas.map((item) => (
                  <div key={item.label} className="bg-slate-900/60 border border-slate-800 rounded-lg p-4">
                    <p className="text-slate-500 mb-1">{item.label}</p>
                    <p className="text-slate-200">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-300 text-base leading-relaxed max-w-3xl border-l-2 border-blue-500/40 pl-6">
                I’m an algorithms engineer with experience across machine learning, robotics, simulation, computer vision, and systems programming. I enjoy building practical tools where learning, control, and performance engineering meet.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20">
          <ExperienceTimeline />
        </section>

        <section id="projects" className="py-20">
          <ProjectGrid />
        </section>

        <section id="skills" className="py-20">
          <SkillsMatrix />
        </section>

        <section className="py-20">
          <EducationBIOS />
        </section>
      </div>
    </div>
  );
}
