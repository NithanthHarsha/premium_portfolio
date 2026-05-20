import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBook } from 'react-icons/fi';

const Education = () => {
  return (
    <section id="education" className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <h2 className="text-sm text-accent tracking-[0.2em] uppercase mb-2">Academics</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">Education</h3>
        <div className="w-20 h-1 bg-accent mt-6 rounded-full" />
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[radial-gradient(circle,rgba(255,71,87,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

          <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent text-3xl mb-6 shadow-[0_0_20px_rgba(255,71,87,0.2)]">
            <FiAward />
          </div>

          <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Diploma in Computer Engineering
          </h4>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400 mb-6">
            <span className="flex items-center gap-2">
              <FiBook className="text-accent" /> Govt. Polytechnic College, Meppadi
            </span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20" />
            <span>Calicut University</span>
          </div>

          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent font-medium tracking-wide">
            2023 – 2025
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
