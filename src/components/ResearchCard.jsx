import React from 'react';

export default function ResearchCard({ title, institution, period, description, metrics, tags, link }) {
  return (
    <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all mb-6">
      <div className="flex flex-col md:flex-row md:justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
          <p className="text-blue-400 font-mono text-sm">{institution} | {period}</p>
        </div>
        <div className="flex gap-2 mt-2 md:mt-0">
          {metrics.map((m, i) => (
            <span key={i} className="h-fit px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-xs font-bold">
              {m}
            </span>
          ))}
        </div>
      </div>

      <p className="text-slate-400 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs font-mono">
            {tag}
          </span>
        ))}
      </div>

      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-bold text-blue-400 hover:text-white transition-colors"
        >
          VIEW PUBLICATION 
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="box-arrow-up-right" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </a>
      )}
    </div>
  );
}