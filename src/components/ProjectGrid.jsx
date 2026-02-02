import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const projectData = [
  {
    id: 1,
    title: "Meta Algorithms Engineer",
    tag: "Embedded AI",
    metrics: [
      { value: "87%", label: "Latency Reduction" },
      { value: "C++", label: "Production Stack" }
    ],
    stack: ["C++", "PyTorch", "TFLite", "Netron", "Embedded Systems"],
    constraint: "Porting complex computer vision models (ResNet, EfficientNet) from Python to resource-constrained embedded platforms while maintaining 1:1 numerical accuracy.",
    implementation: "Optimized inference by removing unsupported TFLite operations and reducing channel widths. Developed high-performance C++ primitives for image processing and implemented SPI blob data pipelines for real-time hardware-in-the-loop validation."
  },
  {
    id: 2,
    title: "HFT Arbitrage Detector",
    tag: "Distributed Systems",
    metrics: [
      { value: "UDP", label: "Protocol" },
      { value: "Multi-threaded", label: "Architecture" }
    ],
    stack: ["Python", "Networking", "Graph Algorithms", "HFT"],
    constraint: "High-frequency data streams require microsecond responses to capture market cycles before they disappear.",
    implementation: "Designed a real-time arbitrage detection system leveraging the Bellman-Ford algorithm for cycle detection over UDP-based price feeds. Optimized data processing via multi-threading to minimize system latency."
  },
  {
    id: 3,
    title: "AV Simulation Sync",
    tag: "Systems / NIST",
    metrics: [
      { value: "Real-time", label: "Performance" },
      { value: "Low-Latency", label: "Data Transfer" }
    ],
    stack: ["C++", "ROS2", "NS-3", "Parallel Programming"],
    constraint: "Autonomous vehicle (AV) safety testing requires high-performance, low-latency data exchange between disparate simulation environments.",
    implementation: "Developed a C++ data transfer tool to enable seamless multi-simulation connectivity. Optimized performance by integrating NS-3 and ROS2, leveraging algorithmic efficiency and object-oriented design to improve sensing platform accuracy."
  }
];

export default function ProjectGrid() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="py-12 border-t border-slate-900">
      <h3 className="text-2xl font-mono mb-8 text-white flex items-center">
        <span className="text-blue-500 mr-2">/</span> 01_featured_work
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectData.map((project) => (
          <div key={project.id} onClick={() => setActiveProject(project)}>
            <ProjectCard 
              id={project.id} // Added ID prop
              title={project.title} 
              tag={project.tag} 
            />
          </div>
        ))}
      </div>

      <ProjectModal 
        project={activeProject} 
        isOpen={!!activeProject} 
        onClose={() => setActiveProject(null)} 
      />
    </section>
  );
}