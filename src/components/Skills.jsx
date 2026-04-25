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
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-white font-inter font-semibold text-sm">{skill.name}</h4>
        <span className="text-xs text-gold uppercase tracking-wider">{proficiencyLevel}</span>
      </div>
      
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
