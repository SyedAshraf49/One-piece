import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const CompassRose = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 100 100"
    style={{ fill: 'none', stroke: '#f4c542', strokeWidth: 2 }}
  >
    {/* Outer circle */}
    <circle cx="50" cy="50" r="45" />
    
    {/* Cardinal directions */}
    <line x1="50" y1="10" x2="50" y2="25" />
    <line x1="90" y1="50" x2="75" y2="50" />
    <line x1="50" y1="90" x2="50" y2="75" />
    <line x1="10" y1="50" x2="25" y2="50" />
    
    {/* Intercardinal directions */}
    <line x1="74" y1="26" x2="65" y2="35" />
    <line x1="74" y1="74" x2="65" y2="65" />
    <line x1="26" y1="74" x2="35" y2="65" />
    <line x1="26" y1="26" x2="35" y2="35" />
    
    {/* Inner decorative element */}
    <polygon points="50,20 65,50 50,80 35,50" fill="none" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Center point */}
    <circle cx="50" cy="50" r="3" fill="#f4c542" />
  </svg>
);

const WaveDivider = () => {
  const waves = [
    { offset: 0, opacity: 0.5 },
    { offset: 20, opacity: 0.4 },
    { offset: 40, opacity: 0.3 }
  ];

  return (
    <div style={{ position: 'relative', height: '128px', overflow: 'hidden' }}>
      {waves.map((wave, idx) => (
        <svg
          key={idx}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            opacity: wave.opacity,
            animation: `wave ${3 + idx * 0.5}s ease-in-out infinite`,
            animationDelay: `${idx * 0.2}s`
          }}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d={`M0,50 Q300,${25 + wave.offset},600,50 T1200,50 L1200,120 L0,120 Z`}
            fill={`rgba(13, 27, 42, ${0.3 + wave.opacity})`}
          />
        </svg>
      ))}
    </div>
  );
};

