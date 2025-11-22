import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { content } from '../data/content';

const Projects = () => {
  const { projects } = content;

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-text">
            <span className="text-accent font-mono mr-2">03.</span>
            {projects.title}
          </h2>
          <div className="h-px bg-secondary flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.items.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-secondary/30 backdrop-blur-sm border border-white/5 p-8 rounded-lg hover:border-accent/50 transition-all duration-300 group shadow-lg hover:shadow-accent/10"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-accent text-4xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className="flex gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                    <FaGithub size={20} />
                  </a>
                  {/* Add external link if available */}
                </div>
              </div>

              <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted text-sm mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono text-accent/80 bg-accent/10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
