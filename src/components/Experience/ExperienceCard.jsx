import React from 'react';
import { motion } from 'framer-motion';
import { InteractiveBullet } from './InteractiveBullet';

export const ExperienceCard = ({ exp, index, total }) => {
  const isPresent = exp.period.includes("Present");

  return (
    <motion.div 
      // FIX: Removed x: 20. Marker now appears stationary on the line.
      initial={{ opacity: 0, scale: 0.98 }} 
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative pl-12 group mb-16"
    >
      {/* MARKER: Locked in place */}
      <div className="absolute left-0 top-1 z-30 -translate-x-1/2 flex items-center justify-center pointer-events-none">
        {isPresent ? (
          <div className="relative flex items-center justify-center">
            <div className="absolute w-10 h-10 border border-blue-500/10 rounded-full animate-[spin_8s_linear_infinite]" />
            <div className="absolute w-8 h-8 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
            <div className="w-5 h-5 bg-slate-950 border-2 border-blue-400 rotate-45 flex items-center justify-center shadow-[0_0_20px_rgba(96,165,250,0.6)] group-hover:rotate-[225deg] transition-all duration-700 overflow-hidden">
               <div className="absolute w-full h-[1px] bg-blue-400/50 animate-[spin_3s_linear_infinite]" />
               <div className="absolute w-[1px] h-full bg-blue-400/50 animate-[spin_3s_linear_infinite]" />
               <div className="w-1.5 h-1.5 bg-white shadow-[0_0_12px_#fff] rounded-full z-10" />
            </div>
          </div>
        ) : (
          <div className="w-4 h-4 bg-slate-950 border border-slate-700 rotate-45 flex items-center justify-center group-hover:border-blue-500/50 group-hover:rotate-90 transition-all duration-500">
            <div className="w-1 h-1 bg-slate-800 group-hover:bg-blue-500 transition-colors" />
          </div>
        )}
      </div>

      <div className={`p-6 rounded-sm border transition-all duration-500 relative overflow-hidden ${
        isPresent 
          ? "bg-blue-500/[0.04] border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.1)]" 
          : "border-transparent hover:bg-slate-900/40 hover:border-slate-800"
      }`}>
        {isPresent && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent -translate-y-full animate-[scan_4s_linear_infinite]" />
          </div>
        )}

        {/* This inner div handles the slight horizontal shift on hover */}
        <div className="group-hover:translate-x-2 transition-transform duration-300 relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between items-start mb-4">
            <div className="max-w-xl">
              <h4 className={`text-xl font-bold leading-tight transition-colors ${
                isPresent ? "text-blue-400" : "text-white group-hover:text-blue-400"
              }`}>
                {exp.role}
              </h4>
              <div className="flex items-center gap-3 mt-1">
                <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">{exp.company}</p>
                {isPresent && (
                  <span className="flex items-center gap-1.5 text-[9px] bg-blue-500/20 text-blue-300 border border-blue-400/40 px-2 py-0.5 rounded-sm font-bold tracking-widest">
                    <span className="w-1 h-1 bg-blue-400 rounded-full animate-ping" />
                    STATUS: ACTIVE_NODE
                  </span>
                )}
              </div>
            </div>
            <span className={`text-[10px] font-mono mt-1 md:mt-0 ${
              isPresent ? "text-blue-400/70" : "text-slate-500 opacity-50"
            }`}>
              // {exp.period}
            </span>
          </div>

          {exp.highlight && (
            <div className={`inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-sm text-[10px] font-mono border ${
              isPresent 
                ? "bg-blue-500/10 border-blue-400/40 text-blue-200" 
                : "bg-slate-900/50 border-slate-800 text-slate-400"
            }`}>
              <span className={`w-1 h-1 rounded-full ${isPresent ? "bg-blue-400 animate-pulse" : "bg-slate-600"}`} />
              CORE_IMPACT: {exp.highlight}
            </div>
          )}

          <ul className={`space-y-3 mb-8 border-l ml-1 pl-4 transition-colors ${
            isPresent ? "border-blue-500/40" : "border-slate-800"
          }`}>
            {exp.bullets.map((bullet, i) => (
              <InteractiveBullet key={i} text={bullet} color={isPresent ? "#60a5fa" : "#64748b"} />
            ))}
          </ul>

          <div className={`flex flex-wrap gap-2 pt-6 border-t ${
            isPresent ? "border-blue-500/20" : "border-slate-900/50"
          }`}>
            {exp.tech.map((t, i) => (
              <span key={i} className={`text-[9px] font-mono px-2 py-0.5 rounded transition-all ${
                isPresent 
                  ? "text-blue-300 border border-blue-500/30 bg-blue-400/10" 
                  : "text-slate-600 border border-slate-800/50"
              }`}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};