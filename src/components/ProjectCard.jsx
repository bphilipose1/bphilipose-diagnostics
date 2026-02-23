import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function ProjectCard({ id, title, tag }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [20, -20]);
  const rotateY = useTransform(x, [-100, 100], [-20, 20]);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(rotateX, springConfig);
  const springY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    x.set(mouseX - width / 2);
    y.set(mouseY - height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        layoutId={`card-${id}`}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        className="relative p-6 bg-slate-900 rounded-2xl border border-slate-800 group-hover:border-blue-500 transition-colors duration-500"
      >
        <motion.div
          layout
          className="flex justify-between items-start mb-4"
          style={{ transform: "translateZ(20px)" }}
        >
          <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
            {tag}
          </span>
        </motion.div>

        <motion.div layout style={{ transform: "translateZ(40px)" }}>
          <h4 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h4>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Technical implementation and 3D optimization using {tag} architectures.
          </p>
        </motion.div>

        <motion.div layout style={{ transform: "translateZ(30px)" }}>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors flex items-center gap-1">
            View Case Study <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
          </span>
        </motion.div>

        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
          style={{ transform: "translateZ(-10px)" }}
        />
      </motion.div>
    </div>
  );
}
