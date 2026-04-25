import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      width: '100%',
      backgroundColor: '#0a0e1a',
      borderTop: '2px solid #f4c542',
      paddingTop: '48px',
      paddingBottom: '48px',
      paddingLeft: '16px',
      paddingRight: '16px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative compass directions */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-around',
        paddingLeft: '32px',
        paddingRight: '32px',
        paddingTop: '8px',
        paddingBottom: '8px',
        color: 'rgba(244, 197, 66, 0.3)',
        fontFamily: 'Cinzel, serif',
        fontSize: '0.875rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        pointerEvents: 'none'
      }}>
        <span>N</span>
        <span>E</span>
        <span>S</span>
        <span>W</span>
      </div>

      {/* Footer Content */}
      <motion.div style={{
        maxWidth: '56rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        marginTop: '24px'
      }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Name */}
        <h3 style={{
          fontSize: '1.5rem',
          fontFamily: 'Cinzel, serif',
          color: '#f4c542',
          fontWeight: 'bold',
          marginBottom: '12px'
        }}>
          {resumeData.name}
        </h3>

        {/* Tagline */}
        <p style={{
          fontSize: '1.125rem',
          color: '#f4c542',
          fontStyle: 'italic',
          marginBottom: '24px',
          fontFamily: 'Cinzel, serif'
        }}>
          The One Piece is Real.
        </p>

        {/* Copyright */}
        <p style={{
          fontSize: '0.875rem',
          fontFamily: 'Inter, sans-serif',
          color: 'rgba(232, 232, 232, 0.6)',
          marginBottom: '32px'
        }}>
          © {currentYear} {resumeData.name}. All rights reserved.
        </p>

        {/* Navigation Links */}
        <motion.div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px',
          marginBottom: '32px'
        }}
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
              style={{
                color: 'rgba(232, 232, 232, 0.7)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#f4c542';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'rgba(232, 232, 232, 0.7)';
              }}
              aria-label={`Scroll to ${link.label}`}
            >
              {link.label}
            </button>
          ))}
        </motion.div>

        {/* Decorative divider */}
        <motion.div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '16px'
        }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#f4c542',
                animation: `shimmer 2s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </motion.div>

        {/* Bottom text */}
        <motion.p style={{
          fontSize: '0.75rem',
          fontFamily: 'Cinzel, serif',
          color: 'rgba(244, 197, 66, 0.5)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          ~ End of Journey, Another Begins ~
        </motion.p>
      </motion.div>

      <style>{`
        @keyframes shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </footer>
  );
}
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
