const skillGroups = [
  {
    category: 'Intelligence',
    skills: [
      { name: 'PyTorch', level: 96 }, // Used at Meta and fMRI research [cite: 20, 29]
      { name: 'Computer Vision', level: 98 }, // Core of Meta and AWS roles [cite: 20, 37]
      { name: 'LLMs/RAG', level: 94 }, // Focused area in Masters and Capstone [cite: 8, 63]
      { name: 'Transformers', level: 90 }, // Applied in fMRI research [cite: 30]
      { name: 'Scikit-Learn', level: 92 }, // Foundation of ML toolkit [cite: 83]
      { name: 'OpenCV', level: 95 } // Standard in your CV pipelines [cite: 83]
    ]
  },
  {
    category: 'Systems & Compute',
    skills: [
      { name: 'C++', level: 99 }, // Meta role and high-performance primitives 
      { name: 'CUDA', level: 92 }, // GPU acceleration in research and projects [cite: 29, 66]
      { name: 'Parallel Computing', level: 95 }, // Core coursework and implementation [cite: 8, 47]
      { name: 'Embedded Systems', level: 98 }, // Professional focus at Meta [cite: 20, 21]
      { name: 'MPI/Pthreads', level: 90 }, // Distributed clustering and sorting projects [cite: 70, 75]
      { name: 'Linux/Bash', level: 97 } // Native development environment [cite: 83]
    ]
  },
  {
    category: 'Cloud & Data',
    skills: [
      { name: 'AWS (EMR/SageMaker)', level: 90 }, // Used for Search Engine and Hackathon [cite: 63]
      { name: 'Apache Spark', level: 88 }, // Distributed computing implementation [cite: 63]
      { name: 'Distributed Systems', level: 94 }, // Masters specialization and DHT project [cite: 8, 63]
      { name: 'Docker/CI-CD', level: 85 }, // Mentioned in technical tools [cite: 83]
      { name: 'SQL/MongoDB', level: 90 } // Full-stack project and foundational skills [cite: 63, 83]
    ]
  }
]

export default skillGroups