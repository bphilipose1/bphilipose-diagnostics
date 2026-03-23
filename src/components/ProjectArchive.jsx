import React from 'react';
import { motion } from 'framer-motion';

const archiveData = [
  {
    date: "Feb 2025",
    title: "Interactive Web App (MongoDB)",
    note: "Full-stack Angular/Node.js app with JWT auth and scalable MongoDB backend",
    tags: ["Angular", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/bphilipose1",
  },
  {
    date: "Dec 2024",
    title: "DHT Chord Protocol",
    note: "Scalable P2P system with O(log N) decentralized key lookup and dynamic node management",
    tags: ["Python", "Chord", "Distributed Systems", "TCP"],
    github: "https://github.com/bphilipose1",
  },
  {
    date: "Nov 2024",
    title: "Forex Arbitrage Detector",
    note: "Real-time negative-cycle detection across live currency exchange graphs via Bellman-Ford",
    tags: ["Python", "Bellman-Ford", "UDP", "Multithreading"],
    github: "https://github.com/bphilipose1",
  },
  {
    date: "Jun 2024",
    title: "Cloud Spark Search Engine",
    note: "Distributed TF-IDF ranking over large-scale unstructured datasets on AWS EMR",
    tags: ["Apache Spark", "AWS EMR", "TF-IDF", "RDD"],
    github: "https://github.com/bphilipose1",
  },
  {
    date: "Apr 2024",
    title: "CUDA Sorting & Scanning",
    note: "Parallel Bitonic Sort and Dissemination Prefix Scan with shared-memory optimization",
    tags: ["C++", "CUDA", "Nsight Systems", "SIMD"],
    github: "https://github.com/bphilipose1",
  },
  {
    date: "Apr 2024",
    title: "Distributed K-Means (MPI)",
    note: "32-process parallel clustering with efficient centroid-sync across partitioned data",
    tags: ["C++", "MPI", "HPC"],
    github: "https://github.com/bphilipose1",
  },
  {
    date: "Mar 2024",
    title: "Network File System (NFS)",
    note: "Stateless C++ NFS with concurrent client support via TCP sockets and Pthreads",
    tags: ["C++", "TCP", "Pthreads", "Multi-threading"],
    github: "https://github.com/bphilipose1",
  },
  {
    date: "Dec 2023",
    title: "Age Prediction Neural Networks",
    note: "Multi-modal CNN achieving 40% training time reduction via CUDA-accelerated pipelines",
    tags: ["PyTorch", "TensorFlow", "CUDA", "CNNs"],
    github: "https://github.com/bphilipose1/AgeFacePredictionDNN",
  },
  {
    date: "Apr 2022",
    title: "RISC-V CPU Design",
    note: "Custom 5-stage pipelined CPU with ALU, register file, and control unit in VHDL",
    tags: ["VHDL", "ModelSim", "Ripes", "Computer Architecture"],
    github: "https://github.com/bphilipose1",
  },
];

export default function ProjectArchive() {
  return (
    <section className="py-12 border-t border-slate-900/50">
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-2xl font-mono text-white flex items-center">
          <span className="text-blue-500 mr-2">/</span> 02_project_archive
        </h3>
        <span className="text-[9px] font-mono text-slate-600 border border-slate-800 px-2 py-1 rounded tracking-widest">
          {archiveData.length} RECORDS
        </span>
        <a
          href="https://github.com/bphilipose1"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-[10px] font-mono text-slate-600 hover:text-blue-400 transition-colors border border-slate-800 hover:border-blue-500/30 px-3 py-1 rounded"
        >
          VIEW ALL ON GITHUB ↗
        </a>
      </div>

      <div className="border border-slate-800/50 rounded-xl overflow-hidden">
        {/* Column headers */}
        <div className="hidden md:grid grid-cols-[120px_1fr_220px_90px] gap-4 px-6 py-3 bg-slate-900/60 border-b border-slate-800/50 font-mono text-[9px] text-slate-600 uppercase tracking-widest">
          <span>Date</span>
          <span>Project // Note</span>
          <span>Stack</span>
          <span className="text-right">Source</span>
        </div>

        {archiveData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="group grid grid-cols-1 md:grid-cols-[120px_1fr_220px_90px] gap-2 md:gap-4 px-6 py-4 border-b border-slate-900/50 last:border-0 hover:bg-blue-500/[0.03] transition-colors duration-150 cursor-default"
          >
            {/* Date */}
            <span className="font-mono text-[10px] text-slate-600 group-hover:text-slate-500 transition-colors self-center shrink-0">
              [{item.date}]
            </span>

            {/* Title + Note */}
            <div className="self-center min-w-0">
              <span className="font-mono text-sm text-slate-300 group-hover:text-blue-300 transition-colors duration-150 group-hover:translate-x-1 inline-block">
                {item.title}
              </span>
              <p className="font-mono text-[10px] text-slate-600 mt-0.5 leading-relaxed truncate group-hover:text-slate-500 transition-colors">
                // {item.note}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 self-center">
              {item.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[9px] font-mono text-slate-600 border border-slate-800 group-hover:border-blue-500/20 group-hover:text-blue-400/70 px-1.5 py-0.5 rounded transition-colors duration-150"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* GitHub link */}
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="self-center text-right font-mono text-[10px] text-slate-700 group-hover:text-blue-400 hover:text-blue-300 transition-colors duration-150"
            >
              github ↗
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
