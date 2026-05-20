import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-container relative">
      <div className="absolute left-0 top-20 w-64 h-64 bg-[radial-gradient(circle,rgba(255,71,87,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <h2 className="text-sm text-accent tracking-[0.2em] uppercase mb-2">About Me</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">Discover My Story</h3>
        <div className="w-20 h-1 bg-accent mt-6 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="glass-card p-1">
            <div className="bg-dark-100 rounded-xl p-8 h-full relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[radial-gradient(circle,rgba(255,71,87,0.2)_0%,transparent_70%)] rounded-full pointer-events-none" />
              <h4 className="text-2xl font-display mb-6">Passion for Development</h4>
              <p className="text-gray-400 leading-relaxed mb-4">
                I am a dedicated Python Full-Stack Developer with a strong focus on building scalable, efficient, and user-centric web applications. My journey involves deep-diving into the mechanics of both front-end and back-end ecosystems, bridging the gap between sophisticated logic and intuitive design.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I thrive on problem-solving, debugging complex issues, and writing clean, maintainable code. By leveraging modern web technologies, I aim to craft digital solutions that are not only performant but also visually compelling and functionally robust.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {[
            { title: 'Full-Stack Proficiency', desc: 'Seamlessly integrating Python/Django backends with dynamic React frontends.' },
            { title: 'Clean Architecture', desc: 'Advocating for clean code principles and scalable system design.' },
            { title: 'Modern Technologies', desc: 'Utilizing the latest tools and frameworks to deliver state-of-the-art applications.' }
          ].map((item, index) => (
            <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
              <div className="w-12 h-12 shrink-0 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xl">
                0{index + 1}
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
