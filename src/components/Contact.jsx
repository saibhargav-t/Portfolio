import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Added import for icons

const Contact = () => {
  const { contact } = content;

  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-accent font-mono mb-4">06. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-text mb-12">
          {contact.title}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-left"
        >
          <h3 className="text-2xl font-bold text-text mb-6">Let's Connect</h3>
          <p className="text-muted mb-8 text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          {/* Career Gap / Why Hire Me Section */}
          <div className="mb-8 p-6 bg-secondary/30 border-l-4 border-accent rounded-r-lg">
            <h4 className="text-xl font-bold text-text mb-2">Why Hire Me?</h4>
            <p className="text-muted italic">
              "{contact.careerGapNote}"
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 text-muted">
              <FaEnvelope className="text-accent text-xl" />
              <span>{contact.email}</span>
            </div>
            <div className="flex items-center gap-4 text-muted">
              <FaMapMarkerAlt className="text-accent text-xl" />
              <span>{contact.location}</span>
            </div>
          </div>

          <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
            <p className="text-accent font-mono text-sm mb-2">
              Check out my code & problem solving skills:
            </p>
            <div className="flex gap-4">
              {/* Social links are already in Footer/Hero, but adding a direct call here is good */}
              <a href="https://github.com/saibhargav-t" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent underline decoration-accent underline-offset-4">GitHub Profile</a>
              <a href="https://leetcode.com/u/saibhargav-t/" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent underline decoration-accent underline-offset-4">LeetCode Profile</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-secondary/30 p-8 rounded-lg border border-white/5 flex flex-col justify-center"
        >
          <h4 className="text-xl font-bold text-text mb-6">Open to Roles</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {contact.roles.map((role, idx) => (
              <div key={idx} className="bg-primary/50 p-3 rounded border border-accent/20 text-center text-sm font-mono text-muted hover:text-accent hover:border-accent transition-colors cursor-default">
                {role}
              </div>
            ))}
          </div>

          <p className="text-muted text-center mb-8">
            Ready to build scalable, high-performance systems? Let's discuss how I can contribute to your team.
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="w-full block text-center px-8 py-4 bg-accent text-primary font-bold rounded hover:bg-accent/80 transition-colors font-mono text-lg"
          >
            Say Hello
          </a>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-muted italic mb-2">"{contact.quote.text}"</p>
            <p className="text-accent font-mono text-sm">- {contact.quote.author}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
