import React from 'react';
import { content } from '../data/content';

const Footer = () => {
  return (
    <footer className="py-6 text-center text-muted text-sm font-mono">
      <p>Designed & Built by {content.hero.name}</p>
    </footer>
  );
};

export default Footer;
