import { motion } from 'framer-motion';
import { Anchor } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const ExperienceEntry = ({ experience, index, isLeft }) => {
  return (
    <motion.div
      className={`flex items-center mb-12 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Timeline connector and node */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-full flex-col items-center">
        <div className="h-12 w-1 bg-gradient-to-b from-gold to-transparent" />
        <motion.div
          className="w-12 h-12 rounded-full bg-navy border-4 border-gold flex items-center justify-center relative z-10 shadow-lg"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Anchor size={20} className="text-gold" />
        </motion.div>
        <div className="h-12 w-1 bg-gradient-to-b from-transparent to-gold" />
      </div>

      {/* Mobile Timeline Node */}
      <motion.div
        className="md:hidden flex items-center gap-4 mb-8 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-4 h-4 rounded-full bg-gold flex-shrink-0" />
        <div className="h-1 flex-1 bg-gradient-to-r from-gold to-transparent" />
      </motion.div>

      {/* Content Card */}
      <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'} px-4 md:px-0`}>
        <motion.div
          className="bg-navy border-l-4 border-gold rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.02 }}
        >
          {/* Header with Company and Duration */}
          <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
            <h3 className="text-2xl font-cinzel text-gold">{experience.company}</h3>
            <span className="text-xs font-cinzel text-red uppercase tracking-wider bg-red/10 px-2 py-1 rounded">
              {experience.duration}
            </span>
          </div>

          {/* Role */}
          <p className="text-lg font-cinzel text-white mb-3">{experience.role}</p>

          {/* Description */}
          <p className="text-sm font-inter text-white/70 mb-4">
            {experience.description}
          </p>

          {/* Tech Tags */}
          {experience.tech && experience.tech.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {experience.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gold/20 border border-gold text-gold text-xs font-inter font-semibold rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-sea">
      {/* Section Header */}
      <div className="mb-16">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ship's Log
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ports visited, battles won
        </motion.p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central Timeline Line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-gold to-transparent" />

        {/* Experience Entries */}
        {resumeData.experience.length > 0 ? (
          <div className="relative">
            {resumeData.experience.map((exp, index) => (
              <ExperienceEntry
                key={index}
                experience={exp}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 text-lg font-inter">
              Journey ahead awaits discovery...
            </p>
          </motion.div>
        )}
      </div>

      {/* Education Section */}
      {resumeData.education && resumeData.education.length > 0 && (
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-cinzel text-gold mb-8 text-center">Training Grounds</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-navy border border-gold/30 rounded-lg p-6 hover:border-gold transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-cinzel text-gold mb-2">{edu.degree}</h4>
                <p className="text-sm font-inter text-white/80 mb-2">{edu.institution}</p>
                <p className="text-xs font-inter text-white/60">{edu.duration}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
