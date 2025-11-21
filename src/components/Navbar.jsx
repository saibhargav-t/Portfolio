import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer text-2xl font-bold text-accent font-mono">
          &lt;SB /&gt;
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-text hover:text-accent cursor-pointer transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="/resume.pdf" 
            download="SaiBhargav_Resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 border border-accent text-accent rounded hover:bg-accent/10 transition-colors font-mono text-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-text hover:text-accent focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-secondary/95 backdrop-blur-md shadow-xl"
        >
          <div className="flex flex-col items-center py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="text-text text-lg hover:text-accent cursor-pointer font-medium"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="/resume.pdf" 
              download="SaiBhargav_Resume.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 border border-accent text-accent rounded hover:bg-accent/10 transition-colors font-mono"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
