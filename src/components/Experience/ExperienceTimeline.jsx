import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";

const experiences = [
  {
    company: "Current Role",
    role: "Software & ML Engineer",
    period: "2025 - Present",
    highlight: "Production Engineering",
    bullets: [
      "Builds efficient software systems and production-quality machine-learning tooling.",
      "Public portfolio content intentionally omits employer, product, project, and implementation details."
    ],
    tech: ["Software Engineering", "Machine Learning", "Systems"],
    externalLinks: []
  },
  {
    company: "Academic Research",
    role: "Machine Learning Researcher",
    period: "2024 - 2025",
    highlight: "Applied Research",
    bullets: [
      "Conducted academic research on practical machine-learning methods and evaluation.",
      "Focused on thoughtful experimentation, reproducible workflows, and clear technical communication."
    ],
    tech: ["Research", "Machine Learning", "Data Analysis"],
    externalLinks: []
  },
  {
    company: "Student Engineering",
    role: "Software Engineer & Team Lead",
    period: "2022 - 2024",
    highlight: "Collaborative Development",
    bullets: [
      "Led and contributed to multidisciplinary student engineering projects.",
      "Built software prototypes spanning systems, data, and user-facing applications."
    ],
    tech: ["Software Development", "Systems", "Web Applications"],
    externalLinks: []
  }
];

export default function ExperienceTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end center"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef}>
      <h3 className="text-2xl font-mono mb-20 text-blue-400">_professional_experience</h3>
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
