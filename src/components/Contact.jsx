import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const FloatingBottle = () => (
  <svg
    className="absolute opacity-10 pointer-events-none"
    width="200"
    height="300"
    viewBox="0 0 200 300"
    style={{
      right: '-50px',
      top: '50%',
      transform: 'translateY(-50%)',
      animation: `float 6s ease-in-out infinite`
    }}
  >
    {/* Bottle */}
    <path
      d="M 80 50 L 80 30 Q 80 20 90 20 L 110 20 Q 120 20 120 30 L 120 50 L 100 150 Q 100 160 90 160 L 90 200 Q 90 220 100 220 L 100 240"
      stroke="rgba(244, 197, 66, 0.3)"
      strokeWidth="8"
      fill="none"
    />
    {/* Cork */}
    <rect x="85" y="15" width="30" height="15" fill="rgba(139, 69, 19, 0.3)" />
    {/* Message inside */}
    <rect x="92" y="60" width="16" height="60" fill="rgba(245, 230, 200, 0.3)" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="section-container bg-navy relative overflow-hidden">
      {/* Floating Bottle Background */}
      <FloatingBottle />

      {/* Section Header */}
      <div className="mb-16 relative z-10">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Send a Letter to the Crew
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Drop a message in a bottle
        </motion.p>
      </div>

      {/* Contact Container */}
      <motion.div
        className="max-w-2xl mx-auto relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Parchment Letter Form */}
        <div
          className="bg-parchment border-2 rounded-lg p-8 sm:p-12 relative shadow-2xl"
          style={{ borderColor: '#8B6914' }}
        >
          {/* Rolled edge effect - top */}
          <div
            className="absolute -top-6 left-0 right-0 h-6 rounded-full"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), transparent)',
              boxShadow: '0 -4px 8px rgba(0,0,0,0.2) inset'
            }}
          />

          {/* Rolled edge effect - bottom */}
          <div
            className="absolute -bottom-6 left-0 right-0 h-6 rounded-full"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.1), transparent)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2) inset'
            }}
          />

          {/* Letter Header */}
          <h3 className="text-3xl font-cinzel text-navy font-bold mb-6">
            Dear Crew,
          </h3>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-gray-400 text-navy font-cinzel text-lg py-3 focus:outline-none focus:border-gold transition-colors placeholder-gray-500"
                aria-label="Your name"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-gray-400 text-navy font-cinzel text-lg py-3 focus:outline-none focus:border-gold transition-colors placeholder-gray-500"
                aria-label="Your email"
              />
            </motion.div>

            {/* Message Textarea */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-transparent border-b-2 border-gray-400 text-navy font-inter py-3 focus:outline-none focus:border-gold transition-colors placeholder-gray-500 resize-none"
                aria-label="Your message"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-red text-white font-cinzel font-bold py-3 rounded-lg hover:bg-red/90 transition-all hover:shadow-lg hover:shadow-red/50 transform hover:-translate-y-0.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              aria-label="Send message"
            >
              Send via Sea King Post 🌊
            </motion.button>
          </form>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 p-4 bg-gold/20 border border-gold rounded-lg text-center"
            >
              <p className="text-gold font-cinzel font-bold">
                ✓ Your message has set sail!
              </p>
            </motion.div>
          )}
        </div>

        {/* Social Links */}
        <motion.div
          className="mt-12 flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {resumeData.contactInfo.github && (
            <motion.a
              href={resumeData.contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-navy border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-all hover:scale-110"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Visit my GitHub"
            >
              <Github size={28} />
            </motion.a>
          )}

          {resumeData.contactInfo.linkedin && (
            <motion.a
              href={resumeData.contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-navy border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-all hover:scale-110"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Visit my LinkedIn"
            >
              <Linkedin size={28} />
            </motion.a>
          )}

          <motion.a
            href={`mailto:${resumeData.contactInfo.email}`}
            className="p-3 rounded-full bg-navy border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-all hover:scale-110"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Send me an email"
          >
            <Mail size={28} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Contact Info Text */}
      <motion.div
        className="mt-12 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-white/70 font-inter text-sm">
          Or reach out directly: <span className="text-gold font-semibold">{resumeData.contactInfo.email}</span>
        </p>
      </motion.div>
    </section>
  );
}
