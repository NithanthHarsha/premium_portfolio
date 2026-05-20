import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiLinkedin, FiGithub, FiArrowRight } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const contactInfo = [
    { icon: <FiPhone />, label: 'Phone', value: '7594842869', link: 'tel:+917594842869' },
    { icon: <FiMail />, label: 'Email', value: 'hnithanth@gmail.com', link: 'mailto:hnithanth@gmail.com' },
    { icon: <FiLinkedin />, label: 'LinkedIn', value: 'nithanth-harsha', link: 'https://linkedin.com/in/nithanth-harsha-b5934a3a3' },
    { icon: <FiGithub />, label: 'GitHub', value: 'NithanthHarsha', link: 'https://github.com/NithanthHarsha' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Replace the key below with your Web3Forms Access Key
    const accessKey = "ad6c2ade-cf19-4e1b-9052-1e90c7a45e43";

    if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      setStatus("Error: Please provide a valid Web3Forms access key.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact: ${formData.subject}`,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setStatus("Something went wrong!");
    }
  };

  return (
    <section id="contact" className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <h2 className="text-sm text-accent tracking-[0.2em] uppercase mb-2">Get In Touch</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">Let's Work Together</h3>
        <div className="w-20 h-1 bg-accent mt-6 rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="glass-card p-8 h-full">
            <h4 className="text-2xl font-display font-bold mb-8">Contact Information</h4>
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link}
                  target={info.label === 'Phone' || info.label === 'Email' ? '_self' : '_blank'}
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                    <p className="text-gray-300 font-medium group-hover:text-accent transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <form className="glass-card p-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-dark-300/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:bg-white/5 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-dark-300/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:bg-white/5 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
                className="w-full bg-dark-300/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:bg-white/5 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Hello Nithanth..."
                className="w-full bg-dark-300/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:bg-white/5 transition-colors resize-none"
              ></textarea>
            </div>
            
            {status && (
              <p className={`text-sm ${status.includes('successfully') ? 'text-green-400' : 'text-accent'}`}>
                {status}
              </p>
            )}

            <button type="submit" disabled={status === 'Sending...'} className="btn-primary w-full py-4 mt-4 disabled:opacity-70 disabled:cursor-not-allowed">
              {status === 'Sending...' ? 'Sending...' : 'Send Message'} <FiArrowRight />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

