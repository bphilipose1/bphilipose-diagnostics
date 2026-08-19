import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, useSpring } from 'framer-motion';
import { scrollToSection as scrollToSectionUtil } from '../utils/scroll';

export default function Navbar() {
  const navigate = useNavigate();
  const { scrollY, scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) setIsVisible(true);
    else {
      setIsVisible(false);
      if (!isScrollingRef.current) setActiveSection('');
    }
  });

  useEffect(() => {
    const sections = ['experience', 'projects', 'skills'];
    const observer = new IntersectionObserver((entries) => {
      if (isScrollingRef.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
          scrollTimeoutRef.current = setTimeout(() => setActiveSection(entry.target.id), 50);
        }
      });
    }, { root: null, rootMargin: '-20% 0px -75% 0px', threshold: 0 });

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => {
      observer.disconnect();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const scrollToSection = (id) => {
    if (!document.getElementById(id)) return;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    isScrollingRef.current = true;
    setActiveSection(id);
    scrollToSectionUtil(id);
    setTimeout(() => { isScrollingRef.current = false; }, 1000);
  };

  const navLinks = [
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-6 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="relative flex items-center gap-4 md:gap-8 px-6 py-3 rounded-full border border-slate-800 bg-slate-950/80 backdrop-blur-md shadow-2xl shadow-blue-500/10 pointer-events-auto overflow-hidden"
      >
        <button
          onClick={() => {
            navigate('/', { replace: true, state: { refresh: Date.now() } });
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
          }}
          className="text-blue-400 font-semibold text-sm hover:brightness-125 transition-all"
        >
          Benjamin Philipose
        </button>

        <div className="flex gap-4 md:gap-6 text-[10px] md:text-xs font-mono">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={"transition-all duration-300 tracking-wide relative py-1 " + (activeSection === link.id ? "text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" : "text-slate-500 hover:text-slate-300")}
            >
              {link.name}
              {activeSection === link.id && <motion.div layoutId="activeTab" className="absolute -bottom-1 left-0 right-0 h-[1px] bg-blue-500/50" />}
            </button>
          ))}
        </div>

        <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 origin-left" style={{ scaleX }} />
      </motion.div>
    </nav>
  );
}