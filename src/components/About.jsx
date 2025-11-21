import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

const About = () => {
  const { about } = content;

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-bold text-text">
            <span className="text-accent font-mono mr-2">01.</span>
            {about.title}
          </h2>
          <div className="h-px bg-secondary flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 text-muted text-lg leading-relaxed">
            <p className="mb-6">{about.description}</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-secondary/50 p-6 rounded-lg hover:bg-secondary transition-colors"
            >
              <h3 className="text-accent font-mono mb-4 text-lg">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((skill, sIdx) => (
                  <li key={sIdx} className="text-muted flex items-center gap-2 text-sm">
                    <span className="text-accent">▹</span> {skill}
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

export default About;
