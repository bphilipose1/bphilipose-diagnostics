import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const projectData = [
  {
    id: 1,
    title: "fMRI GNNs",
    tag: "Neuroscience",
    metrics: [
      { value: "85.98%", label: "Accuracy" },
      { value: "GCN/CAT", label: "Architecture" }
    ],
    stack: ["PyTorch", "GNNs", "Transformers", "CUDA"],
    constraint: "Standard CNNs struggle with non-Euclidean brain connectivity. Diagnosis requires modeling complex regional interactions within fMRI scans.",
    implementation: "Implemented a hybrid Graph Convolutional Network and Community-Aware Transformer (CAT). Optimized data throughput with custom CUDA kernels to identify biomarkers for autism detection."
  },
  {
    id: 2,
    title: "AV Simulation",
    tag: "Systems",
    metrics: [
      { value: "<1ms", label: "Data Latency" },
      { value: "NIST", label: "Project" }
    ],
    stack: ["C++", "ROS2", "NS-3", "MPI"],
    constraint: "Autonomous vehicle safety testing requires microsecond-level synchronization between network (NS-3) and physics (ROS2) simulators.",
    implementation: "Architected a high-performance C++ bridge for real-time synchronization. Leveraged distributed MPI processes to scale simulation complexity without sacrificing temporal accuracy."
  },
  {
    id: 3,
    title: "NPU Quantization",
    tag: "Embedded AI",
    metrics: [
      { value: "87%", label: "Latency Reduction" },
      { value: "NPU", label: "Target Runtime" }
    ],
    stack: ["C++", "PyTorch", "TFLite", "Netron", "NPU Optimization"],
    constraint: "High-parameter vision models were too heavy for embedded NPUs, and unsupported operators in converted graphs blocked reliable fixed-point deployment.",
    implementation: "Built a production C++ inference pipeline, converted models to quantized TFLite with manual calibration, performed Netron graph surgery for unsupported ops, and validated Python/C++ parity for stable real-time inference."
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
