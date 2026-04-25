import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-navy border-t-2 border-gold py-12 px-4 relative overflow-hidden">
      {/* Decorative compass directions */}
      <div className="absolute top-0 left-0 right-0 flex justify-around px-8 py-2 text-gold/30 font-cinzel text-sm uppercase tracking-widest pointer-events-none">
        <span>N</span>
        <span>E</span>
        <span>S</span>
        <span>W</span>
      </div>

      {/* Footer Content */}
      <motion.div
        className="max-w-4xl mx-auto text-center mt-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Name */}
        <h3 className="text-2xl font-cinzel text-gold font-bold mb-3">
          {resumeData.name}
        </h3>

        {/* Tagline */}
        <p className="text-lg text-gold italic mb-6 font-cinzel">
          The One Piece is Real.
        </p>

        {/* Copyright */}
        <p className="text-sm font-inter text-white/60 mb-8">
          © {currentYear} {resumeData.name}. All rights reserved.
        </p>

        {/* Navigation Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Home', id: 'hero' },
            { label: 'About', id: 'about' },
            { label: 'Skills', id: 'skills' },
            { label: 'Projects', id: 'projects' },
            { label: 'Experience', id: 'experience' },
            { label: 'Contact', id: 'contact' }
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => {
                const element = document.getElementById(link.id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white/70 hover:text-gold transition-colors font-inter text-sm uppercase tracking-wider"
              aria-label={`Scroll to ${link.label}`}
            >
              {link.label}
            </button>
          ))}
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          className="flex justify-center gap-2 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-gold"
              style={{
                animation: `shimmer 2s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </motion.div>

        {/* Bottom text */}
        <motion.p
          className="text-xs font-cinzel text-gold/50 uppercase tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          ~ End of Journey, Another Begins ~
        </motion.p>
      </motion.div>
    </footer>
  );
}
