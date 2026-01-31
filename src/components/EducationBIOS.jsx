import React from 'react';
import { motion } from 'framer-motion';
import DecryptedText from './DecryptedText'; 

export default function EducationBIOS() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const recordVariants = {
    hidden: { x: -20, opacity: 0, filter: "blur(10px)" },
    visible: { 
      x: 0, 
      opacity: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const gradCourses = [
    'LLMs / GenAI', 'Parallel Computing', 
    'Distributed Systems', 'Big Data', 
    'Advanced ML', 'Visual Analytics'
  ];

  const underGradCourses = [
    'Embedded Systems', 'Microproc Design', 
    'Signals & Systems', 'Data Comm', 
    'Semiconductors', 'Algo Analysis'
  ];

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="py-12 border-t border-slate-900 font-mono relative overflow-hidden"
    >
      {/* Background Matrix-style Hex Decals */}
      <div className="absolute right-0 top-0 opacity-[0.03] text-[8px] pointer-events-none select-none leading-tight">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i}>0xFA{i}B 0xDE0{i} 0x{i}FF 0xAA{i} 0x00{i}F</div>
        ))}
      </div>

      <div className="flex items-center gap-4 mb-10">
        <h3 className="text-2xl text-white lowercase">_system_bios (edu)</h3>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-500/50 to-transparent" />
        <div className="text-[10px] text-blue-500 animate-pulse">ACADEMIC_RECORDS_VERIFIED</div>
      </div>
      
      <div className="space-y-8">
        {/* GRADUATE RECORD (Master's - Completed) */}
        <motion.div variants={recordVariants} className="group relative">
          <div className="absolute -left-2 top-0 bottom-0 w-[2px] bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
          
          <div className="bg-black/40 border border-slate-800 p-6 rounded-sm relative overflow-hidden backdrop-blur-sm">
            {/* Scanline Animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
               <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animate-scan" />
            </div>
            
            <div className="absolute top-0 right-0 bg-blue-500/20 text-blue-400 text-[9px] px-3 py-1 uppercase tracking-tighter border-l border-b border-blue-500/30">
              SESSION_CLOSED // GRADUATED
            </div>

            <div className="flex items-center gap-2 text-green-500 mb-4 font-bold text-xs">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <DecryptedText text="> ACCESSING_GRAD_RECORD... [SUCCESS]" speed={25} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div>
                <p className="text-blue-400 text-[11px] mb-1 font-bold tracking-widest">NODE: M.S. COMPUTER SCIENCE</p>
                <h4 className="text-white font-bold text-xl tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                  Specialization: Data Science
                </h4>
                <p className="text-slate-500 text-xs mt-1">Seattle University // Conferred 2025</p>
                
                {/* 4.0 GPA Flex Box */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="text-green-500 text-[10px] font-mono border border-green-500/30 px-2 py-1 bg-green-500/5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                    GPA_STABILITY: 4.00 / 4.00 [MAX]
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="text-[11px] text-slate-400 space-y-2 bg-slate-950/80 p-4 rounded-sm border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                  <p className="text-blue-500 mb-2 font-bold uppercase tracking-widest text-[10px] flex justify-between">
                    <span>Advanced_Modules_Loaded</span>
                    <span className="text-slate-700">v3.1.0</span>
                  </p>
                  <div className="grid grid-cols-2 gap-y-1 gap-x-4">
                    {gradCourses.map((item, i) => (
                      <div key={item} className="flex items-center gap-1.5 hover:text-blue-300 transition-colors">
                        <span className="w-1 h-1 bg-blue-500 rotate-45" />
                        <DecryptedText text={item} delay={500 + (i * 100)} speed={30} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* UNDERGRADUATE RECORD (Double Major) */}
        <motion.div variants={recordVariants} className="group relative opacity-90 hover:opacity-100 transition-opacity">
          <div className="absolute -left-2 top-0 bottom-0 w-[2px] bg-slate-700 group-hover:bg-cyan-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
          
          <div className="bg-black/40 border border-slate-800 p-6 rounded-sm relative backdrop-blur-sm">
            <div className="text-slate-500 mb-4 font-bold text-xs uppercase">
              <DecryptedText text="> LOADING_ARCHIVE_UNDERGRAD... [READ_ONLY]" delay={800} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div>
                <p className="text-cyan-400 text-[11px] mb-1 font-bold tracking-widest">NODE: B.S. COMPUTER ENGINEERING & CS</p>
                <h4 className="text-white font-bold text-xl tracking-tight leading-tigh group-hover:text-blue-400 transition-colors">
                  Double Major / Accelerated Track
                </h4>
                <p className="text-slate-500 text-xs mt-1 italic">Seattle University // 2021 – 2025</p>
                
                {/* 4.0 GPA Flex Box */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="text-cyan-500 text-[10px] font-mono border border-cyan-500/30 px-2 py-1 bg-cyan-500/5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                    GPA_STABILITY: 4.00 / 4.00 [MAX]
                  </div>
                </div>
              </div>
              
              <div className="text-[11px] text-slate-400 space-y-2 bg-slate-950/80 p-4 rounded-sm border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                <p className="text-cyan-500 mb-2 font-bold uppercase tracking-widest text-[10px]">Hardware_Kernel_Stack:</p>
                <div className="grid grid-cols-2 gap-y-1 gap-x-4">
                  {underGradCourses.map((item, i) => (
                    <div key={item} className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                      <span className="text-cyan-800 text-[9px]">0x{i+1}</span>
                      <DecryptedText text={item} delay={1200 + (i * 100)} speed={30} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Global CSS for the Scanline animation if not using Tailwind Config */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </motion.div>
  );
}