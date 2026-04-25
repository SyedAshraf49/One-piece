import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const WaxSeal = ({ index }) => (
  <div style={{
    position: 'absolute',
    top: '16px',
    left: '16px',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: '#c0392b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
    boxShadow: '0 4px 8px rgba(192, 57, 43, 0.6), inset -2px -2px 4px rgba(0,0,0,0.2)'
  }}>
    <span style={{
      color: '#e8e8e8',
      fontFamily: 'Cinzel, serif',
      fontWeight: 'bold',
      fontSize: '1.125rem'
    }}>{index}</span>
  </div>
);

const CornerFold = () => (
  <div style={{
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
    borderLeft: '40px solid transparent',
    borderTop: '40px solid #999',
    filter: 'drop-shadow(-2px -2px 2px rgba(0,0,0,0.3))'
  }} />
);

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      style={{
        position: 'relative',
        backgroundColor: '#f5e6c8',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -32 }}
      viewport={{ once: true }}
    >
      {/* Wax Seal */}
      <WaxSeal index={index + 1} />

      {/* Corner Fold */}
      <CornerFold />

      {/* Card Content */}
      <div style={{
        padding: '24px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Project Name */}
        <h3 style={{
          fontSize: '1.5rem',
          fontFamily: 'Cinzel, serif',
          color: '#0a0e1a',
          fontWeight: 'bold',
          marginBottom: '12px',
          paddingRight: '48px'
        }}>
          {project.name}
        </h3>

        {/* Tech Stack */}
        <div style={{ marginBottom: '16px' }}>
          <p style={{
            fontSize: '0.75rem',
            fontFamily: 'Cinzel, serif',
            color: '#c0392b',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '8px'
          }}>DISCOVERED AT:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tech.map((tech) => (
              <span key={tech} style={{
                paddingLeft: '8px',
                paddingRight: '8px',
                paddingTop: '4px',
                paddingBottom: '4px',
                backgroundColor: '#f4c542',
                color: '#0a0e1a',
                fontSize: '0.75rem',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '600',
                borderRadius: '4px'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p style={{
          fontSize: '0.875rem',
          fontFamily: 'Inter, sans-serif',
          color: '#4a4a4a',
          marginBottom: '24px',
          flex: 1
        }}>
          {project.description}
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '12px',
          paddingTop: '16px',
          borderTop: '1px solid #ccc'
        }}>
          {project.liveLink && project.liveLink !== '#' && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingTop: '8px',
              paddingBottom: '8px',
              border: '2px solid #f4c542',
              color: '#f4c542',
              backgroundColor: 'transparent',
              borderRadius: '4px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 'bold',
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'all 0.3s',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f4c542';
              e.currentTarget.style.color = '#0a0e1a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#f4c542';
            }}
            aria-label={`View ${project.name} live`}
            >
              <ExternalLink size={16} />
              Chart Course
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingTop: '8px',
              paddingBottom: '8px',
              border: '2px solid #c0392b',
              color: '#c0392b',
              backgroundColor: 'transparent',
              borderRadius: '4px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 'bold',
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'all 0.3s',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#c0392b';
              e.currentTarget.style.color = '#e8e8e8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#c0392b';
            }}
            aria-label={`View ${project.name} code`}
            >
              <Github size={16} />
              Logbook
            </a>
          )}
        </div>
      </div>

      {/* Noise Texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        mixBlendMode: 'multiply',
        opacity: 0.2,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px)'
      }} />
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" style={{
      width: '100%',
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingTop: '64px',
      paddingBottom: '64px',
      backgroundColor: '#0a0e1a'
    }}>
      {/* Section Header */}
      <div style={{ marginBottom: '64px' }}>
        <motion.h2 style={{
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
          The Grand Line
        </motion.h2>
        <motion.p style={{
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
          Islands discovered on the voyage
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px',
        maxWidth: '80rem',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        {resumeData.projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>

      {/* Empty state message if no projects */}
      {resumeData.projects.length === 0 && (
        <motion.div style={{ textAlign: 'center', paddingTop: '48px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p style={{
            color: 'rgba(232, 232, 232, 0.6)',
            fontSize: '1.125rem',
            fontFamily: 'Inter, sans-serif'
          }}>
            More islands to explore coming soon...
          </p>
        </motion.div>
      )}
    </section>
  );
}

const CornerFold = () => (
  <div
    className="absolute bottom-0 right-0 w-0 h-0 border-l-[40px] border-t-[40px] border-l-transparent border-t-gray-400"
    style={{
      filter: 'drop-shadow(-2px -2px 2px rgba(0,0,0,0.3))'
    }}
  />
);

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="relative bg-parchment rounded-lg overflow-hidden group h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
    >
      {/* Wax Seal */}
      <WaxSeal index={index + 1} />

      {/* Corner Fold */}
      <CornerFold />

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Project Name */}
        <h3 className="text-2xl font-cinzel text-navy font-bold mb-3 pr-12">
          {project.name}
        </h3>

        {/* Tech Stack */}
        <div className="mb-4">
          <p className="text-xs font-cinzel text-red uppercase tracking-wider mb-2">DISCOVERED AT:</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gold text-navy text-xs font-inter font-semibold rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm font-inter text-gray-700 mb-6 flex-1">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-300">
          {project.liveLink && project.liveLink !== '#' && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-navy rounded font-inter font-bold text-sm transition-all"
              aria-label={`View ${project.name} live`}
            >
              <ExternalLink size={16} />
              Chart Course
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border-2 border-red text-red bg-transparent hover:bg-red hover:text-white rounded font-inter font-bold text-sm transition-all"
              aria-label={`View ${project.name} code`}
            >
              <Github size={16} />
              Logbook
            </a>
          )}
        </div>
      </div>

      {/* Noise Texture */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-20"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px)'
        }}
      />
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="section-container bg-navy">
      {/* Section Header */}
      <div className="mb-16">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          The Grand Line
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Islands discovered on the voyage
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {resumeData.projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>

      {/* Empty state message if no projects */}
      {resumeData.projects.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 text-lg font-inter">
            More islands to explore coming soon...
          </p>
        </motion.div>
      )}
    </section>
  );
}
