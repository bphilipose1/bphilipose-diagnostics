import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DecryptedText from './DecryptedText'; 

// Helper component for counting up numbers in metrics
const CountUp = ({ value }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* If you want a literal count-up, you'd use a hook, 
          but even just a spring-fade feels more dynamic */}
      {value}
    </motion.span>
  );
};

export default function ProjectModal({ project, isOpen, onClose }) {
  const closeButtonRef = useRef(null);
  const previouslyFocusedElement = useRef(null);
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;
      const focusableElements = document.querySelectorAll(
        '[role="dialog"] button, [role="dialog"] a[href], [role="dialog"] input, [role="dialog"] select, [role="dialog"] textarea, [role="dialog"] [tabindex]:not([tabindex="-1"])'
      );
      const focusable = Array.from(focusableElements).filter((element) => !element.hasAttribute('disabled'));
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    if (isOpen) {
      previouslyFocusedElement.current = document.activeElement;
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      requestAnimationFrame(() => closeButtonRef.current?.focus());

      return () => {
        document.body.style.overflow = previousOverflow;
        window.removeEventListener('keydown', handleKeyDown);
        previouslyFocusedElement.current?.focus?.();
      };
    }

  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          {/* 1. Backdrop with blur transition */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-zoom-out"
          />
          
          {/* 2. Content Container */}
          <motion.div 
            // This ID should match the layoutId on your ProjectCard for the morph effect
            layoutId={`card-${project.id}`} 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-slate-950 border border-slate-800 rounded-2xl overflow-y-auto shadow-2xl shadow-blue-500/20"
          >
            {/* Header: Initializing Glow Effect */}
            <div className="relative p-8 border-b border-slate-900 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-scan" />
              
              <button 
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close project details"
                className="absolute top-6 right-6 text-slate-500 hover:text-white font-mono text-[10px] tracking-tighter transition-colors border border-slate-800 hover:border-slate-500 px-2 py-1 rounded bg-slate-900"
              >
                Close
              </button>

              <div className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-2">
                <DecryptedText text={project.tag} speed={40} />
              </div>
              <h2 id="project-modal-title" className="text-4xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Sidebar: Automated Metrics */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-500" /> Overview
                  </h4>
                  <div className="space-y-3">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="bg-slate-900/40 p-4 rounded border border-slate-800 group hover:border-blue-500/40 transition-colors">
                        <div className="text-blue-400 text-2xl font-bold font-mono">
                          <CountUp value={m.value} />
                        </div>
                        <div className="text-slate-600 text-[9px] uppercase tracking-tighter mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-500" /> Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[10px] rounded font-mono hover:bg-blue-500/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Main Body: Decrypted Narrative */}
              <div className="md:col-span-2 space-y-10 text-left">
                <section>
                  <h3 className="text-white font-mono text-sm mb-4 flex items-center gap-3">
                    <span className="text-blue-500">01.</span> 
                    <DecryptedText text="Challenge" speed={50} />
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-sans border-l-2 border-slate-900 pl-6">
                    {project.constraint}
                  </p>
                </section>

                <section>
                  <h3 className="text-white font-mono text-sm mb-4 flex items-center gap-3">
                    <span className="text-blue-500">02.</span> 
                    <DecryptedText text="Approach" speed={50} />
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-sans border-l-2 border-slate-900 pl-6">
                    {project.implementation}
                  </p>
                </section>
                
                {/* Visual "Footer" inside modal */}
                <div className="pt-8 border-t border-slate-900 flex justify-between items-center opacity-30 group-hover:opacity-100 transition-opacity">
                   <span className="text-[9px] font-mono text-slate-500 uppercase">Selected project</span>
                   <span className="text-[9px] font-mono text-slate-500">Public overview</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
