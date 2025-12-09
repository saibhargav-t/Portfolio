import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const { education } = content;

  return (
    <section id="education" className="py-20 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-text">
            <span className="text-accent font-mono mr-2">05.</span>
            {education.title}
          </h2>
          <div className="h-px bg-secondary flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.items.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-secondary/30 border border-white/5 p-6 rounded-lg hover:border-accent/50 transition-all duration-300 relative group"
            >
              <div className="absolute top-6 right-6 text-accent/20 group-hover:text-accent/50 transition-colors">
                <FaGraduationCap size={32} />
              </div>
              
              <h3 className="text-lg font-bold text-text mb-2 pr-10">{edu.institution}</h3>
              <p className="text-accent font-mono text-xs mb-4">{edu.degree}</p>
              
              <div className="flex justify-between items-center text-xs text-muted border-t border-white/5 pt-4 mt-2">
                <span>{edu.period}</span>
                <span className="font-bold text-text">{edu.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
