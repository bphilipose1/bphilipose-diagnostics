export const projectData = [
  {
    id: 3,
    title: "NPU Quantization",
    tag: "Embedded AI",
    description: "Production inference pipeline converting PyTorch vision models to quantized TFLite, cutting embedded NPU latency by 87% through model surgery and C++ optimization.",
    metrics: [
      { value: "87%", label: "Latency Reduction" },
      { value: "NPU", label: "Target Runtime" }
    ],
    stack: ["C++", "PyTorch", "TFLite", "Netron", "NPU Optimization"],
    constraint: "High-parameter vision models were too heavy for embedded NPUs; unsupported operators in converted computation graphs blocked reliable fixed-point deployment.",
    implementation: "Built a production C++ inference pipeline, converted models to quantized TFLite with manual calibration, performed Netron graph surgery to replace unsupported operators, and validated full Python/C++ parity for stable real-time NPU inference. Presented results to multiple Meta VPs."
  },
  {
    id: 2,
    title: "AV Simulation",
    tag: "Systems",
    description: "High-performance C++ data transfer tool synchronizing NS-3 and ROS2 simulators for AV safety testing, achieving a 75% reduction in latency.",
    metrics: [
      { value: "75%", label: "Latency Reduction" },
      { value: "NIST", label: "Project" }
    ],
    stack: ["C++", "ROS2", "NS-3", "MPI"],
    constraint: "Autonomous vehicle safety testing requires microsecond-level synchronization between a network simulator (NS-3) and a physics simulator (ROS2) — event-driven and real-time semantics are fundamentally mismatched.",
    implementation: "Architected a high-performance C++ bridge resolving the event-driven/real-time semantic mismatch via efficient state-update pipelines. Leveraged parallel programming and object-oriented design to scale simulation complexity. Results contributed to a NIST colloquium presentation."
  },
  {
    id: 1,
    title: "fMRI GNNs",
    tag: "Neuroscience",
    description: "Hybrid GCN + Community-Aware Transformer achieving 85.98% accuracy on autism detection from non-Euclidean fMRI brain-connectivity graphs.",
    metrics: [
      { value: "85.98%", label: "Accuracy" },
      { value: "GCN/CAT", label: "Architecture" }
    ],
    stack: ["PyTorch", "GNNs", "Transformers", "CUDA"],
    constraint: "Standard CNNs struggle with non-Euclidean brain connectivity. Accurate autism diagnosis requires modeling complex regional interactions encoded in fMRI functional connectivity graphs.",
    implementation: "Implemented a hybrid Graph Convolutional Network (GCN) and Community-Aware Transformer (CAT) to capture both local connectivity and long-range functional communities. Optimized data throughput with custom CUDA kernels, improving training convergence and reducing diagnosis time by 30%."
  },
  {
    id: 4,
    title: "AWS Availability Rover",
    tag: "Robotics",
    description: "Semi-autonomous data center monitoring robot with LiDAR + thermal sensor fusion, real-time React visualization UI, and structured multi-threaded C++/Python pipelines.",
    metrics: [
      { value: "9-person", label: "Team Led" },
      { value: "LiDAR + Thermal", label: "Sensor Fusion" }
    ],
    stack: ["C++", "Python", "React", "LiDAR", "OpenCV", "MySQL"],
    constraint: "Data center monitoring requires reliable autonomous navigation, real-time server rack health visualization, and consistent barcode scanning across high-density, electromagnetically noisy environments.",
    implementation: "Developed semi-autonomous robotic carts integrating LiDAR and thermal imaging for data center monitoring. Built a multi-threaded C++/Python sensor-processing framework with structured logging, a React UI for real-time visualization of sensor outputs and server health, and led a cross-functional team of 9 engineers through Agile scrum cycles with AWS stakeholders."
  },
  {
    id: 5,
    title: "LegalEase",
    tag: "LLMs / RAG",
    description: "Locally hosted AI chatbot using fine-tuned LLMs and RAG over statutory datasets to automate business structure selection and filing for WA and DE.",
    metrics: [
      { value: "LLM + RAG", label: "Architecture" },
      { value: "MS Capstone", label: "Project" }
    ],
    stack: ["LLMs", "RAG", "Fine-tuning", "Python", "LangChain"],
    constraint: "LLMs hallucinate on specific legal regulatory requirements, and state-specific business filing rules change frequently — making static training data insufficient for reliable AI-driven recommendations.",
    implementation: "Engineered a locally hosted chatbot with fine-tuned LLMs and RAG over statutory legal datasets, mitigating hallucinations via data grounding and targeted fine-tuning on regulatory corpora. Built legal document processing pipelines ensuring 100% alignment with WA and DE requirements. Collaborated with an interdisciplinary CS and Law team, optimizing inference for secure local deployment."
  }
];
