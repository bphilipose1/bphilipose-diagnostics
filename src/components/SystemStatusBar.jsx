import React, { useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

export default function SystemStatusBar() {
  const { scrollYProgress } = useScroll();
  
  // Local state to hold the numeric percentage for display
  const [bufferPercent, setBufferPercent] = useState(0);

  // useMotionValueEvent listens to the scroll progress and updates state
  // without re-rendering the entire animation logic every frame.
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setBufferPercent(Math.round(latest * 100));
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 px-6 pb-6 pointer-events-none">
      <div className="max-w-6xl mx-auto flex flex-col gap-2">
        
        {/* Status Metadata */}
        <div className="flex justify-between items-end font-mono text-[10px] text-blue-500/60 px-2">
          <div className="flex gap-4">
            <span>LOC: [47.3229° N, 122.3126° W]</span>
            <span className="hidden md:inline">ENCODING: UTF-8</span>
          </div>
          <div className="text-right">
            {/* Now uses the state variable which updates on scroll */}
            <span>BUFFER_LOAD: {bufferPercent}%</span>
          </div>
        </div>

        {/* The Progress Bar Container */}
        <div className="h-1 w-full bg-slate-900 rounded-full border border-slate-800 overflow-hidden relative">
          <motion.div 
            style={{ scaleX, transformOrigin: "0%" }}
            className="absolute inset-0 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
        </div>
      </div>
    </div>
  );
}