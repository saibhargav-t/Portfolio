import React from 'react';
import { motion } from 'framer-motion';

const TutorialsCTA = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-secondary/30 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-text mb-6">
            Want to Learn How I Build Things?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I've documented my learning journey in detailed tutorials. From Spring Boot to Microservices, check out my step-by-step guides designed for fellow developers.
          </p>
          <button 
            onClick={() => onNavigate('tutorials')}
            className="px-8 py-3 bg-accent text-primary font-bold rounded hover:bg-accent/80 transition-colors font-mono"
          >
            Explore Tutorials
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TutorialsCTA;
