import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const WaxSeal = ({ index }) => (
  <div
    className="absolute top-4 left-4 w-12 h-12 rounded-full bg-red flex items-center justify-center shadow-lg z-20"
    style={{
      boxShadow: '0 4px 8px rgba(192, 57, 43, 0.6), inset -2px -2px 4px rgba(0,0,0,0.2)'
    }}
  >
    <span className="text-white font-cinzel font-bold text-lg">{index}</span>
  </div>
);

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
