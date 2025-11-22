import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { content } from '../data/content';

const Hero = () => {
  const { hero } = content;

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-accent font-mono text-lg mb-4">Hi, my name is</h2>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-text mb-4">
          {hero.name}.
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-muted mb-6">
          {hero.role}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-2xl mb-10"
      >
        <p className="text-muted text-lg leading-relaxed">
          {hero.tagline}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-6 items-center"
      >
        <div className="flex gap-4">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="px-8 py-4 border-2 border-accent text-accent rounded hover:bg-accent/10 transition-colors cursor-pointer font-mono"
          >
            {hero.cta}
          </Link>
          <a
            href="/SaiBhargav_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent text-primary font-bold rounded hover:bg-accent/80 transition-colors cursor-pointer font-mono"
          >
            View Resume
          </a>
        </div>
        
        <div className="flex gap-6">
          {hero.social.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent text-2xl transition-colors transform hover:scale-110"
              aria-label={item.label}
            >
              <item.icon />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
