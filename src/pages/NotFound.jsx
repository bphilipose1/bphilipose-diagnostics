import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center font-mono text-red-500 p-6 relative overflow-hidden">
      
      {/* ⚠️ Error Header with "Jitter" */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0.5, 1],
          x: [0, -1, 1, 0],
          skewX: [0, -10, 10, 0]
        }}
        transition={{ 
          opacity: { repeat: Infinity, duration: 0.2, repeatDelay: 3 },
          skewX: { repeat: Infinity, duration: 0.1, repeatDelay: 4 }
        }}
        className="text-6xl mb-4 font-bold tracking-tighter"
      >
        [!] CRITICAL_ERROR
      </motion.div>

      <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-lg max-w-lg w-full shadow-[0_0_50px_rgba(239,68,68,0.1)] backdrop-blur-sm relative z-10">
        <div className="space-y-4 mb-8 text-sm">
          <p className="text-red-400 font-bold animate-pulse">*** KERNEL_PANIC_DETECTED ***</p>
          
          <div className="opacity-70 space-y-1">
            <p>ERROR_CODE: 0x404_PAGE_NOT_FOUND</p>
            <p>SUBSYSTEM: NAV_ROUTING_ENGINE</p>
          </div>

          {/* CRAZY GLITCHY LOCATION BLOCK */}
          <div className="relative py-3 my-4 border-y border-red-500/20 bg-red-500/5 px-2">
            <p className="text-[9px] text-red-500/40 mb-1 tracking-widest uppercase">Fault_Address_Trace:</p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <motion.p 
                animate={{ 
                  x: [0, -2, 2, -1, 0],
                  filter: ["hue-rotate(0deg)", "hue-rotate(300deg)", "hue-rotate(0deg)"],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ repeat: Infinity, duration: 0.15, repeatDelay: 0.5 }}
                className="font-mono font-bold text-red-500 break-all"
              >
                /home/benjamin.ml/unknown_path/404_not_found.jsx
              </motion.p>
            </div>
            
            {/* Hex Dump - Simulating Memory Leak */}
            <div className="grid grid-cols-4 gap-2 opacity-30 text-[9px] mt-3 font-mono">
              {["0x00FF41", "0x8812AC", "0xDEADD0", "0xBE0000", "0x55FA21", "0x00404B", "0xAC1100", "0xFF0012"].map((hex, i) => (
                <motion.span 
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ repeat: Infinity, duration: Math.random() * 2 + 1 }}
                >
                  {hex}
                </motion.span>
              ))}
            </div>
          </div>

          <p className="pt-2 border-t border-red-500/10 text-[11px] leading-relaxed opacity-80">
            Instruction at <span className="text-red-400">0x00404</span> referenced memory at <span className="text-red-400">0x00000</span>. The memory could not be "read". Core dumped.
          </p>
          
          {/* Animated Trace Line */}
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear", repeat: Infinity }}
            className="h-[1px] bg-red-500/30"
          />
        </div>

        {/* 🔄 Recovery Option */}
        <div className="flex flex-col gap-3">
          <p className="text-[10px] uppercase tracking-widest text-slate-500">Suggested Recovery Path:</p>
          <Link 
            to="/" 
            className="bg-red-500/20 hover:bg-red-500 hover:text-white border border-red-500 px-4 py-3 rounded transition-all text-center group font-bold tracking-wider"
          >
            <span className="group-hover:animate-pulse">_EXECUTE_REBOOT_TO_HOME</span>
          </Link>
          <Link 
            to="/projects" 
            className="text-slate-500 hover:text-red-400 text-xs text-center transition-colors font-mono"
          >
            _VIEW_STABLE_PROJECT_LIST
          </Link>
        </div>
      </div>

      {/* 📺 CRT Scanline/Flicker Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      
      {/* Subtle Static background effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://media.giphy.com/media/oEI9uWUicGLeU/giphy.gif')] mix-blend-screen" />
    </div>
  );
}