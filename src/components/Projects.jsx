import React from 'react';
import ResearchCard from './ResearchCard';

export default function ProjectsList() {
  const researchData = [
    {
      title: "fMRI-based Autism Detection",
      institution: "Seattle University",
      period: "06/2024 – 08/2024",
      description: "Designed a Community-Aware Transformer (CAT) and GCN to model brain connectivity. Optimized training with CUDA to handle high-dimensional neuroimaging datasets.",
      metrics: ["85.98% Accuracy", "30% Faster Diagnosis"],
      tags: ["PyTorch", "GNNs", "CUDA", "Neuroimaging"],
      
    },
    {
      title: "AV Simulation Performance Optimization",
      institution: "NIST",
      period: "06/2023 – 08/2023",
      description: "Developed a low-latency data transfer tool in C++ for autonomous vehicle simulations. Integrated NS-3 and ROS2 for real-time data exchange.",
      metrics: ["75% Latency Reduction"],
      tags: ["C++", "ROS2", "Parallel Programming", "NS-3"],
      link: "https://www.nist.gov/publications/feature-description-assessing-autonomous-vehicle-performance"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold mb-2 text-white italic">_research_work</h2>
      <p className="text-slate-500 mb-12 font-mono">Peer-reviewed publications and institutional research.</p>
      
      {researchData.map((item, index) => (
        <ResearchCard key={index} {...item} />
      ))}
    </div>
  );
}