import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { containerVariants, itemVariants } from '../utils/animations';

const TimelineSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const timeline = [
    {
      title: 'Started Computer Science',
      description: 'Began my BSc Computer Science degree and discovered my passion for technology.',
      year: '2024',
      icon: '🎓',
    },
    {
      title: 'Learned HTML & CSS',
      description: 'Started web development journey by mastering the fundamentals of HTML and CSS.',
      year: '2024',
      icon: '📝',
    },
    {
      title: 'Mastered JavaScript',
      description: 'Deep dived into JavaScript, understanding OOP, async programming, and modern ES6+ features.',
      year: '2025',
      icon: '⚡',
    },
    {
      title: 'Node.js & Express',
      description: 'Expanded to backend development, learning Node.js and building RESTful APIs with Express.',
      year: '2025',
      icon: '🟢',
    },
    {
      title: 'MongoDB & Databases',
      description: 'Mastered MongoDB and database design principles for scalable applications.',
      year: '2025',
      icon: '💾',
    },
    {
      title: 'React.js Expertise',
      description: 'Became proficient with React, building interactive UIs with hooks, state management, and more.',
      year: '2026',
      icon: '⚛️',
    },
    {
      title: 'MERN Stack Master',
      description: 'Completed my journey to becoming a proficient full-stack developer using MERN stack.',
      year: '2026',
      icon: '🚀',
    },
  ];

  return (
    <section ref={ref} id="timeline" className="relative py-16 sm:py-24 lg:py-32 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background gradients */}
        <div className="absolute top-1/4 right-0 w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <motion.h2
          className="section-title text-4xl sm:text-5xl md:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          My Learning Journey
        </motion.h2>

        {/* Timeline */}
        <div className="relative mt-10 sm:mt-16">

          {/* ─── MOBILE layout: left-aligned vertical line ─── */}
          <div className="block md:hidden">
            {/* Left vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent/30 to-transparent" />

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 items-start pl-12 relative"
                >
                  {/* Dot */}
                  <motion.div
                    className="absolute left-[13px] top-4 w-4 h-4 rounded-full border-2 border-accent bg-[#0A0A0A] z-10 shadow-[0_0_10px_#FF6B00] flex-shrink-0"
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        '0 0 5px rgba(255, 107, 0, 0.4)',
                        '0 0 12px rgba(255, 107, 0, 0.7)',
                        '0 0 5px rgba(255, 107, 0, 0.4)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Card */}
                  <motion.div
                    className="glass p-4 rounded-xl border border-white/[0.05] hover:border-accent/30 transition-all duration-300 shadow-xl group cursor-pointer w-full"
                    whileHover={{ y: -2, backgroundColor: 'rgba(255, 107, 0, 0.01)' }}
                  >
                    <div className="flex items-center justify-between mb-2 border-b border-white/5 pb-2">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-xs font-mono text-accent font-extrabold tracking-widest">{item.year}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-xs font-light leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ─── DESKTOP layout: alternating zigzag ─── */}
          <div className="hidden md:block">
            {/* Center vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent/30 to-transparent transform -translate-x-1/2" />

            <motion.div
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex gap-8 items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className="w-full md:w-1/2">
                    <motion.div
                      className="glass p-6 rounded-xl border border-white/[0.05] hover:border-accent/30 transition-all duration-300 shadow-xl group cursor-pointer"
                      whileHover={{ y: -4, backgroundColor: 'rgba(255, 107, 0, 0.01)' }}
                    >
                      <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2.5">
                        <span className="text-3xl filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]">{item.icon}</span>
                        <span className="text-xs font-mono text-accent font-extrabold tracking-widest">{item.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm font-light leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-0 justify-center">
                    <motion.div
                      className="w-4 h-4 rounded-full border-2 border-accent bg-[#0A0A0A] z-10 shadow-[0_0_10px_#FF6B00]"
                      animate={{
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          '0 0 5px rgba(255, 107, 0, 0.4)',
                          '0 0 15px rgba(255, 107, 0, 0.7)',
                          '0 0 5px rgba(255, 107, 0, 0.4)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* End milestone */}
          <motion.div
            className="text-center mt-12 sm:mt-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="inline-block"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-accent to-[#FF3C00] shadow-[0_0_20px_rgba(255,107,0,0.4)] flex items-center justify-center text-lg sm:text-xl">
                🌟
              </div>
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-4 uppercase tracking-tight font-mono">Currently</h3>
            <p className="text-white/50 text-xs sm:text-sm mt-1 max-w-sm mx-auto font-light leading-relaxed">
              Continuously learning, building amazing projects, and mastering new technologies
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
