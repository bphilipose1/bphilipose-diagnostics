import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const experiences = [
  {
    company: "Meta – Contract",
    role: "Algorithms Engineer V",
    period: "June 2025 – Present",
    location: "Redmond, WA",
    highlight: "87% Latency Reduction",
    bullets: [
      "Optimized real-time CV models (EfficientNet) from PyTorch to production-grade C++ for embedded platforms.",
      "Embedded optimization: removed unsupported ops (SUM, Transpose) and adapted TFLite conversion pipelines.",
      "Designed real-time SPI data pipelines for model outputs and IMU sensor streams.",
      "Developed high-performance C++ primitives for image processing (debayering, buffer alignment, type conversion).",
      "Executed cross-platform validation to ensure Python/C++ numerical equivalence and inference accuracy."
    ],
    tech: ["C++", "PyTorch", "TFLite", "CUDA", "Embedded Systems"],
    externalLinks: []
  },
  {
    company: "Seattle University",
    role: "Machine Learning Researcher",
    period: "June 2024 – Aug 2024",
    location: "Seattle, WA",
    highlight: "85.98% GCN Accuracy",
    bullets: [
      "Developed fMRI-based autism detection using PyTorch and CUDA, reducing diagnosis time by 30%.",
      "Implemented Graph Convolutional Networks (GCN) and Community-Aware Transformers (CAT) to model brain connectivity.",
      "Applied feature selection using MLPs and GNNs to improve data representation.",
      "Optimized training performance via GPU acceleration, reducing model convergence time."
    ],
    tech: ["Python", "GNNs", "Transformers", "CUDA", "Neuroimaging"],
    externalLinks: []
  },
  {
    company: "Amazon Web Services (AWS)",
    role: "Robotics Software Engineer",
    period: "Sept 2023 – June 2024",
    location: "Seattle, WA",
    highlight: "AWS Availability Rover",
    bullets: [
      "Developed semi-autonomous robotic carts integrating LiDAR and thermal imaging for data center monitoring.",
      "Designed a modular UI for real-time visualization of sensor outputs and server health.",
      "Optimized sensor data processing pipelines in Python and C++ for thermal anomaly detection.",
      "Co-led a cross-functional team of 9 engineers using Agile/Scrum methodologies."
    ],
    tech: ["ROS2", "LiDAR", "C++", "Python", "Agile/Scrum"],
    externalLinks: []
  },
  {
    company: "NIST",
    role: "Software Engineering Researcher",
    period: "June 2023 – Aug 2023",
    location: "Gaithersburg, MD",
    highlight: "75% Latency Reduction",
    bullets: [
      "Designed high-performance, low-latency C++ data transfer tools for Autonomous Vehicle (AV) simulations.",
      "Optimized performance by integrating NS-3, ROS2, and proprietary simulators.",
      "Collaborated with researchers to refine AV safety metrics and real-time operating system performance."
    ],
    tech: ["C++", "NS-3", "ROS2", "AV Simulation"],
    externalLinks: [
      { label: "Paper Publication", url: "https://www.nist.gov/publications/feature-description-assessing-autonomous-vehicle-performance" },
      { label: "NIST News Article", url: "https://www.nist.gov/news-events/news/2023/08/university-students-aid-smart-connected-systems-research-nists-surf-program" }
    ]
  },
  {
    company: "NIST",
    role: "Software Engineering Researcher",
    period: "June 2022 – Aug 2022",
    location: "Gaithersburg, MD",
    highlight: "ADS Safety Testing",
    bullets: [
      "Developed testing methods to detect unsafe behaviors in Automated Driving Systems (ADS) via simulation.",
      "Utilized SoapUI to test and validate safe driving behaviors and industry standards compliance.",
      "Designed automated test cases for real-time vehicle behavior evaluation."
    ],
    tech: ["SoapUI", "AV Testing", "Automated QA"],
  },
  {
    company: "Federal Way Public Schools",
    role: "Information Technology Intern",
    period: "June 2019 – Aug 2021",
    location: "Federal Way, WA",
    highlight: "Infrastructure Support",
    bullets: [
      "Maintained and deployed desktop/mobile hardware for school district students and staff.",
      "Troubleshot interactive whiteboards, projectors, and peripheral network devices.",
      "Managed IT service requests via ticketing systems for organized support operations."
    ],
    tech: ["Hardware", "Networking", "Ticketing Systems"],
    externalLinks: []
  }
];

