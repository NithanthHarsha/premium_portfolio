import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiStar } from 'react-icons/fi';

const Projects = () => {
  const featuredProject = {
    title: "Fashion E-commerce Dress Store",
    description: "Full-stack fashion e-commerce platform built using Django and React with Razorpay payment gateway integration, authentication system, product management, and responsive premium UI design.",
    tech: ["Django", "React.js", "Razorpay", "PostgreSQL"],
    links: { github: "#", live: "#" },
    features: [
      "Integrated Razorpay payment gateway for secure online payments",
      "Developed product listing, shopping cart, and secure checkout workflow",
      "Designed modern premium fashion brand interface with responsive UI"
    ],
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop"
  };

  const projects = [
    {
      title: "NeighbAid",
      description: "A community web application for posting and responding to local help requests. Designed and optimized relational database schemas using Django ORM for maximum performance.",
      tech: ["React.js", "Vite", "Python", "Django REST Framework", "SQLite3"],
      links: { github: "#", live: "#" },
      features: [
        "Built robust backend APIs with Django REST Framework",
        "Developed responsive frontend using React.js",
        "Secure data management and authentication"
      ],
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "CinematicCollection",
      description: "A full-stack movie & cast management platform featuring secure superuser controls, YouTube trailer embedding with auto ID extraction, and complex many-to-many relational models.",
      tech: ["Python", "Django", "HTML/CSS", "JavaScript", "SQLite"],
      links: { github: "#", live: "#" },
      features: [
        "Secure superuser-only controls",
        "Automatic YouTube video ID extraction",
        "Optimized relational database schemas"
      ],
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <h2 className="text-sm text-accent tracking-[0.2em] uppercase mb-2">Portfolio</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">Featured Projects</h3>
        <div className="w-20 h-1 bg-accent mt-6 rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card group flex flex-col lg:flex-row overflow-hidden h-full lg:col-span-2 relative"
        >
          {/* Subtle neon border effect via pseudo element */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-2xl transition-colors duration-500 pointer-events-none z-20"></div>

          <div className="w-full lg:w-1/2 h-64 lg:h-auto overflow-hidden relative">
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-300/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-accent shadow-lg">
              <FiStar className="fill-accent" /> Featured
            </div>
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-dark-300/40 group-hover:bg-dark-300/10 transition-colors duration-500"></div>
          </div>

          <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-dark-200/80">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-3xl font-display font-bold text-white group-hover:text-accent transition-colors">
                {featuredProject.title}
              </h4>
              <div className="flex gap-4 shrink-0 mt-2">
                <a href={featuredProject.links.github} className="text-gray-400 hover:text-accent transition-colors">
                  <FiGithub size={22} />
                </a>
                <a href={featuredProject.links.live} className="text-gray-400 hover:text-accent transition-colors">
                  <FiExternalLink size={22} />
                </a>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
              {featuredProject.description}
            </p>

            <ul className="space-y-3 mb-8">
              {featuredProject.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/80 shrink-0 shadow-[0_0_8px_rgba(255,71,87,0.8)]" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/5">
              {featuredProject.tech.map((tech, tIdx) => (
                <span key={tIdx} className="text-xs font-semibold tracking-wide text-white px-3 py-1.5 rounded-md bg-accent/20 border border-accent/30 shadow-[0_0_10px_rgba(255,71,87,0.1)]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Other Projects */}
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + (idx * 0.2) }}
            className="glass-card group flex flex-col h-full overflow-hidden"
          >
            <div className="w-full h-56 overflow-hidden relative border-b border-white/5">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-dark-300/40 group-hover:bg-dark-300/10 transition-colors duration-500"></div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl font-display font-bold text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <div className="flex gap-4 shrink-0 mt-1">
                  <a href={project.links.github} className="text-gray-400 hover:text-accent transition-colors">
                    <FiGithub size={20} />
                  </a>
                  <a href={project.links.live} className="text-gray-400 hover:text-accent transition-colors">
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2 mb-8 mt-auto">
                {project.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-500">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/50 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-auto">
                {project.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-medium text-gray-300 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
