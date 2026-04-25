import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

export default function About() {
  const yearsExperience = resumeData.experience.length > 0 ? 1 : 0;
  const bountyAmount = (yearsExperience || 1) * 1000000000;

  // Get initials from name
  const initials = resumeData.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2);

  return (
    <section id="about" style={{
      width: '100%',
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingTop: '64px',
      paddingBottom: '64px',
      backgroundColor: '#0a0e1a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <motion.div
        style={{
          width: '100%',
          maxWidth: '448px'
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Wanted Poster Card */}
        <div style={{
          position: 'relative',
          backgroundColor: '#f5e6c8',
          border: '4px double #8B6914',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.6)',
          padding: '32px',
          transform: 'rotate(-1deg)',
          overflow: 'hidden'
        }}>
          {/* Decorative corner folds */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '48px',
            height: '48px',
            background: 'linear-gradient(to bottom right, transparent, rgba(232, 213, 163, 0.5))',
            opacity: 0.5
          }} />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '48px',
            height: '48px',
            background: 'linear-gradient(to top right, transparent, rgba(232, 213, 163, 0.5))',
            opacity: 0.5
          }} />

          {/* WANTED Header */}
          <div style={{ textAlign: 'center', marginBottom: '24px', position: 'relative', zIndex: 10 }}>
            <h2 style={{
              fontSize: '3rem',
              fontFamily: 'Cinzel, serif',
              fontWeight: 'bold',
              color: '#c0392b',
              marginBottom: '8px',
              letterSpacing: '0.15em'
            }}>
              WANTED
            </h2>
            <p style={{
              fontSize: '0.875rem',
              fontFamily: 'Cinzel, serif',
              color: '#c0392b',
              letterSpacing: '0.15em'
            }}>
              DEAD OR ALIVE
            </p>
          </div>

          {/* Avatar Circle with Initials */}
          <motion.div
            style={{
              position: 'relative',
              width: '128px',
              height: '128px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '4px solid #8B6914',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}>
              <span style={{
                fontSize: '3rem',
                fontFamily: 'Cinzel, serif',
                fontWeight: 'bold',
                color: '#c0392b'
              }}>
                {initials}
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <h3 style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            fontFamily: 'Cinzel, serif',
            fontWeight: 'bold',
            color: '#0a0e1a',
            marginBottom: '16px'
          }}>
            {resumeData.name}
          </h3>

          {/* Bio */}
          <p style={{
            textAlign: 'center',
            fontSize: '0.875rem',
            fontFamily: 'Inter, sans-serif',
            color: '#4a4a4a',
            marginBottom: '24px',
            lineHeight: 1.6
          }}>
            {resumeData.bio}
          </p>

          {/* Bounty Information Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingTop: '12px',
            paddingBottom: '12px',
            backgroundColor: 'rgba(192, 57, 43, 0.1)',
            borderTop: '1px dashed #8B6914',
            borderBottom: '1px dashed #8B6914'
          }}>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <p style={{
                fontSize: '0.75rem',
                fontFamily: 'Cinzel, serif',
                color: '#c0392b',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>Bounty</p>
              <p style={{
                fontSize: '1.125rem',
                fontFamily: 'Cinzel, serif',
                fontWeight: 'bold',
                color: '#c0392b'
              }}>
                ₿{bountyAmount.toLocaleString()}
              </p>
            </div>
            <div style={{
              width: '1px',
              height: '48px',
              backgroundColor: 'rgba(192, 57, 43, 0.3)'
            }} />
            <div style={{ textAlign: 'center', flex: 1 }}>
              <p style={{
                fontSize: '0.75rem',
                fontFamily: 'Cinzel, serif',
                color: '#c0392b',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>Experience</p>
              <p style={{
                fontSize: '1.125rem',
                fontFamily: 'Cinzel, serif',
                fontWeight: 'bold',
                color: '#c0392b'
              }}>
                {yearsExperience} Year+
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div style={{
            textAlign: 'center',
            fontSize: '0.75rem',
            fontFamily: 'Inter, sans-serif',
            color: '#4a4a4a',
            marginBottom: '16px'
          }}>
            <p>📍 {resumeData.personalInfo.location}</p>
            <p>📧 {resumeData.personalInfo.email}</p>
          </div>

          {/* Footer Text */}
          <p style={{
            textAlign: 'center',
            fontSize: '0.75rem',
            fontFamily: 'Cinzel, serif',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'rgba(192, 57, 43, 0.7)',
            textShadow: '0 0 10px rgba(244, 197, 66, 0.3)'
          }}>
            WORLD GOVERNMENT
          </p>

          {/* Tape effects */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '64px',
            height: '32px',
            background: 'linear-gradient(to right, rgba(255, 255, 100, 0.2), rgba(255, 255, 150, 0.2))',
            border: '1px solid rgba(255, 196, 0, 0.3)',
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)'
          }} />
        </div>
      </motion.div>

      {/* Decorative text below poster */}
      <motion.p
        style={{
          marginTop: '32px',
          textAlign: 'center',
          color: '#f4c542',
          fontFamily: 'Cinzel, serif',
          fontSize: '0.875rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        ~ Navigation Officer ~
      </motion.p>
    </section>
  );
}
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Wanted Poster Card */}
        <div
          className="relative bg-parchment border-4 border-double shadow-2xl p-8 transform -rotate-1 overflow-hidden"
          style={{ borderColor: '#8B6914' }}
        >
          {/* Decorative corner folds */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-transparent to-parchment-dark opacity-50" />
          <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-transparent to-parchment-dark opacity-50" />

          {/* WANTED Header */}
          <div className="text-center mb-6 relative z-10">
            <h2 className="text-5xl font-cinzel font-bold text-red mb-2 tracking-widest">
              WANTED
            </h2>
            <p className="text-sm font-cinzel text-red tracking-widest">
              DEAD OR ALIVE
            </p>
          </div>

          {/* Avatar Circle with Initials */}
          <motion.div
            className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className="w-full h-full rounded-full border-4 flex items-center justify-center text-center bg-white/10 backdrop-blur"
              style={{ borderColor: '#8B6914' }}
            >
              <span className="text-5xl font-cinzel font-bold text-red">
                {initials}
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <h3 className="text-center text-2xl font-cinzel font-bold text-navy mb-4">
            {resumeData.name}
          </h3>

          {/* Bio */}
          <p className="text-center text-sm font-inter text-gray-700 mb-6 leading-relaxed">
            {resumeData.bio}
          </p>

          {/* Bounty Information Row */}
          <div className="flex justify-between items-center mb-4 px-4 py-3 bg-red/10 border-t border-b border-dashed" style={{ borderColor: '#8B6914' }}>
            <div className="text-center flex-1">
              <p className="text-xs font-cinzel text-red uppercase tracking-widest">Bounty</p>
              <p className="text-lg font-cinzel font-bold text-red">
                ₿{bountyAmount.toLocaleString()}
              </p>
            </div>
            <div className="w-px h-12 bg-red/30" />
            <div className="text-center flex-1">
              <p className="text-xs font-cinzel text-red uppercase tracking-widest">Experience</p>
              <p className="text-lg font-cinzel font-bold text-red">
                {yearsExperience} Year+
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center text-xs font-inter text-gray-700 mb-4 space-y-1">
            <p>📍 {resumeData.personalInfo.location}</p>
            <p>📧 {resumeData.personalInfo.email}</p>
          </div>

          {/* Footer Text */}
          <p className="text-center text-xs font-cinzel uppercase tracking-widest text-red/70 text-shadow-glow">
            WORLD GOVERNMENT
          </p>

          {/* Tape effects */}
          <div
            className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-r from-yellow-100/20 to-yellow-200/20 border border-yellow-400/30"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,.03) 2px, rgba(255,255,255,.03) 4px)' }}
          />
        </div>
      </motion.div>

      {/* Decorative text below poster */}
      <motion.p
        className="mt-8 text-center text-gold font-cinzel text-sm uppercase tracking-widest"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        ~ Navigation Officer ~
      </motion.p>
    </section>
  );
}
