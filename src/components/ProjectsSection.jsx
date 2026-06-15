import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { containerVariants, itemVariants } from '../utils/animations';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'fullstack',
      image: '🛍️',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      details: 'Built a complete e-commerce solution with advanced features including product filtering, user authentication, order management, and admin dashboard.',
    },
    {
      id: 2,
      title: 'Pharma Distributor Management',
      category: 'fullstack',
      image: '💊',
      description: 'System for managing pharmaceutical distribution, inventory, and sales tracking.',
      tech: ['React', 'Express', 'MongoDB', 'MySQL'],
      github: 'https://github.com/prema-16/Padmavati-Pharma',
      live: 'https://padmavatipharma.vercel.app/',
      details: 'Developed a comprehensive management system with real-time inventory tracking, sales analytics, and automated reports.',
    },
    {
      id: 3,
      title: 'Authentication System',
      category: 'backend',
      image: '🔐',
      description: 'Secure authentication system with JWT, OAuth, and email verification.',
      tech: ['Node.js', 'Express', 'JWT', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
      details: 'Implemented robust authentication with password hashing, JWT tokens, refresh token rotation, and multi-factor authentication support.',
    },
    {
      id: 4,
      title: 'Task Manager App',
      category: 'frontend',
      image: '✓',
      description: 'Interactive task management application with real-time updates and persistent storage.',
      tech: ['React', 'Redux', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
      details: 'Created a modern task management app with features like drag-and-drop, categories, priorities, and cloud sync.',
    },
    {
      id: 5,
      title: 'Weather App',
      category: 'frontend',
      image: '🌤️',
      description: 'Real-time weather application with location-based forecasts and detailed analytics.',
      tech: ['React', 'API Integration', 'Framer Motion'],
      github: 'https://github.com',
      live: 'https://example.com',
      details: 'Built weather app with real-time data, interactive maps, weather alerts, and beautiful UI animations.',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'fullstack',
      image: '🎨',
      description: 'Modern, responsive portfolio website with premium design and smooth animations.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com',
      live: 'https://example.com',
      details: 'Designed and developed a stunning portfolio featuring glassmorphism, animations, and modern UI patterns.',
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background gradients */}
        <div className="absolute top-0 right-1/4 w-[35rem] h-[35rem] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[30rem] h-[30rem] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <motion.h2
          className="section-title"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-2.5 justify-center mb-16 max-w-xl mx-auto p-1.5 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {['all', 'fullstack', 'frontend', 'backend'].map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-1 min-w-[100px] px-5 py-2.5 rounded-lg text-sm font-semibold transition-all capitalize ${activeCategory === cat
                ? 'bg-accent text-white shadow-[0_0_20px_rgba(255,107,0,0.3)]'
                : 'text-white/60 hover:text-white hover:bg-white/[0.03]'
                }`}
              whileTap={{ scale: 0.98 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <motion.div
                  className="glass flex flex-col h-full overflow-hidden rounded-2xl border border-white/[0.05] hover:border-accent/30 transition-all duration-300 shadow-xl"
                  whileHover={{ y: -8 }}
                >
                  {/* Project Image */}
                  <div className="w-full h-52 bg-gradient-to-br from-[#161616] to-[#0A0A0A] border-b border-white/5 flex items-center justify-center text-7xl overflow-hidden relative group-hover:from-accent/5 group-hover:to-black transition-colors duration-300">
                    {/* Subtle grid mesh overlay */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

                    <motion.div
                      className="transition-transform duration-500 group-hover:scale-125 filter drop-shadow-[0_10px_20px_rgba(255,107,0,0.2)]"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {project.image}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-4 leading-relaxed font-light">{project.description}</p>
                    </div>

                    <div>
                      {/* Project Stats */}
                      <div className="flex items-center gap-1.5 text-[0.65rem] font-mono text-white/40 mb-4 tracking-widest uppercase border-t border-b border-white/5 py-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span>
                          {project.id === 1 && "Load Time: 0.8s | Conv: +24%"}
                          {project.id === 2 && "Uptime: 99.9% | Sync: Live"}
                          {project.id === 3 && "Auth Rate: <3ms | JWT/MFA"}
                          {project.id === 4 && "Framer FPS: 60 | Vite Build"}
                          {project.id === 5 && "API Delay: <100ms | Acc: 98%"}
                          {project.id === 6 && "Lighthouse: 100/100 | UI: High"}
                        </span>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="text-[0.65rem] font-mono px-2.5 py-1 rounded bg-white/[0.03] text-white/80 border border-white/[0.05]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="grid grid-cols-2 gap-3" onClick={(e) => e.stopPropagation()}>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-all text-xs font-semibold"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FiGithub size={14} />
                          <span>GitHub</span>
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-accent text-white hover:shadow-[0_0_15px_rgba(255,107,0,0.3)] transition-all text-xs font-semibold"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FiExternalLink size={14} />
                          <span>Live Demo</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="glass rounded-2xl max-w-xl w-full p-8 overflow-y-auto border border-white/[0.08] shadow-2xl relative"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-extrabold text-white mb-2 tracking-tight">{selectedProject.title}</h3>
                    <div className="w-12 h-1 bg-accent rounded" />
                  </div>
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FiX size={18} />
                  </motion.button>
                </div>

                <div className="space-y-6">
                  <p className="text-white/70 leading-relaxed font-light text-sm">{selectedProject.details}</p>

                  <div>
                    <h4 className="font-semibold text-white text-sm mb-2.5">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 rounded-lg bg-white/[0.03] text-white/80 border border-white/[0.05] text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-white/5">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex-1 flex items-center justify-center gap-2 text-sm"
                      whileHover={{ scale: 1.02 }}
                    >
                      <FiGithub size={16} />
                      GitHub
                    </motion.a>
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 flex items-center justify-center gap-2 text-sm"
                      whileHover={{ scale: 1.02 }}
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