export default function Hero() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const yearsExperience = resumeData.experience.length > 0 ? 1 : 0;
  const bountyAmount = (yearsExperience || 1) * 1000000000;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(to bottom right, #0d1b2a, #0a0e1a)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      paddingTop: '80px',
      paddingBottom: 0
    }}>
      {/* Background stars */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              borderRadius: '50%',
              backgroundColor: '#e8e8e8',
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `shimmer ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + 's'
            }}
          />
        ))}
      </div>

      {/* Compass Rose */}
      <motion.div
        style={{
          position: 'absolute',
          top: '32px',
          right: '32px',
          zIndex: 20
        }}
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <CompassRose />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          paddingLeft: '16px',
          paddingRight: '16px',
          maxWidth: '56rem'
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Bounty Label */}
        <motion.div
          style={{
            marginBottom: '24px',
            display: 'inline-block'
          }}
          variants={itemVariants}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingTop: '8px',
            paddingBottom: '8px',
            backgroundColor: '#c0392b',
            borderRadius: '6px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <span style={{
              color: '#e8e8e8',
              fontFamily: 'Cinzel, serif',
              fontWeight: 'bold',
              fontSize: '0.875rem',
              textTransform: 'uppercase'
            }}>BOUNTY:</span>
            <span style={{
              color: '#f4c542',
              fontFamily: 'Cinzel, serif',
              fontWeight: 'bold',
              fontSize: '1.125rem'
            }}>
              {resumeData.title}
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          style={{
            fontSize: 'clamp(2rem, 8vw, 4.5rem)',
            fontFamily: 'Cinzel, serif',
            color: '#f4c542',
            textShadow: '0 0 10px rgba(244, 197, 66, 0.5), 0 0 20px rgba(244, 197, 66, 0.3), 0 0 30px rgba(192, 57, 43, 0.2)',
            fontWeight: 'bold',
            marginBottom: '16px',
            lineHeight: 1.2
          }}
          variants={itemVariants}
        >
          {resumeData.name}
        </motion.h1>

        {/* Bounty Amount */}
        <motion.p
          style={{
            fontSize: '1.25rem',
            color: '#f4c542',
            fontFamily: 'Cinzel, serif',
            marginBottom: '24px'
          }}
          variants={itemVariants}
        >
          ₿{bountyAmount.toLocaleString()}
        </motion.p>

        {/* Bio Tagline */}
        <motion.p
          style={{
            fontSize: '1rem',
            color: 'rgba(232, 232, 232, 0.8)',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '48px',
            maxWidth: '32rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          variants={itemVariants}
        >
          {resumeData.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          variants={itemVariants}
        >
          <button
            onClick={() => handleScroll('projects')}
            style={{
              paddingLeft: '24px',
              paddingRight: '24px',
              paddingTop: '12px',
              paddingBottom: '12px',
              border: '2px solid #f4c542',
              color: '#f4c542',
              backgroundColor: '#0a0e1a',
              borderRadius: '8px',
              fontFamily: 'Cinzel, serif',
              fontSize: '0.875rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 0 0 transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f4c542';
              e.target.style.color = '#0a0e1a';
              e.target.style.boxShadow = '0 0 20px rgba(244, 197, 66, 0.5)';
              e.target.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#0a0e1a';
              e.target.style.color = '#f4c542';
              e.target.style.boxShadow = '0 0 0 transparent';
              e.target.style.transform = 'translateY(0)';
            }}
            aria-label="View my projects"
          >
            View My Voyage
          </button>
          <button
            onClick={() => handleScroll('contact')}
            style={{
              paddingLeft: '24px',
              paddingRight: '24px',
              paddingTop: '12px',
              paddingBottom: '12px',
              backgroundColor: '#c0392b',
              color: '#e8e8e8',
              borderRadius: '8px',
              fontFamily: 'Cinzel, serif',
              fontSize: '0.875rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              border: 'none',
              transition: 'all 0.3s',
              boxShadow: '0 0 0 transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#a52a1f';
              e.target.style.boxShadow = '0 0 20px rgba(192, 57, 43, 0.5)';
              e.target.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#c0392b';
              e.target.style.boxShadow = '0 0 0 transparent';
              e.target.style.transform = 'translateY(0)';
            }}
            aria-label="Contact me"
          >
            Hail the Ship
          </button>
        </motion.div>
      </motion.div>

      {/* Wave Divider at Bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
        <WaveDivider />
      </div>

      <style>{`
        @keyframes wave {
          0% { transform: translateX(0); }
          50% { transform: translateX(25px); }
          100% { transform: translateX(0); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
  </svg>
);

const WaveDivider = () => {
  const waves = [
    { offset: 0, opacity: 0.5 },
    { offset: 20, opacity: 0.4 },
    { offset: 40, opacity: 0.3 }
  ];

  return (
    <div className="relative h-32 overflow-hidden">
      {waves.map((wave, idx) => (
        <svg
          key={idx}
          className="absolute bottom-0 left-0 w-full"
          style={{
            opacity: wave.opacity,
            animation: `wave ${3 + idx * 0.5}s ease-in-out infinite`,
            animationDelay: `${idx * 0.2}s`
          }}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d={`M0,50 Q300,${25 + wave.offset},600,50 T1200,50 L1200,120 L0,120 Z`}
            fill={`rgba(13, 27, 42, ${0.3 + wave.opacity})`}
          />
        </svg>
      ))}
    </div>
  );
};

export default function Hero() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const yearsExperience = resumeData.experience.length > 0 ? 1 : 0;
  const bountyAmount = (yearsExperience || 1) * 1000000000;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-sea to-navy flex flex-col justify-center items-center overflow-hidden pt-20 pb-0">
      {/* Background stars */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `shimmer ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + 's'
            }}
          />
        ))}
      </div>

      {/* Compass Rose */}
      <motion.div
        className="absolute top-8 right-8 z-20"
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <CompassRose />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Bounty Label */}
        <motion.div
          className="mb-6 inline-block"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red rounded-md shadow-lg">
            <span className="text-white font-cinzel font-bold text-sm uppercase">BOUNTY:</span>
            <span className="text-gold font-cinzel font-bold text-lg">
              {resumeData.title}
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-6xl md:text-8xl font-cinzel text-gold text-shadow-glow font-bold mb-4 leading-tight"
          variants={itemVariants}
        >
          {resumeData.name}
        </motion.h1>

        {/* Bounty Amount */}
        <motion.p
          className="text-xl md:text-2xl text-gold font-cinzel mb-6"
          variants={itemVariants}
        >
          ₿{bountyAmount.toLocaleString()}
        </motion.p>

        {/* Bio Tagline */}
        <motion.p
          className="text-lg md:text-xl text-white/80 font-inter mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {resumeData.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <button
            onClick={() => handleScroll('projects')}
            className="btn-gold hover:shadow-lg hover:shadow-gold/50 transform hover:-translate-y-1 transition-all"
            aria-label="View my projects"
          >
            View My Voyage
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="btn-red hover:shadow-lg hover:shadow-red/50 transform hover:-translate-y-1 transition-all"
            aria-label="Contact me"
          >
            Hail the Ship
          </button>
        </motion.div>
      </motion.div>

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <WaveDivider />
      </div>
    </section>
  );
}
