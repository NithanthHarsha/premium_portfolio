import React from 'react';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span>&copy; {new Date().getFullYear()} NITHANTH HARSHA. All rights reserved.</span>
        </div>
        
        <div className="flex items-center gap-1.5">
          Designed & Built with <FiHeart className="text-accent animate-pulse" />
        </div>
        
        <div className="flex gap-4">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
