import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { containerVariants, itemVariants } from '../utils/animations';
import { FiCode, FiServer, FiDatabase, FiTool } from 'react-icons/fi';

const SkillsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
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
      title: 'Tools & Others',
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
    <section id="skills" className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background gradients */}
        <div className="absolute top-1/3 left-0 w-[30rem] h-[30rem] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[35rem] h-[35rem] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <motion.h2
          className="section-title"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Technical Skills
        </motion.h2>

        {/* Category Buttons - Sleek Premium Tab Switcher */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-16 max-w-2xl mx-auto p-1.5 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md"
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex-1 min-w-[120px] px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeCategory === key
                  ? 'bg-accent text-white shadow-[0_0_20px_rgba(255,107,0,0.3)]'
                  : 'text-white/60 hover:text-white hover:bg-white/[0.03]'
              }`}
              whileTap={{ scale: 0.98 }}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid - Bento Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Bento Card Left - Category Highlight */}
          <motion.div
            className="lg:col-span-4 glass rounded-2xl p-10 flex flex-col items-center justify-center border border-white/[0.05] shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            {/* Ambient orange glow inside card */}
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

          {/* Bento Card Right - Skill Bars list */}
          <motion.div
            className="lg:col-span-8 glass rounded-2xl p-8 border border-white/[0.05] shadow-xl flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="space-y-6">
              {activeSkills.skills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants} className="w-full">
                  <div className="flex items-center justify-between mb-2">
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
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          ref={ref}
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
              className="glass p-6 rounded-xl text-center border border-white/[0.05] hover:border-accent/30 transition-all duration-300 shadow-md"
              variants={itemVariants}
              whileHover={{ y: -4, backgroundColor: 'rgba(255, 107, 0, 0.02)' }}
            >
              <h4 className="font-extrabold text-white text-base mb-1 tracking-wide">{item.title}</h4>
              <p className="text-white/50 text-sm font-light">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
