import React from 'react';
import { motion } from 'framer-motion';
import SkillGroup from './Skills/SkillGroup'
import skillGroups from '../data/skillGroups'

export default function SkillsMatrix() {

  return (
    <div className="py-24 w-full text-white overflow-hidden">
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45 }}
        className="text-2xl font-mono mb-12 text-white flex items-center gap-3"
      >
        <span className="text-blue-500">/</span>_system_capabilities
      </motion.h3>
      
      {/* Changed to items-stretch to ensure boxes are equal height */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {skillGroups.map((group, i) => (
          <SkillGroup key={group.category} group={group} index={i} />
        ))}
      </div>
    </div>
  );
}