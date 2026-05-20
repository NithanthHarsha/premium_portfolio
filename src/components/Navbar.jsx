import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-300/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer group">
          <h1 className="text-2xl font-bold tracking-wider text-transparent select-none">
            {/* Logo space preserved for layout */}
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-sm font-medium text-gray-400 hover:text-white cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="h-4 w-[1px] bg-white/20"></div>
          <a href="mailto:hnithanth@gmail.com" className="text-sm text-gray-400 hover:text-accent transition-colors">
            hnithanth@gmail.com
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-2xl text-white" onClick={() => setIsOpen(true)}>
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-dark-200 z-50 md:hidden flex flex-col justify-center items-center"
          >
            <button className="absolute top-6 right-6 text-3xl text-white" onClick={() => setIsOpen(false)}>
              <HiX />
            </button>
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-gray-300 hover:text-accent cursor-pointer transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a href="mailto:hnithanth@gmail.com" className="mt-8 text-lg text-accent">
                hnithanth@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
