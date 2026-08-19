import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'M.S. Computer Science',
    detail: 'Data Science Specialization',
    school: 'Seattle University',
    period: '2023 - 2025',
    coursework: ['Machine Learning', 'Parallel Computing', 'Distributed Systems', 'Big Data', 'Visual Analytics'],
  },
  {
    degree: 'B.S. Computer Science & Computer Engineering',
    detail: 'Dual Major',
    school: 'Seattle University',
    period: '2021 - 2025',
    coursework: ['Embedded Systems', 'Computer Architecture', 'Signals & Systems', 'Data Communications', 'Algorithm Analysis'],
  },
];

export default function EducationBIOS() {
  return (
    <section className="py-12 border-t border-slate-900">
      <h3 className="text-2xl text-white font-semibold mb-10">Education</h3>
      <div className="space-y-6">
        {education.map((item, index) => (
          <motion.article
            key={item.degree}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="bg-slate-950/70 border border-slate-800 p-6 rounded-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold text-xl">{item.degree}</h4>
                <p className="text-blue-400 text-sm mt-1">{item.detail}</p>
                <p className="text-slate-400 text-sm mt-3">{item.school} · {item.period}</p>
                <p className="text-slate-400 text-sm mt-1">GPA: 4.00 / 4.00</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-widest mb-3">Relevant coursework</p>
                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((course) => (
                    <span key={course} className="px-2.5 py-1 text-xs text-slate-300 bg-slate-900 border border-slate-700 rounded">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
