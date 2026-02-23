import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const InteractiveBullet = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hex, setHex] = useState(">");

  useEffect(() => {
    if (!isHovered) return undefined;
    const hexChars = "0123456789ABCDEF";
    const interval = setInterval(() => {
      setHex(hexChars[Math.floor(Math.random() * hexChars.length)]);
    }, 80);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHex(">");
      }}
      className="relative text-slate-400 text-sm leading-relaxed flex items-start group/bullet cursor-default py-1"
    >
      <span
        className={`font-mono mr-3 mt-1 text-[10px] w-4 transition-colors duration-200 ${
          isHovered ? "text-blue-400 font-bold" : "text-blue-500/50"
        }`}
      >
        {hex}
      </span>
      <span className={`transition-colors duration-300 ${isHovered ? "text-slate-100" : "text-slate-400"}`}>
        {text}
        {isHovered && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 ml-1 bg-blue-500 align-middle"
          />
        )}
      </span>
    </motion.li>
  );
};
