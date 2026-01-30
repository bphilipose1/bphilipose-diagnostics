import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ExperienceCard } from './ExperienceCard';
import { AchievementCard } from './AchievementCard';

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
    tech: ["C++", "PyTorch", "TFLite", "CUDA", "Embedded Systems", "SLURM", "Distributed Neural Network Training"],
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
    type: "capstone",
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
    tech: ["Computer Vision", "Embedded Systems", "LiDAR", "C++", "Python", "Agile/Scrum"],
    externalLinks: []
  },
  {
    type: "achievement",
    company: "INRIX x AWS Hackathon",
    role: "1st Place Winner - ResponSight",
    period: "Dec 2023",
    highlight: "Defied tradition to win as seniors",
    bullets: [
      "Led a team to design a scalable ML model predicting traffic collision hotspots for EMS response.",
      "Developed a full-stack application using AWS SageMaker and Python."
    ],
    tech: ["AWS SageMaker", "Python", "ML", "Full Stack"],
    externalLinks: [{ label: "GeekWire Feature", url: "https://www.geekwire.com/2023/these-computer-science-seniors-defied-tradition-to-win-the-first-hackathon-they-ever-entered/" }]
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

// Sub-component for the Lightning/Electricity effect
const LightningBolt = () => {
  // Two different jagged paths to morph between
  const pathA = "M 20 0 L 30 20 L 10 40 L 30 60 L 10 80 L 20 100";
  const pathB = "M 20 0 L 10 20 L 35 45 L 5 55 L 30 85 L 20 100";

  return (
    <div className="absolute left-[-15px] top-6.5 bottom-0 w-[32px] z-20 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ 
          top: ["-30%", "120%"],
        }}
        transition={{ 
          duration: 4.5, // Slower surge
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute w-full h-80"
      >
        <svg width="100%" height="100%" viewBox="0 0 40 100" preserveAspectRatio="none">
          {/* Main Electric Path with Morphing */}
          <motion.path
            d={pathA}
            animate={{ 
              d: [pathA, pathB, pathA], // Morphing the shape
              opacity: [0.2, 1, 0.4, 1, 0.2], // Chaotic discharge
              x: [0, -3, 3, -1, 0] // High-frequency jitter
            }}
            transition={{ 
              d: { duration: 0.2, repeat: Infinity, ease: "linear" },
              opacity: { duration: 0.15, repeat: Infinity },
              x: { duration: 0.1, repeat: Infinity }
            }}
            fill="transparent"
            stroke="#60a5fa"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 12px #3b82f6)" }}
          />

          {/* Core Strike with Morphing */}
          <motion.path
            d={pathA}
            animate={{ d: [pathA, pathB, pathA] }}
            transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
            fill="transparent"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default function ExperienceTimeline() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="py-24 bg-slate-950" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-mono mb-20 text-blue-400">
          01_professional_experience
        </h3>
        
        <div className="relative ml-8 md:ml-32"> 
          {/* 1. Static Track */}
          <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-slate-900" />
          
          {/* 2. Blue Progress Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 top-2 bottom-0 w-[2px] bg-blue-500 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />


          <div className="space-y-24 relative">
            {experiences.map((exp, index) => {
              if (exp.type === "achievement") {
                return <AchievementCard key={index} exp={exp} />;
              }
              return (
                <ExperienceCard 
                  key={index} 
                  exp={exp} 
                  index={index} 
                  total={experiences.length} 
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}