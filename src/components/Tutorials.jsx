import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { FaGithub } from 'react-icons/fa';

// Tech stack rendering
const getTechIcon = (techName) => {
  return <span className="text-xs font-mono text-accent/80 bg-accent/10 px-2 py-1 rounded">{techName}</span>;
};

const Tutorials = () => {
  const { tutorials } = content;

  // Sorting logic for difficulty
  const difficultyOrder = {
    "Beginner": 1,
    "Intermediate": 2,
    "Advanced": 3
  };

  const sortedTutorials = [...tutorials.items].sort((a, b) => {
    return (difficultyOrder[a.difficulty] || 99) - (difficultyOrder[b.difficulty] || 99);
  });

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            <span className="text-accent">&lt;</span> {tutorials.title} <span className="text-accent">/&gt;</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            {tutorials.subtitle}
          </p>
          
          {/* Note Section */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg max-w-3xl mx-auto">
             <p className="text-yellow-200/80 text-sm font-mono leading-relaxed">
               {tutorials.note}
             </p>
          </div>
        </motion.div>
      </section>

      {/* Tutorials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedTutorials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/30 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group flex flex-col h-full bg-gradient-to-br from-secondary/50 to-secondary/10"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2">
                    {/* Difficulty Badge */}
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${
                        item.difficulty === 'Beginner' ? 'border-green-500/30 text-green-400 bg-green-500/10' :
                        item.difficulty === 'Intermediate' ? 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10' :
                        'border-red-500/30 text-red-400 bg-red-500/10'
                    }`}>
                        {item.difficulty}
                    </span>
                </div>
                <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-accent transition-colors"
                >
                    <FaGithub size={20} />
                </a>
              </div>

              <h3 className="text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="mt-auto">
                <div className="border-t border-white/5 pt-4">
                  <p className="text-xs text-gray-500 mb-3 font-mono">Tech Stack</p>
                  <div className="flex flex-wrap gap-3 text-2xl">
                    {item.tech.map((tech, i) => (
                      <div key={i} className="group/icon relative">
                         {/* Tooltipish effect could be added here, but simple icons for now */}
                         <div title={tech} className="hover:scale-110 transition-transform cursor-help">
                            {getTechIcon(tech)}
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={item.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 block w-full py-2 text-center rounded bg-white/5 hover:bg-accent hover:text-primary border border-white/10 hover:border-accent transition-all duration-300 font-medium text-sm"
                >
                  View Tutorial
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Get Help Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="bg-accent/5 border border-accent/20 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-text mb-4">Stuck somewhere?</h2>
          <p className="text-gray-400 mb-6">
            Learning new technologies can be challenging. If you have any doubts or need clarification on any of the tutorials, feel free to reach out!
          </p>
          <a 
            href="mailto:saibhargavt@outlook.com"
            className="inline-block px-6 py-3 bg-accent text-primary font-bold rounded hover:bg-accent/80 transition-colors font-mono"
          >
            Reach Me Out
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Tutorials;
