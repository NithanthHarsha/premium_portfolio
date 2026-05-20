import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Side Socials */}
      <div className="hidden lg:flex flex-col gap-6 absolute left-8 bottom-0 pb-12 after:w-[1px] after:h-24 after:bg-white/20 after:mx-auto">
        <a href="https://github.com/NithanthHarsha" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent hover:-translate-y-1 transition-all">
          <FiGithub size={22} />
        </a>
        <a href="https://linkedin.com/in/nithanth-harsha-b5934a3a3" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent hover:-translate-y-1 transition-all">
          <FiLinkedin size={22} />
        </a>
        <a href="mailto:hnithanth@gmail.com" className="text-gray-400 hover:text-accent hover:-translate-y-1 transition-all">
          <FiMail size={22} />
        </a>
      </div>

      <div className="section-container w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center lg:pl-24">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >

          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              NITHANTH HARSHA
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl text-accent font-display font-medium">
            Python Full Stack Developer
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
            Motivated Python Full Stack Developer skilled in building scalable and efficient web applications using Python, Django, JavaScript, and React. Strong in problem-solving, debugging, and writing clean, maintainable code. Experienced in RESTful API development, CRUD operations, authentication systems, OOP concepts, and modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              Hire Me <FiArrowRight />
            </a>
            <a href="/resume.pdf" target="_blank" className="btn-outline w-full sm:w-auto">
              Download CV <FiDownload />
            </a>
          </div>
        </motion.div>

        {/* Right Content / Highlight Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Decorative neon circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-accent/30 animate-[spin_10s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />

          <div className="glass-card p-8 max-w-sm w-full relative z-10 hover:-translate-y-2 transition-transform duration-500">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-dark-100 to-dark-300 border-2 border-accent/50 mx-auto mb-6 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(255,71,87,0.3)]">
              {/* Initials instead of image if not available */}
              <span className="text-3xl font-bold text-white">NH</span>
            </div>
            
            <div className="space-y-4">
              <div className="border-b border-white/10 pb-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Based in</p>
                <p className="text-white font-medium">Kozhikode, Kerala</p>
              </div>
              <div className="border-b border-white/10 pb-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Role</p>
                <p className="text-white font-medium">Python Full Stack Developer</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Expertise</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Web Dev', 'Django', 'React', 'REST APIs'].map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
