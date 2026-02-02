import React from 'react';
import { motion } from 'framer-motion';
import { InteractiveBullet } from './InteractiveBullet';

export const AchievementCard = ({ exp }) => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.98, x: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hoverState: { x: 0 }
  };

  const bodyVariants = {
    hidden: { height: 0, opacity: 0, marginTop: 0 },
    visible: { height: 0, opacity: 0, marginTop: 0 },
    hoverState: { 
      height: "auto", 
      opacity: 1, 
      marginTop: 16,
      transition: { duration: 0.4, ease: "circOut" } 
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hoverState"
      viewport={{ once: true, amount: 0.1, margin: "-100px" }}
      className="relative pl-12 mb-24 group cursor-pointer" 
    >
      {/* MARKER: Locked to line */}
      <div className="absolute left-0 top-1 z-30 -translate-x-1/2 flex items-center justify-center pointer-events-none">
        <div className="w-5 h-5 bg-slate-950 border-2 border-amber-500 rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:scale-110 group-hover:rotate-[225deg] transition-all duration-700">
          <span className="rotate-[-45deg] group-hover:rotate-[-225deg] transition-all duration-700 text-[10px] text-amber-500 font-bold">
            ★
          </span>
        </div>
      </div>

      <motion.div 
        variants={{
          hidden: { x: 0 },
          visible: { x: 0 },
          hoverState: { x: 10 } 
        }}
        className="bg-amber-500/5 border border-amber-500/20 p-4 rounded-sm backdrop-blur-sm relative overflow-hidden group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors duration-300"
      >
        {/* THE "WINNER" BACKGROUND TEXT */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 0.03, x: 0 }, // Very subtle default
            hoverState: { opacity: 0.1, x: -10, transition: { duration: 0.4 } } // Lights up on hover
          }}
          className="absolute top-[-10px] right-[-10px] pointer-events-none z-0 select-none"
        >
          <span className="text-7xl font-black italic text-amber-500 uppercase tracking-tighter">
            WINNER
          </span>
        </motion.div>

        {/* SCANLINE EFFECT */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 bg-[linear-gradient(rgba(245,158,11,0.05)_50%,transparent_50%)] bg-[length:100%_4px] transition-opacity duration-300" />

        <div className="flex justify-between items-center relative z-10">
          <div>
            <div className="flex items-center gap-3">
               <h4 className="text-lg font-bold text-amber-400 uppercase tracking-tight group-hover:text-white transition-colors">
                {exp.role}
              </h4>
              <span className="hidden sm:inline text-[8px] font-mono text-amber-500/40 border border-amber-500/20 px-1 rounded uppercase group-hover:text-amber-500">
                Achievement_Unlocked
              </span>
            </div>
            <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest mt-0.5">{exp.company}</p>
          </div>
          
          <div className="flex items-center gap-3">
             <span className="text-[10px] font-mono text-slate-500 italic">// {exp.period}</span>
             <motion.span 
               variants={{
                 hidden: { rotate: 0 },
                 visible: { rotate: 0 },
                 hoverState: { rotate: 180 }
               }}
               className="text-amber-500 text-[10px]"
             >▼</motion.span>
          </div>
        </div>

        <motion.div variants={bodyVariants} className="relative z-10 overflow-hidden border-t border-amber-500/10">
          <div className="pt-4">
            <ul className="space-y-2 mb-6">
              {exp.bullets.map((bullet, i) => (
                <InteractiveBullet key={i} text={bullet} color="#f59e0b" />
              ))}
            </ul>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <span key={i} className="text-[9px] font-mono text-amber-500/60 border border-amber-500/10 px-2 py-0.5 rounded uppercase">{t}</span>
                ))}
              </div>
              {exp.externalLinks?.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noreferrer" className="text-[10px] font-mono text-amber-500 hover:text-white bg-amber-500/10 hover:bg-amber-500 border border-amber-500/20 px-3 py-1.5 rounded-sm transition-all">
                  ACCESS_REPORT ⤿
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};