import { useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-x-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#020617_70%)]" />

      {/* Header only shown on non-home pages (Home uses its own floating Navbar) */}
      {!isHome && (
        <header className="relative z-50 border-b border-slate-900/80 bg-slate-950/50 backdrop-blur-md sticky top-0">
          <nav className="max-w-6xl mx-auto flex items-center p-6">
            <Link to="/" className="group flex items-center gap-2 text-xl font-mono font-bold tracking-tighter">
              <span className="text-blue-500 group-hover:animate-pulse">_</span>
              <span className="hover:text-blue-400 transition-colors">BENJAMIN.ML</span>
            </Link>
          </nav>
        </header>
      )}

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

      <footer className="relative z-10 py-16 px-6 border-t border-slate-900 text-center font-mono">
        <p className="text-slate-500 text-xs mb-4">TERMINAL_SESSION_END: 2026</p>
        <div className="flex justify-center gap-8 text-sm mb-8">
          <a href="mailto:philiposebenjamin@gmail.com" className="text-blue-400 hover:text-white transition-colors underline decoration-blue-500/30 underline-offset-4">email</a>
          <a href="https://linkedin.com/in/bphilipose" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors underline decoration-blue-500/30 underline-offset-4">linkedin</a>
          <a href="https://github.com/bphilipose1" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors underline decoration-blue-500/30 underline-offset-4">github</a>
        </div>
        <div className="flex justify-center items-center gap-4 mb-2">
          <div className="h-px w-8 bg-slate-800" />
          <p className="text-slate-600 text-[10px] tracking-widest">
            &copy; 2026 Build_Status: <span className="text-green-500/70">Operational</span>
          </p>
          <div className="h-px w-8 bg-slate-800" />
        </div>
        <p className="text-slate-700 text-[10px] opacity-50 uppercase tracking-widest">Core_Runtime: React_v19 // Framer_Motion // TailwindCSS</p>
      </footer>
    </div>
  );
}
