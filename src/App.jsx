import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBubble from './components/ChatBubble';

function App() {
  return (
    <div className="relative min-h-screen bg-dark-300 text-gray-200 selection:bg-accent/30 selection:text-white">
      {/* Background decorations */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="bg-glow top-[-10%] left-[-10%] animate-blob"></div>
        <div className="bg-glow bottom-[20%] right-[-10%] animate-blob animation-delay-2000"></div>
        <div className="bg-glow top-[40%] left-[60%] animate-blob animation-delay-4000 opacity-50"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
        <ChatBubble />
      </div>
    </div>
  );
}

export default App;
