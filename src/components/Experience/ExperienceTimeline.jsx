import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import { AchievementCard } from "./AchievementCard";

const experiences = [
  {
    company: "Meta",
    role: "Algorithms Engineer",
    period: "June 2025 - Present",
    location: "Redmond, WA",
    highlight: "87% Latency Reduction",
    bullets: [
      "Build and optimize embedded ML pipelines for real-time perception and tracking.",
      "Reduced end-to-end latency by 87% through C++ optimization, quantized TFLite deployment, and hardware-aware model changes for NPUs.",
      "Partner across ML, firmware, and hardware teams to validate Python/C++ parity and support field-ready deployment.",
    ],
    tech: ["C++", "PyTorch", "TFLite", "Netron", "NPU Optimization", "Embedded Systems", "SLURM"],
    externalLinks: [],
  },
  {
    company: "Seattle University",
    role: "Machine Learning Researcher",
    period: "June 2024 - Aug 2024",
    location: "Seattle, WA",
    highlight: "85.98% GCN Accuracy",
    bullets: [
      "Developed an fMRI-based autism-classification system using PyTorch, CUDA, GCNs, and Community-Aware Transformers.",
      "Achieved 85.98% peak accuracy while improving training efficiency and reducing diagnosis-processing time by 30%.",
    ],
    tech: ["Python", "GNNs", "Transformers", "CUDA", "Neuroimaging"],
    externalLinks: [],
  },
  {
    type: "capstone",
    company: "Amazon Web Services (AWS)",
    role: "Robotics Software Engineer — Team Lead",
    period: "Sept 2023 - June 2024",
    location: "Seattle, WA",
    highlight: "AWS Availability Rover",
    bullets: [
      "Co-led a nine-person team building the AWS Availability Rover, a semi-autonomous platform for data-center monitoring.",
      "Built C++/Python sensor pipelines and a React visualization interface integrating LiDAR, thermal imaging, barcode scanning, and structured backend logging.",
    ],
    tech: ["Computer Vision", "Embedded Systems", "LiDAR", "C++", "Python", "React", "MySQL"],
    externalLinks: [],
  },
  {
    type: "achievement",
    company: "INRIX x AWS Hackathon",
    role: "1st Place Winner - ResponSight",
    period: "Dec 2023",
    highlight: "Defied tradition to win as seniors",
    bullets: [
      "Led a team to design a scalable ML model predicting traffic collision hotspots for EMS response.",
      "Developed a full-stack application using AWS SageMaker and Python.",
    ],
    tech: ["AWS SageMaker", "Python", "ML", "Full Stack"],
    externalLinks: [{ label: "GeekWire Feature", url: "https://www.geekwire.com/2023/these-computer-science-seniors-defied-tradition-to-win-the-first-hackathon-they-ever-entered/" }],
  },
  {
    company: "NIST",
    role: "Software Engineering Researcher",
    period: "June 2023 - Aug 2023",
    location: "Gaithersburg, MD",
    highlight: "75% Latency Reduction",
    bullets: [
      "Built low-latency C++ and ROS2 tooling to synchronize NS-3 network simulations with real-time autonomous-vehicle simulation.",
      "Reduced latency by 75% and contributed to a NIST publication and colloquium presentation on AV-performance assessment.",
    ],
    tech: ["C++", "NS-3", "ROS2", "AV Simulation"],
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
      "Developed simulation-based testing methods for unsafe automated-driving behavior and automated evaluation workflows.",
      "Helped refine AV safety metrics and presented the work at the NIST Colloquium.",
    ],
    tech: ["SoapUI", "AV Testing", "Automated QA"],
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
