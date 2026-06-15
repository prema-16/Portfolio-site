import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { containerVariants, itemVariants } from '../utils/animations';

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { label: 'Projects Completed', value: '5+' },
    { label: 'Technologies Learned', value: '10+' },
    { label: 'Hours of Coding', value: '300+' },
    { label: 'Learning Journey', value: '2+ Years' },
  ];

  return (
    <section id="about" className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background gradients */}
        <div className="absolute top-1/2 right-0 w-[40rem] h-[40rem] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <motion.h2
          className="section-title"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left - Content */}
          <motion.div className="space-y-6 lg:col-span-7" variants={itemVariants}>
            <motion.div className="glass p-8 rounded-2xl border border-white/[0.05] hover:border-accent/20 transition-all duration-300 shadow-xl" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">Who I Am</h3>
              <p className="text-white/75 leading-relaxed font-light">
                I'm a passionate Full Stack Developer and Computer Science student focused on building modern web applications. I enjoy turning ideas into scalable digital solutions using the MERN stack and continuously improving my skills through real-world projects.
              </p>
            </motion.div>

            <motion.div className="glass p-8 rounded-2xl border border-white/[0.05] hover:border-accent/20 transition-all duration-300 shadow-xl" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">My Journey</h3>
              <p className="text-white/75 leading-relaxed font-light">
                My journey began with HTML, CSS, and JavaScript, which sparked my interest in web development. Over time, I expanded my knowledge to React, Node.js, Express.js, and MongoDB, building projects that strengthened both my frontend and backend development skills.
              </p>
            </motion.div>

            <motion.div className="glass p-8 rounded-2xl border border-white/[0.05] hover:border-accent/20 transition-all duration-300 shadow-xl" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">My Goals</h3>
              <p className="text-white/75 leading-relaxed font-light">
                My goal is to become a skilled software engineer capable of creating impactful applications that solve real-world problems. I aim to contribute to innovative teams, learn emerging technologies, and continuously grow as a developer.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Stats and Education */}
          <motion.div className="space-y-8 lg:col-span-5 w-full" variants={containerVariants}>
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass p-6 rounded-xl text-center group border border-white/[0.05] hover:border-accent/30 transition-all duration-300 shadow-lg"
                  variants={itemVariants}
                  whileHover={{ y: -4, backgroundColor: 'rgba(255, 107, 0, 0.02)' }}
                >
                  <motion.div
                    className="text-4xl font-extrabold text-[#FF6B00] mb-2 tracking-tight"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-white/50 text-xs font-mono uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <motion.div className="glass p-8 rounded-2xl border border-white/[0.05] hover:border-accent/20 transition-all duration-300 shadow-xl" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">Education</h3>
              <div className="space-y-6">
                <div className="border-l border-accent/40 pl-5 relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent absolute -left-[5px] top-1.5 shadow-[0_0_10px_#FF6B00]" />
                  <h4 className="font-bold text-white text-lg">Bachelor of Science in Computer Science</h4>
                  <p className="text-white/60 text-sm">University / Institute</p>
                  <p className="text-accent text-xs font-mono mt-1">Currently Pursuing</p>
                </div>
                <div className="border-l border-white/20 pl-5 relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20 absolute -left-[5px] top-1.5" />
                  <h4 className="font-bold text-white text-lg">Self-taught Developer</h4>
                  <p className="text-white/60 text-sm">MERN Stack & Web Development</p>
                  <p className="text-white/40 text-xs font-mono mt-1">Continuous Learning</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
