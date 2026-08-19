import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

export default function HeadRender() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200 });
  const rotateX = useTransform(smoothY, [-300, 300], [8, -8]);
  const rotateY = useTransform(smoothX, [-300, 300], [-8, 8]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - (rect.left + rect.width / 2));
    mouseY.set(event.clientY - (rect.top + rect.height / 2));
  };

  return (
    <div
      className="relative w-full h-[500px] flex items-center justify-center bg-slate-950 overflow-hidden font-mono"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      style={{ perspective: "1200px" }}
    >
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 w-80 h-80 rounded-lg border border-white/5 overflow-hidden bg-black shadow-2xl"
      >
        <img src={profileImg} alt="Benjamin Philipose" className="w-full h-full object-cover grayscale opacity-70 contrast-125 brightness-75 mix-blend-screen" />
        <div className="absolute inset-0 opacity-30 mix-blend-color-dodge pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 40%, rgba(59,130,246,0.4) 0%, transparent 70%)' }} />
        <motion.div animate={{ top: ["-10%", "110%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute left-0 w-full h-[1px] bg-blue-400 shadow-[0_0_15px_#3b82f6]" />
        <div className="absolute bottom-0 w-full bg-black/80 backdrop-blur-md p-2 border-t border-white/10 flex justify-between text-[8px]">
          <div className="text-blue-400">PROFILE: BENJAMIN PHILIPOSE</div>
          <div className="text-slate-500">PUBLIC OVERVIEW</div>
        </div>
      </motion.div>
      <div className="absolute top-7 left-7 z-20 bg-slate-900/80 backdrop-blur-md p-3 border-l-2 border-blue-500 rounded text-[9px] text-blue-300 space-y-1">
        <p className="text-blue-500 font-bold tracking-widest">// PORTFOLIO</p>
        <p>STATUS: ACTIVE</p>
        <p className="opacity-50 italic">PUBLIC INFORMATION ONLY</p>
      </div>
    </div>
  );
}
