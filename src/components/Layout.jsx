import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-x-hidden">
      
      {/* 🌌 Persistent Cyber-Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{ 
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '50px 50px' 
        }}
      />
      
      {/* Radial overlay to fade the grid towards the edges */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#020617_70%)]" />


      {/* 📟 Main Content with Page Transitions */}
      <main className="relative z-10 flex-grow max-w-6xl mx-auto w-full p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 🏁 Footer */}
      <footer className="relative z-10 p-10 border-t border-slate-900/50 text-center text-slate-500 font-mono text-[10px] tracking-widest">
        <div className="flex justify-center items-center gap-4 mb-2">
          <div className="h-px w-8 bg-slate-800" />
          <p>&copy; 2026 Build_Status: <span className="text-green-500/70">Operational</span></p>
          <div className="h-px w-8 bg-slate-800" />
        </div>
        <p className="opacity-50 uppercase">Core_Runtime: WSL2 // React_v18 // Framer_Motion</p>
      </footer>
    </div>
  );
}