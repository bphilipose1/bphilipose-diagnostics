import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import { AchievementCard } from "./AchievementCard";

const experiences = [
  {
    company: "Meta (Contract)",
    role: "Algorithms Engineer V",
    period: "June 2025 - Present",
    location: "Redmond, WA",
    highlight: "87% Latency Reduction",
    bullets: [
      "Reduced end-to-end latency by 87% in an embedded head-tracking pipeline by refactoring PyTorch inference flows into optimized C++.",
      "Converted PyTorch models to quantized TFLite on NPUs, including manual calibration setup and Netron graph surgery for unsupported operators.",
      "Built real-time C++ image and sensor pipelines (debayering, format conversion, SPI, IMU synchronization) for stable low-latency execution on embedded hardware.",
      "Trained and tuned lightweight detection/keypoint models with PyTorch DDP + SLURM under strict edge memory and compute constraints.",
      "Led cross-functional validation across ML, firmware, and hardware teams to ensure Python/C++ parity for work presented to multiple Meta VPs.",
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
      "Developed an fMRI-based autism detection model in PyTorch/CUDA, reducing diagnosis time by 30% and improving classification accuracy by 4%.",
      "Implemented Graph Convolutional Networks (GCN) and Community-Aware Transformers (CAT) to model complex brain connectivity.",
      "Applied feature selection using MLPs and GNNs to improve data representation.",
      "Optimized training via GPU acceleration and hyperparameter tuning, reducing convergence time and improving memory efficiency.",
    ],
    tech: ["Python", "GNNs", "Transformers", "CUDA", "Neuroimaging"],
    externalLinks: [],
  },
  {
    type: "capstone",
    company: "Amazon Web Services (AWS)",
    role: "Robotics Software Engineer",
    period: "Sept 2023 - June 2024",
    location: "Seattle, WA",
    highlight: "AWS Availability Rover",
    bullets: [
      "Developed semi-autonomous robotic carts integrating LiDAR and thermal imaging for data center monitoring.",
      "Built a multi-threaded C++/Python sensor-processing framework with structured backend logging.",
      "Designed a modular React-based UI for real-time visualization of sensor outputs and server health.",
      "Co-led a cross-functional team of 9 engineers and ran weekly scrum/planning cycles with AWS stakeholders.",
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
      "Designed high-performance, low-latency C++ data transfer tools for Autonomous Vehicle (AV) simulations.",
      "Integrated NS-3 network simulation with ROS2/physics simulators to synchronize state and broadcast safety-critical events.",
      "Resolved event-driven vs. real-time semantic mismatches by designing efficient state-update pipelines.",
      "Collaborated with researchers to refine AV safety metrics and real-time operating system performance; contributed to publication and colloquium presentation.",
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
      "Developed testing methods to detect unsafe behaviors in Automated Driving Systems (ADS) via simulation.",
      "Utilized SoapUI to test and validate safe driving behaviors and industry standards compliance.",
      "Designed automated test cases for real-time vehicle behavior evaluation.",
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
      "Maintained, repaired, tested, and deployed laptop/desktop hardware across district sites.",
      "Troubleshot mission-critical classroom technology, including interactive whiteboards, projectors, and network printers.",
      "Managed end-to-end IT service requests via ticketing workflows and documented resolutions.",
      "Executed large-scale OS reimaging and device configuration to meet district educational and security standards.",
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
    <div className="py-24 bg-slate-950" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4">
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
    </div>
  );
}
