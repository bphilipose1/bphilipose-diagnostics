import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";

const experiences = [
  {
    company: "Meta Reality Labs",
    role: "Algorithms Engineer",
    period: "2025 - Present",
    highlight: "ML Systems & Robotics",
    bullets: [
      "Build machine-learning and systems software for embodied-AI and robotics research, spanning perception, simulation, sensor-driven learning, and performance engineering.",
      "Built and demonstrated pick-and-place and wearable-input teleoperation workflows for multi-DoF robot arms and dexterous hands.",
      "Trained reinforcement-learning policies for dexterous manipulation, progressing from Brax/MJX to MuJoCo Warp and PyTorch; developed a cube-reorientation policy using proprioception and domain randomization."
    ],
    tech: ["Python", "C++", "PyTorch", "TensorFlow", "CUDA", "Brax", "MJX", "MuJoCo Warp", "SLURM", "Linux"],
    externalLinks: []
  },
  {
    company: "Seattle University",
    role: "Machine Learning Researcher",
    period: "2024",
    highlight: "Graph ML Research",
    bullets: [
      "Conducted academic research on graph machine learning for neuroimaging analysis.",
      "Focused on model design, GPU-accelerated training, evaluation, and reproducible experimentation."
    ],
    tech: ["Python", "PyTorch", "CUDA", "GNNs", "Transformers"],
    externalLinks: []
  },
  {
    company: "AWS-sponsored Capstone",
    role: "Robotics Software Engineer & Team Lead",
    period: "2023 - 2024",
    highlight: "Robotics Systems",
    bullets: [
      "Co-led a multidisciplinary student team building a robotics monitoring prototype.",
      "Contributed systems software, sensor integration, real-time data processing, and an operator-facing visualization interface."
    ],
    tech: ["C++", "Python", "React", "MySQL", "Computer Vision"],
    externalLinks: []
  },
  {
    company: "National Institute of Standards and Technology",
    role: "Summer Undergraduate Research Fellow",
    period: "2022 - 2023",
    highlight: "Autonomous Systems Research",
    bullets: [
      "Contributed software engineering and simulation research for autonomous-systems performance assessment and safety testing.",
      "Presented research work at the NIST Colloquium."
    ],
    tech: ["C++", "ROS 2", "NS-3", "Simulation", "Parallel Programming"],
    externalLinks: []
  }
];

export default function ExperienceTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end center"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef}>
      <h3 className="text-2xl font-mono mb-20 text-blue-400">Experience</h3>
      <div className="relative ml-8 md:ml-32">
        <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-slate-900" />
        <motion.div style={{ scaleY, originY: 0 }} className="absolute left-0 top-2 bottom-0 w-[2px] bg-blue-500 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
        <div className="space-y-24 relative">
          {experiences.map((exp) => <ExperienceCard key={exp.company} exp={exp} />)}
        </div>
      </div>
    </div>
  );
}