export default function ExperienceTimeline() {
  const containerRef = useRef(null);
  
  // Progress line logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="py-12" ref={containerRef}>
      <h3 className="text-2xl font-mono mb-16 text-blue-400">01_professional_experience</h3>
      
      <div className="relative ml-32 md:ml-48">
        
        {/* The Execution Thread (Animated Line) */}
        <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-slate-900" />
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-0 top-2 bottom-0 w-[2px] bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10"
        />

        <div className="space-y-24 relative">
          {experiences.map((exp, index) => (
            <React.Fragment key={index}>
              
              {/* 🎓 MS GRAD CHECKPOINT */}
              {exp.role === "Algorithms Engineer V" && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute right-full mr-1 mt-10 flex items-center z-30"
                >
                  <div className="bg-blue-600/10 text-blue-400 border border-blue-500/30 text-[9px] font-mono px-3 py-1 rounded-sm shadow-[0_0_15px_rgba(59,130,246,0.1)] uppercase tracking-tight">
                    MS_GRAD_COMPLETE // JUN 2025
                  </div>
                  <div className="w-8 h-[1px] bg-blue-500/30"></div>
                </motion.div>
              )}

              {/* 🎓 BS GRAD CHECKPOINT */}
              {exp.role === "Algorithms Engineer V" && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute right-full mr-1 mt-44 flex items-center z-30"
                >
                  <div className="bg-cyan-600/10 text-cyan-400 border border-cyan-500/30 text-[9px] font-mono px-3 py-1 rounded-sm shadow-[0_0_15px_rgba(34,211,238,0.1)] uppercase tracking-tight">
                    BS_GRAD_COMPLETE // MAR 2025
                  </div>
                  <div className="w-8 h-[1px] bg-cyan-500/30"></div>
                </motion.div>
              )}

              {/* 🎓 HS GRAD CHECKPOINT */}
              {exp.company === "Federal Way Public Schools" && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="absolute right-full mr-1 -mt-12 flex items-center z-30"
                >
                  <div className="bg-slate-800/50 text-slate-500 border border-slate-700 text-[9px] font-mono px-3 py-1 rounded-sm uppercase tracking-tight">
                    HS_DIPLOMA_COMPLETE // JUN 2021
                  </div>
                  <div className="w-8 h-[1px] bg-slate-700"></div>
                </motion.div>
              )}

              {/* EXPERIENCE CARD */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative pl-12 group"
              >
                {/* Hex Address Index */}
                <span className="absolute -left-16 top-1 font-mono text-[10px] text-slate-700 group-hover:text-blue-500/50 transition-colors">
                  0x0{experiences.length - index}
                </span>

                {/* Timeline Marker */}
                <div className="absolute -left-[7.5px] top-1 z-20">
                  <div className={`w-4 h-4 rounded-full bg-slate-950 border-2 transition-all duration-300 group-hover:scale-125 ${
                    exp.period.includes("Present") ? "border-blue-400" : "border-slate-700 group-hover:border-blue-500"
                  }`}>
                    {exp.period.includes("Present") && (
                      <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75" />
                    )}
                    <div className={`absolute inset-1 rounded-full ${
                       exp.period.includes("Present") ? "bg-blue-400" : "bg-slate-800 group-hover:bg-blue-500"
                    }`} />
                  </div>
                </div>

                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:justify-between items-start mb-4">
                  <div className="max-w-xl">
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                      {exp.role}
                    </h4>
                    <p className="text-slate-400 font-mono text-sm">{exp.company}</p>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-900/50 px-3 py-1 rounded border border-slate-800 mt-2 md:mt-0">
                    [{exp.period}]
                  </span>
                </div>

                {/* Performance Highlight Tag */}
                {exp.highlight && (
                  <div className="inline-flex items-center gap-2 mb-4 px-2 py-0.5 rounded-sm bg-blue-500/5 border border-blue-500/10 text-blue-400/80 text-[10px] font-mono font-bold uppercase tracking-tighter">
                    <span className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
                    STATUS_IMPACT: {exp.highlight}
                  </div>
                )}

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6 max-w-2xl">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start">
                       <span className="text-blue-500/50 mr-3 mt-1.5 text-[8px]">▶</span>
                       {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech & Links Footer */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-900/50">
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="text-[9px] font-mono text-slate-500 border border-slate-800/50 px-2 py-0.5 rounded hover:text-blue-400 hover:border-blue-900/50 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>

                  {exp.externalLinks && exp.externalLinks.length > 0 && (
                    <div className="flex gap-3">
                      {exp.externalLinks.map((link, i) => (
                        <a 
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-mono text-blue-400 bg-blue-500/5 border border-blue-500/20 px-3 py-1 rounded hover:bg-blue-500/20 transition-all flex items-center gap-1"
                        >
                          {link.label}
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}