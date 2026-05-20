import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      role: "Python Full-Stack Developer Intern",
      company: "OneTeam Solutions",
      location: "Kochi",
      duration: "June 2025 – November 2025",
      responsibilities: [
        "Completed Python Full-Stack Development internship using Python, Django, REST APIs, MySQL, HTML, CSS, and JavaScript.",
        "Worked on CRUD operations, authentication, authorization, and database management.",
        "Built responsive web pages and integrated API-based workflows.",
        "Used Git and GitHub for version control and team collaboration.",
        "Applied debugging techniques and problem-solving skills to resolve real-world project issues.",
        "Enhanced application reliability with robust form validations and error-handling protocols.",
        "Designed and optimized MySQL databases for performance and security."
      ]
    }
  ];

  return (
    <section id="experience" className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <h2 className="text-sm text-accent tracking-[0.2em] uppercase mb-2">My Journey</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">Experience</h3>
        <div className="w-20 h-1 bg-accent mt-6 rounded-full" />
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10 relative overflow-hidden"
          >
            {/* Decorative accent bar */}
            <div className="absolute left-0 top-0 w-2 h-full bg-accent" />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div>
                <h4 className="text-2xl font-display font-bold text-white mb-2">{exp.role}</h4>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <FiBriefcase className="text-accent" /> {exp.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin className="text-accent" /> {exp.location}
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 whitespace-nowrap">
                <FiCalendar className="text-accent" /> {exp.duration}
              </div>
            </div>

            <ul className="space-y-4">
              {exp.responsibilities.map((task, tIdx) => (
                <motion.li
                  key={tIdx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + tIdx * 0.1 }}
                  className="flex items-start gap-4 text-gray-400"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0 shadow-[0_0_8px_rgba(255,71,87,0.8)]" />
                  <span className="leading-relaxed">{task}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
