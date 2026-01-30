import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, useSpring } from 'framer-motion';

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null); // Added for debouncing jitter

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      if (!isScrollingRef.current) setActiveSection('');
    }
  });

  useEffect(() => {
    const sections = ['projects', 'experience', 'skills'];
    
    const observerOptions = {
      root: null,
      // Focus detection on a narrow strip 20% from the top
      rootMargin: '-20% 0px -75% 0px', 
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        // Only trigger if the section is occupying the "priority zone"
        if (entry.isIntersecting) {
          // Debounce the update: wait for scroll jitter to settle
          if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
          
          scrollTimeoutRef.current = setTimeout(() => {
            setActiveSection(entry.target.id);
          }, 50); // 50ms is the "sweet spot" to ignore jitter but feel fast
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    isScrollingRef.current = true;
    setActiveSection(id);

    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Increased timeout slightly to ensure the browser scroll settles
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  const navLinks = [
    { name: '_projects', id: 'projects' },
    { name: '_history', id: 'experience' },
    { name: '_matrix', id: 'skills' },
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
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-blue-500 font-mono font-bold text-sm tracking-tighter hover:brightness-125 transition-all"
        >
          BP_LOG_01
        </button>

        <div className="flex gap-4 md:gap-6 text-[10px] md:text-xs font-mono">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`transition-all duration-300 uppercase tracking-widest relative py-1 ${
                activeSection === link.id 
                  ? "text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" 
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              {link.name}
              {/* Optional: Add a small underline for the active link */}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-blue-500/50"
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-slate-800">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] font-mono text-blue-500/70 uppercase tracking-widest">
            {activeSection ? activeSection.toUpperCase() : "SYSTEM_READY"}
          </span>
        </div>

        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 origin-left"
          style={{ scaleX }}
        />
      </motion.div>
    </nav>
  );
}