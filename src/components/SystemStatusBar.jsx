import React, { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function SystemStatusBar() {
  const { scrollYProgress } = useScroll();
  const [bufferPercent, setBufferPercent] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.round(latest * 100);
    setBufferPercent(prev => prev === next ? prev : next);
  });

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 px-6 pb-4 pointer-events-none">
      <div className="max-w-6xl mx-auto flex justify-between items-end font-mono text-[10px] text-blue-500/60 px-2">
        <div className="flex gap-4">
          <span>LOC: [47.3229 N, 122.3126 W]</span>
          <span className="hidden md:inline">ENCODING: UTF-8</span>
        </div>
        <div>
          <span>BUFFER_LOAD: {bufferPercent}%</span>
        </div>
      </div>
    </div>
  );
}
