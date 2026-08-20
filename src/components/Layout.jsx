import { useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-x-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#020617_70%)]" />

      {!isHome && (
        <header className="relative z-50 border-b border-slate-900/80 bg-slate-950/50 backdrop-blur-md sticky top-0">
          <nav className="max-w-6xl mx-auto flex items-center p-6">
            <Link to="/" className="text-xl font-semibold text-white hover:text-blue-300 transition-colors">Benjamin Philipose</Link>
          </nav>
        </header>
      )}

      <main className="relative z-10 flex-grow max-w-6xl mx-auto w-full px-4 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3, ease: "easeOut" }}>
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="relative z-10 py-12 px-6 border-t border-slate-900 text-center">
        <div className="flex justify-center gap-6 text-sm mb-5">
          <a href="mailto:philiposebenjamin@gmail.com" className="text-blue-300 hover:text-white transition-colors">Email</a>
          <a href="https://linkedin.com/in/bphilipose" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/bphilipose1" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">GitHub</a>
        </div>
        <p className="text-slate-500 text-xs">© 2026 Benjamin Philipose</p>
      </footer>
    </div>
  );
}
