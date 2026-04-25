import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const SKILL_CATEGORIES = {
  PARAMECIA: { label: 'Languages & Frameworks', color: 'from-gold to-coral' },
  ZOAN: { label: 'Tools & Platforms', color: 'from-sea to-blue-900' },
  LOGIA: { label: 'Core Strengths', color: 'from-red to-coral' },
};

const SkillBar = ({ skill, index }) => {
  const proficiencyLevel = skill.proficiency >= 90 ? 'Expert' : skill.proficiency >= 75 ? 'Advanced' : 'Intermediate';

  return (
    <motion.div
      style={{ marginBottom: '24px' }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px'
      }}>
        <h4 style={{
          color: '#e8e8e8',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '600',
          fontSize: '0.875rem'
        }}>{skill.name}</h4>
        <span style={{
          fontSize: '0.75rem',
          color: '#f4c542',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>{proficiencyLevel}</span>
      </div>
      
      <motion.div
        style={{
          position: 'relative',
          height: '8px',
          backgroundColor: '#1a2340',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: 'none'
        }}
        initial={{ boxShadow: 'none' }}
        whileInView={{ boxShadow: '0 0 8px rgba(244, 197, 66, 0.4)' }}
        viewport={{ once: true }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            background: 'linear-gradient(90deg, #f4c542, #e67e22)',
            borderRadius: '4px',
            boxShadow: '0 0 8px rgba(244, 197, 66, 0.6)'
          }}
          initial={{ width: '0%' }}
          whileInView={{ width: `${skill.proficiency}%` }}
          transition={{ delay: index * 0.1 + 0.2, duration: 1 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </motion.div>
  );
};

const SkillCategory = ({ category, skills, index }) => {
  const categoryInfo = SKILL_CATEGORIES[category];
  
  return (
    <motion.div
      style={{
        backgroundColor: '#0a0e1a',
        borderTop: '4px solid #f4c542',
        borderRadius: '8px',
        padding: '24px',
        height: '100%'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Category Badge */}
      <div style={{ marginBottom: '16px' }}>
        <span style={{
          display: 'inline-block',
          paddingLeft: '12px',
          paddingRight: '12px',
          paddingTop: '4px',
          paddingBottom: '4px',
          backgroundColor: '#c0392b',
          color: '#e8e8e8',
          fontSize: '0.75rem',
          fontFamily: 'Cinzel, serif',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          borderRadius: '4px',
          marginBottom: '8px',
          display: 'inline-block'
        }}>
          {category}
        </span>
        <h3 style={{
          fontSize: '1.25rem',
          fontFamily: 'Cinzel, serif',
          color: '#f4c542'
        }}>{categoryInfo.label}</h3>
      </div>

      {/* Skills List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {skills.map((skill, idx) => (
          <SkillBar key={skill.name} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  // Group skills by category
  const groupedSkills = {
    PARAMECIA: resumeData.skills.filter(s => s.category === 'PARAMECIA'),
    ZOAN: resumeData.skills.filter(s => s.category === 'ZOAN'),
    LOGIA: resumeData.skills.filter(s => s.category === 'LOGIA'),
  };

  return (
    <section id="skills" style={{
      width: '100%',
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingTop: '64px',
      paddingBottom: '64px',
      backgroundColor: '#0d1b2a'
    }}>
      {/* Section Header */}
      <div style={{ marginBottom: '64px' }}>
        <motion.h2
          style={{
            fontSize: '3.5rem',
            fontFamily: 'Cinzel, serif',
            color: '#f4c542',
            textAlign: 'center',
            marginBottom: '8px'
          }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Devil Fruit Abilities
        </motion.h2>
        <motion.p
          style={{
            fontSize: '1.25rem',
            textAlign: 'center',
            color: 'rgba(232, 232, 232, 0.7)',
            marginBottom: '48px',
            fontFamily: 'Inter, sans-serif'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Powers awakened through years of training
        </motion.p>
      </div>

      {/* Skills Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px',
        maxWidth: '80rem',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        {Object.entries(groupedSkills).map(([category, skills], index) => (
          skills.length > 0 && (
            <SkillCategory
              key={category}
              category={category}
              skills={skills}
              index={index}
            />
          )
        ))}
      </div>

      {/* Decorative divider */}
      <motion.div
        style={{
          marginTop: '64px',
          display: 'flex',
          justifyContent: 'center',
          gap: '8px'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#f4c542',
              animation: `shimmer 2s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </motion.div>

      <style>{`
        @keyframes shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
      
      <motion.div
        className="relative h-2 bg-gray-800 rounded-full overflow-hidden"
        initial={{ boxShadow: 'none' }}
        whileInView={{ boxShadow: '0 0 8px rgba(244, 197, 66, 0.4)' }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold to-coral rounded-full"
          initial={{ width: '0%' }}
          whileInView={{ width: `${skill.proficiency}%` }}
          transition={{ delay: index * 0.1 + 0.2, duration: 1 }}
          viewport={{ once: true }}
          style={{
            boxShadow: '0 0 8px rgba(244, 197, 66, 0.6)'
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const SkillCategory = ({ category, skills, index }) => {
  const categoryInfo = SKILL_CATEGORIES[category];
  
  return (
    <motion.div
      className="bg-navy border-t-4 border-gold rounded-lg p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      style={{ borderTopColor: 'var(--gold)' }}
    >
      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-red text-white text-xs font-cinzel uppercase tracking-wider rounded-sm mb-2">
          {category}
        </span>
        <h3 className="text-xl font-cinzel text-gold">{categoryInfo.label}</h3>
      </div>

      {/* Skills List */}
      <div className="space-y-6">
        {skills.map((skill, idx) => (
          <SkillBar key={skill.name} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  // Group skills by category
  const groupedSkills = {
    PARAMECIA: resumeData.skills.filter(s => s.category === 'PARAMECIA'),
    ZOAN: resumeData.skills.filter(s => s.category === 'ZOAN'),
    LOGIA: resumeData.skills.filter(s => s.category === 'LOGIA'),
  };

  return (
    <section id="skills" className="section-container bg-sea">
      {/* Section Header */}
      <div className="mb-16">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Devil Fruit Abilities
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Powers awakened through years of training
        </motion.p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(groupedSkills).map(([category, skills], index) => (
          skills.length > 0 && (
            <SkillCategory
              key={category}
              category={category}
              skills={skills}
              index={index}
            />
          )
        ))}
      </div>

      {/* Decorative divider */}
      <motion.div
        className="mt-16 flex justify-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-gold"
            style={{
              animation: `shimmer 2s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
