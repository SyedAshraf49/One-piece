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
    <section id="about" className="section-container bg-navy flex flex-col items-center justify-center">
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
