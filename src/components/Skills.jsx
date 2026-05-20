import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'HTML5', 'CSS3'] },
  { category: 'Frameworks & Libraries', items: ['Django', 'Django REST Framework', 'React.js', 'Bootstrap'] },
  { category: 'Databases', items: ['MySQL', 'SQLite'] },
  { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
  { category: 'Core Concepts', items: ['RESTful APIs', 'OOP', 'CRUD Operations', 'Authentication & Authorization'] },
  { category: 'Soft Skills', items: ['Problem-Solving', 'Team Collaboration', 'Agile Methodology'] },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container relative">
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(255,71,87,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <h2 className="text-sm text-accent tracking-[0.2em] uppercase mb-2">My Expertise</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">Technical Skills</h3>
        <div className="w-20 h-1 bg-accent mt-6 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
          >
            <h4 className="text-xl font-display font-semibold mb-6 text-white group-hover:text-accent transition-colors">
              {skillGroup.category}
            </h4>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-4 py-2 bg-dark-300/50 rounded-lg text-sm text-gray-300 border border-white/5 hover:border-accent/50 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
