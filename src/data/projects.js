export const projectData = [
  {
    id: 1,
    title: "Graph ML for Neuroimaging",
    tag: "Research",
    description: "Academic research exploring graph-learning methods for fMRI connectivity analysis.",
    metrics: [
      { value: "GNNs", label: "Modeling" },
      { value: "Research", label: "Context" }
    ],
    stack: ["PyTorch", "GNNs", "Transformers", "CUDA"],
    constraint: "Functional-connectivity data is naturally relational, so meaningful analysis requires approaches that model both local structure and long-range interactions.",
    implementation: "Developed and evaluated graph-learning workflows for an academic neuroimaging research project, with attention to model design, training efficiency, and reproducible evaluation."
  },
  {
    id: 2,
    title: "Autonomous Systems Simulation",
    tag: "Systems",
    description: "Public-sector research on simulation and software tooling for autonomous-vehicle performance assessment.",
    metrics: [
      { value: "NIST", label: "Research" },
      { value: "C++", label: "Systems" }
    ],
    stack: ["C++", "Simulation", "Autonomous Systems"],
    constraint: "Safety-oriented autonomous-systems research needs robust simulation and evaluation methods.",
    implementation: "Contributed software engineering and simulation research to publicly documented autonomous-vehicle performance assessment work."
  },
  {
    id: 3,
    title: "Embedded ML Systems",
    tag: "Professional Work",
    description: "Algorithms and systems work for efficient, real-time machine-learning applications.",
    metrics: [
      { value: "ML Systems", label: "Focus" },
      { value: "Real-Time", label: "Context" }
    ],
    stack: ["C++", "Python", "Machine Learning", "Systems Optimization"],
    constraint: "Production ML systems must balance model quality with latency, memory, power, and reliability constraints.",
    implementation: "Current professional work focuses on algorithm development and systems performance for resource-constrained ML applications. Specific implementation details are confidential."
  },
  {
    id: 4,
    title: "Robotics Monitoring Prototype",
    tag: "Robotics",
    description: "Student capstone prototype combining sensor-processing software with an operator-facing visualization interface.",
    metrics: [
      { value: "9-person", label: "Team" },
      { value: "Capstone", label: "Project" }
    ],
    stack: ["C++", "Python", "React", "Computer Vision"],
    constraint: "A useful robotics prototype needs dependable sensor data handling and a clear way for operators to understand system state.",
    implementation: "Co-led a student team developing a semi-autonomous monitoring prototype, contributing sensor-processing software and a visualization interface."
  },
  {
    id: 5,
    title: "LegalEase",
    tag: "LLMs / RAG",
    description: "Academic prototype exploring document-grounded assistance for business-filing workflows.",
    metrics: [
      { value: "LLM + RAG", label: "Architecture" },
      { value: "MS Capstone", label: "Project" }
    ],
    stack: ["LLMs", "RAG", "Python"],
    constraint: "High-stakes information workflows need reliable grounding in source documents and clear treatment of uncertainty.",
    implementation: "Collaborated with an interdisciplinary CS and Law team on an academic RAG prototype for document-grounded assistance and privacy-conscious workflows."
  }
];
