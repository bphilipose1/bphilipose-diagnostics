import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectData } from '../data/projects';

export default function ProjectGrid() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="py-12 border-t border-slate-900">
      <h3 className="text-2xl font-mono mb-8 text-white flex items-center">
        <span className="text-blue-500 mr-2">/</span> 01_featured_work
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            tag={project.tag}
            description={project.description}
            onClick={() => setActiveProject(project)}
          />
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
