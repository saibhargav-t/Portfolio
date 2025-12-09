import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ currentView, setCurrentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = currentView === 'home';

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

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-primary/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div onClick={handleLogoClick} className="cursor-pointer text-2xl font-bold text-accent font-mono">
          &lt;SB /&gt;
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {isHome ? (
            <>
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-text hover:text-accent cursor-pointer transition-colors font-medium"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <button 
                onClick={() => setCurrentView('tutorials')}
                className="text-text hover:text-accent cursor-pointer transition-colors font-medium bg-transparent border-none"
              >
                Tutorials
              </button>
            </>
          ) : (
            <button 
              onClick={() => setCurrentView('home')}
              className="text-text hover:text-accent cursor-pointer transition-colors font-medium bg-transparent border-none"
            >
              Home
            </button>
          )}
          
          <div className="relative group">
            <button className="px-4 py-2 border border-accent text-accent rounded hover:bg-accent/10 transition-colors font-mono text-sm flex items-center gap-2">
              Download
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-secondary border border-white/10 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
              <a 
                href="/SaiBhargav_Resume.pdf" 
                download="SaiBhargav_Resume.pdf"
                className="block px-4 py-3 text-text hover:text-accent hover:bg-white/5 transition-colors font-mono text-sm"
              >
                Resume
              </a>
            </div>
          </div>
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
            {isHome ? (
              <>
                {navLinks.map((link) => (
                  <ScrollLink
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setIsOpen(false)}
                    className="text-text text-lg hover:text-accent cursor-pointer font-medium"
                  >
                    {link.name}
                  </ScrollLink>
                ))}
                <button
                  onClick={() => {
                    setCurrentView('tutorials');
                    setIsOpen(false);
                  }}
                  className="text-text text-lg hover:text-accent cursor-pointer font-medium bg-transparent border-none"
                >
                  Tutorials
                </button>
              </>
            ) : (
               <button
                  onClick={() => {
                    setCurrentView('home');
                    setIsOpen(false);
                  }}
                  className="text-text text-lg hover:text-accent cursor-pointer font-medium bg-transparent border-none"
                >
                  Home
                </button>
            )}
            <a 
              href="/SaiBhargav_Resume.pdf" 
              download="SaiBhargav_Resume.pdf"
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
