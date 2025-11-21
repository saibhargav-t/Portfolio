import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

const Experience = () => {
  const { experience } = content;

  return (
    <section id="experience" className="py-20 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-text">
            <span className="text-accent font-mono mr-2">02.</span>
            {experience.title}
          </h2>
          <div className="h-px bg-secondary flex-grow max-w-xs"></div>
        </div>

        <div className="space-y-12">
          {experience.jobs.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative border-l-2 border-secondary pl-8 ml-4"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
              
              <h3 className="text-xl font-bold text-text mb-1">
                {job.role} <span className="text-accent">@ {job.company}</span>
              </h3>
              <p className="font-mono text-sm text-muted mb-4">{job.period}</p>
              
              <p className="text-muted mb-4">{job.description}</p>
              
              <ul className="space-y-2">
                {job.achievements.map((achievement, aIdx) => (
                  <li key={aIdx} className="text-muted text-sm flex items-start gap-2">
                    <span className="text-accent mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
