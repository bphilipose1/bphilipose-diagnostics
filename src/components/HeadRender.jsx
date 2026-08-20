import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
const profileImg = 'https://raw.githubusercontent.com/bphilipose1/bphilipose-diagnostics/main/src/assets/profile.jpg';

export default function HeadRender() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200 });
  const rotateX = useTransform(smoothY, [-300, 300], [5, -5]);
  const rotateY = useTransform(smoothX, [-300, 300], [-5, 5]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - (rect.left + rect.width / 2));
    mouseY.set(event.clientY - (rect.top + rect.height / 2));
  };

  return (
    <div
      className="relative w-full h-full min-h-[320px] flex items-center justify-center bg-slate-950 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      style={{ perspective: "1200px" }}
    >
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 w-[78%] h-[78%] max-w-[320px] max-h-[320px] rounded-2xl overflow-hidden bg-black shadow-2xl shadow-blue-500/10"
      >
        <img src={profileImg} alt="Benjamin Philipose" className="w-full h-full object-cover object-center grayscale-[20%] opacity-90 contrast-110 brightness-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-blue-500/10 pointer-events-none" />
        <div className="absolute left-0 right-0 bottom-0 p-4">
          <p className="text-white font-medium text-sm">Benjamin Philipose</p>
          <p className="text-blue-200 text-xs mt-1">ML Systems & Robotics</p>
        </div>
      </motion.div>
    </div>
  );
}
