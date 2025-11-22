import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { FaArrowRight, FaArrowDown, FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const { certifications } = content;

  return (
    <section id="certifications" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-text">
            <span className="text-accent font-mono mr-2">04.</span>
            {certifications.title}
          </h2>
          <div className="h-px bg-secondary flex-grow max-w-xs"></div>
        </div>

        <p className="text-muted text-lg mb-16 max-w-3xl">
          {certifications.description}
        </p>

        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4 relative">
          {certifications.items.map((cert, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-full lg:w-1/5 flex flex-col"
              >
                <div className="bg-secondary/30 border border-white/5 p-6 rounded-lg hover:border-accent/50 transition-all duration-300 h-full flex flex-col relative group hover:scale-105 transform origin-center">
                  <div className="absolute -top-3 -right-3 bg-accent/10 p-2 rounded-full text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaCertificate size={16} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-text mb-2 leading-tight min-h-[3.5rem]">
                    {cert.title}
                  </h3>
                  
                  <div className="flex justify-between items-center text-xs font-mono text-muted mb-4">
                    <span className="text-accent">{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>

                  <p className="text-xs text-muted mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300 flex-grow">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.slice(0, 3).map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] bg-primary/50 px-2 py-1 rounded text-muted">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-accent hover:underline mt-auto"
                    >
                      Verify Credential <FaExternalLinkAlt size={10} />
                    </a>
                  )}
                </div>
              </motion.div>

              {idx < certifications.items.length - 1 && (
                <div className="text-accent/30 flex-shrink-0 flex items-center justify-center">
                  <FaArrowRight className="hidden lg:block text-2xl" />
                  <FaArrowDown className="block lg:hidden text-2xl my-2" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
