import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

export default function HeadRender() {
  const [inferenceData, setInferenceData] = useState({ conf: 0.982, logs: [] });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-300, 300], [10, -10]);
  const rotateY = useTransform(smoothX, [-300, 300], [-10, 10]);

  // Simulate Live Tensor Feed
  useEffect(() => {
    const interval = setInterval(() => {
      setInferenceData(prev => ({
        conf: (0.98 + Math.random() * 0.01).toFixed(4),
        logs: [Math.random().toFixed(4), Math.random().toFixed(4), Math.random().toFixed(4)].slice(0, 3)
      }));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  return (
    <div 
      className="relative w-full h-[500px] flex items-center justify-center bg-slate-950 overflow-hidden font-mono cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      style={{ perspective: "1200px" }}
    >
      {/* 1. Spatial Grid */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* 2. Main Render Container */}
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 w-80 h-80 rounded-lg border border-white/5 overflow-hidden bg-black shadow-2xl"
      >
        {/* Layer A: The Profile Image (Base) */}
        <img src={profileImg} className="w-full h-full object-cover grayscale opacity-50 contrast-125 brightness-75 mix-blend-screen" />

        {/* Layer B: Grad-CAM Feature Map (The "Heatmap") */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-color-dodge pointer-events-none"
          style={{ background: `radial-gradient(circle at 50% 40%, rgba(255,0,0,0.6) 0%, rgba(59,130,246,0.3) 40%, transparent 70%)` }}
        />

        {/* Layer C: Simulated Tensor Grid */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-[0.15]">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border-[0.5px] border-blue-500/20 text-[3px] text-blue-300 flex items-center justify-center">
              {Math.random() > 0.9 ? '1' : ''}
            </div>
          ))}
        </div>

        {/* Layer D: Active Bounding Box (YOLO Style) */}
        <motion.div 
          animate={{ 
            x: [10, 12, 9, 10], 
            y: [2, 0, 3, 2],
            width: ["55%", "56%", "54%", "55%"],
            height: ["52%", "53%", "51%", "52%"] 
          }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute top-[20%] left-[17.5%] border-2 border-cyan-500/50 z-50 pointer-events-none"
        >
          <div className="absolute -top-5 left-0 bg-cyan-500 text-black px-1 text-[8px] font-bold whitespace-nowrap">
            SUBJ_RECOGNITION: {inferenceData.conf}
          </div>
          {/* Corner accents */}
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-cyan-300" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-cyan-300" />
        </motion.div>

        {/* Layer E: Scanning Laser */}
        <motion.div 
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[1px] bg-blue-400 shadow-[0_0_15px_#3b82f6] z-50"
        />

        {/* Bottom Status Overlay */}
        <div className="absolute bottom-0 w-full bg-black/80 backdrop-blur-md p-2 border-t border-white/10 z-[60] flex justify-between text-[8px]">
          <div className="text-blue-400">LATENCY: 12ms</div>
          <div className="text-slate-500">TENSOR_FLOPS: 4.2 TFLOP/s</div>
        </div>
      </motion.div>

      {/* 3. Floating Metadata (Counter-Parallax) */}
      <motion.div 
        style={{ x: useTransform(smoothX, [-300, 300], [20, -20]), y: useTransform(smoothY, [-300, 300], [20, -20]) }}
        className="absolute top-7 left-7 z-20"
      >
        <div className="bg-slate-900/80 backdrop-blur-md p-3 border-l-2 border-blue-500 rounded text-[9px] text-blue-300 space-y-1">
          <p className="text-blue-500 font-bold tracking-widest">// RAW_INFERENCE_LOG</p>
          {inferenceData.logs.map((log, i) => (
            <p key={i}>VECTOR_OUT_{i}: [ {log} ]</p>
          ))}
          <p className="pt-1 opacity-50 italic">STATUS: RUNNING...</p>
        </div>
      </motion.div>
    </div>
  );
}