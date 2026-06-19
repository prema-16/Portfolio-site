import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { containerVariants, itemVariants } from '../utils/animations';
import { FiCode, FiServer, FiDatabase, FiTool } from 'react-icons/fi';

const SkillsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      icon: FiCode,
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'React', level: 90 },
        { name: 'Tailwind CSS', level: 88 },
      ],
    },
    backend: {
      icon: FiServer,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'REST API', level: 88 },
      ],
    },
    database: {
      icon: FiDatabase,
      title: 'Database',
      skills: [
        { name: 'MongoDB', level: 82 },
        { name: 'MySQL', level: 78 },
      ],
    },
    tools: {
      icon: FiTool,
      title: 'Tools',
      skills: [
        { name: 'Git', level: 88 },
        { name: 'GitHub', level: 88 },
        { name: 'Postman', level: 85 },
        { name: 'VS Code', level: 92 },
        { name: 'Framer Motion', level: 80 },
      ],
    },
  };

  const activeSkills = skillCategories[activeCategory];
  const IconComponent = activeSkills.icon;

  return (
    <section ref={ref} id="skills" className="relative py-16 sm:py-24 lg:py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background gradients */}
        <div className="absolute top-1/3 left-0 w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[20rem] sm:w-[35rem] h-[20rem] sm:h-[35rem] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <motion.h2
          className="section-title text-4xl sm:text-5xl md:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Technical Skills
        </motion.h2>

        {/* Category Buttons - scrollable on mobile */}
        <motion.div
          className="flex gap-2 justify-start sm:justify-center mb-10 sm:mb-16 overflow-x-auto pb-2 sm:pb-0 px-1 sm:max-w-2xl sm:mx-auto sm:p-1.5 sm:rounded-xl sm:bg-white/[0.02] sm:border sm:border-white/[0.05] sm:backdrop-blur-md no-scrollbar"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex-shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === key
                  ? 'bg-accent text-white shadow-[0_0_20px_rgba(255,107,0,0.3)]'
                  : 'text-white/60 hover:text-white hover:bg-white/[0.05] border border-white/[0.08]'
              }`}
              whileTap={{ scale: 0.97 }}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid - Bento Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Bento Card Left - Category Highlight — hidden on mobile */}
          <motion.div
            className="hidden lg:flex lg:col-span-4 glass rounded-2xl p-10 flex-col items-center justify-center border border-white/[0.05] shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-radial-gradient from-accent/5 via-transparent to-transparent pointer-events-none" />
            <motion.div
              className="text-8xl text-accent/80 drop-shadow-[0_0_25px_rgba(255,107,0,0.3)] mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <IconComponent />
            </motion.div>
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider font-mono">{activeSkills.title}</h3>
            <p className="text-white/40 text-xs mt-2 font-mono">Expertise Index</p>
          </motion.div>

          {/* Mobile Category Header */}
          <motion.div
            className="lg:hidden flex items-center gap-3 px-1"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
          >
            <div className="text-3xl text-accent/80">
              <IconComponent />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">{activeSkills.title}</h3>
              <p className="text-white/40 text-xs font-mono">Expertise Index</p>
            </div>
          </motion.div>

          {/* Bento Card Right - Skill Bars */}
          <motion.div
            className="lg:col-span-8 glass rounded-2xl p-5 sm:p-8 border border-white/[0.05] shadow-xl flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="space-y-4 sm:space-y-6">
              {activeSkills.skills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants} className="w-full">
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <span className="font-semibold text-white/90 text-sm tracking-wide">{skill.name}</span>
                    <span className="text-sm font-mono font-bold text-accent">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent to-[#FF8F3d] rounded-full shadow-[0_0_8px_#FF6B00]"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Summary Grid */}
        <motion.div
          className="mt-10 sm:mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {[
            { title: 'Frontend', desc: 'React, JavaScript, Tailwind' },
            { title: 'Backend', desc: 'Node.js, Express, REST API' },
            { title: 'Database', desc: 'MongoDB, MySQL' },
            { title: 'Tools', desc: 'Git, VS Code, Postman' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="glass p-4 sm:p-6 rounded-xl text-center border border-white/[0.05] hover:border-accent/30 transition-all duration-300 shadow-md"
              variants={itemVariants}
              whileHover={{ y: -4, backgroundColor: 'rgba(255, 107, 0, 0.02)' }}
            >
              <h4 className="font-extrabold text-white text-sm sm:text-base mb-1 tracking-wide">{item.title}</h4>
              <p className="text-white/50 text-xs font-light">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
