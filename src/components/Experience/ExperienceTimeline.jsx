import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import { AchievementCard } from "./AchievementCard";

const experiences = [
  {
    company: "Meta Reality Labs",
    role: "Algorithms Engineer",
    period: "June 2025 - Present",
    location: "Redmond, WA",
    highlight: "ML Systems & Performance",
    bullets: [
      "Build and optimize machine-learning systems for resource-constrained, real-time applications.",
      "Work across algorithm development, systems performance, and deployment constraints; implementation details are confidential.",
    ],
    tech: ["C++", "Python", "Machine Learning", "Systems Optimization"],
    externalLinks: [],
  },
  {
    company: "Seattle University",
    role: "Machine Learning Researcher",
    period: "June 2024 - Aug 2024",
    location: "Seattle, WA",
    highlight: "Graph ML Research",
    bullets: [
      "Developed graph-learning approaches for fMRI connectivity analysis in an academic research setting.",
      "Explored efficient training and evaluation workflows for non-Euclidean data.",
    ],
    tech: ["Python", "GNNs", "Transformers", "CUDA", "Neuroimaging"],
    externalLinks: [],
  },
  {
    type: "capstone",
    company: "Seattle University Capstone",
    role: "Robotics Software Engineer — Team Lead",
    period: "Sept 2023 - June 2024",
    location: "Seattle, WA",
    highlight: "Robotics Monitoring Prototype",
    bullets: [
      "Co-led a student team building a semi-autonomous monitoring prototype.",
      "Developed sensor-processing software and an operator-facing visualization interface.",
    ],
    tech: ["Computer Vision", "Embedded Systems", "C++", "Python", "React"],
    externalLinks: [],
  },
  {
    type: "achievement",
    company: "INRIX x AWS Hackathon",
    role: "1st Place Winner — ResponSight",
    period: "Dec 2023",
    highlight: "Traffic-Safety ML",
    bullets: [
      "Led a team that designed an ML-assisted approach to identifying traffic-collision hotspots for emergency response.",
      "Developed a full-stack prototype using Python and AWS services.",
    ],
    tech: ["AWS SageMaker", "Python", "ML", "Full Stack"],
    externalLinks: [{ label: "GeekWire Feature", url: "https://www.geekwire.com/2023/these-computer-science-seniors-defied-tradition-to-win-the-first-hackathon-they-ever-entered/" }],
  },
  {
    company: "NIST",
    role: "Software Engineering Researcher",
    period: "June 2023 - Aug 2023",
    location: "Gaithersburg, MD",
    highlight: "AV Performance Research",
    bullets: [
      "Contributed software engineering and simulation research to autonomous-vehicle performance assessment.",
      "Supported publicly documented research and colloquium presentations.",
    ],
    tech: ["C++", "Simulation", "Autonomous Systems"],
    externalLinks: [
      { label: "Paper Publication", url: "https://www.nist.gov/publications/feature-description-assessing-autonomous-vehicle-performance" },
      { label: "NIST News Article", url: "https://www.nist.gov/news-events/news/2023/08/university-students-aid-smart-connected-systems-research-nists-surf-program" },
    ],
  },
  {
    company: "NIST",
    role: "Software Engineering Researcher",
    period: "June 2022 - Aug 2022",
    location: "Gaithersburg, MD",
    highlight: "ADS Safety Testing",
    bullets: [
      "Developed simulation-based methods and evaluation workflows for automated-driving safety research.",
      "Presented work at the NIST Colloquium.",
    ],
    tech: ["Software Testing", "Simulation", "Automated QA"],
  },
  {
    company: "Federal Way Public Schools",
    role: "Information Technology Intern",
    period: "June 2019 - Aug 2021",
    location: "Federal Way, WA",
    highlight: "Infrastructure Support",
    bullets: [
      "Supported district-wide classroom technology through hardware repair, OS imaging, deployment, and ticket-based troubleshooting.",
      "Maintained reliable operation of laptops, displays, projectors, printers, and related infrastructure.",
    ],
    tech: ["Hardware", "Networking", "Ticketing Systems"],
    externalLinks: [],
  },
];

export default function ExperienceTimeline() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef}>
      <h3 className="text-2xl font-mono mb-20 text-blue-400">_professional_experience</h3>

      <div className="relative ml-8 md:ml-32">
        <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-slate-900" />

        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-0 top-2 bottom-0 w-[2px] bg-blue-500 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        />

        <div className="space-y-24 relative">
          {experiences.map((exp, index) => {
            if (exp.type === "achievement") {
              return <AchievementCard key={index} exp={exp} />;
            }
            return <ExperienceCard key={index} exp={exp} />;
          })}
        </div>
      </div>
    </div>
  );
}
