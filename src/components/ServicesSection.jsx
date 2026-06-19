import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link as ScrollLink } from 'react-scroll';
import { containerVariants, itemVariants } from '../utils/animations';
import { FiCode, FiServer, FiMonitor, FiDatabase, FiLayout, FiLink } from 'react-icons/fi';

const ServicesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: FiCode,
      title: 'Frontend Development',
      description: 'Creating responsive, modern user interfaces with React, Tailwind CSS, and Framer Motion animations.',
      features: ['React Components', 'Responsive Design', 'Animations', 'Performance'],
    },
    {
      icon: FiServer,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Express.js, and RESTful API design.',
      features: ['REST APIs', 'Authentication', 'Database Integration', 'Error Handling'],
    },
    {
      icon: FiMonitor,
      title: 'Full Stack Development',
      description: 'Complete end-to-end development solutions combining frontend and backend expertise.',
      features: ['MERN Stack', 'Full Architecture', 'DevOps Basics', 'Production Ready'],
    },
    {
      icon: FiLink,
      title: 'REST API Development',
      description: 'Designing and implementing scalable, secure REST APIs following industry best practices.',
      features: ['API Design', 'Authentication', 'Rate Limiting', 'Documentation'],
    },
    {
      icon: FiLayout,
      title: 'Responsive Website Design',
      description: 'Building beautiful, mobile-first websites that work seamlessly across all devices.',
      features: ['Mobile First', 'Cross Browser', 'SEO Optimized', 'Fast Loading'],
    },
    {
      icon: FiDatabase,
      title: 'Database Integration',
      description: 'Designing and integrating databases for optimal performance and data security.',
      features: ['MongoDB', 'MySQL', 'Data Modeling', 'Optimization'],
    },
  ];

  return (
    <section ref={ref} id="services" className="relative py-16 sm:py-24 lg:py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background gradients */}
        <div className="absolute top-1/2 left-1/4 w-[20rem] sm:w-[35rem] h-[20rem] sm:h-[35rem] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <motion.h2
          className="section-title text-4xl sm:text-5xl md:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Services Offered
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group"
              >
                <motion.div
                  className="glass p-5 sm:p-8 rounded-2xl h-full flex flex-col justify-between border border-white/[0.05] hover:border-accent/20 transition-all duration-300 relative overflow-hidden shadow-xl"
                >
                  {/* Subtle background glow on hover */}
                  <div className="absolute inset-0 bg-radial-gradient from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Icon */}
                      <motion.div
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300 text-accent"
                        whileHover={{ scale: 1.08 }}
                      >
                        <Icon className="w-5 h-5 transition-colors" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-base sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>

                    <div>
                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center gap-2 text-white/70 text-xs font-light"
                            initial={{ opacity: 0, x: -5 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
                            transition={{ delay: featureIndex * 0.05 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="mt-5 sm:mt-6 pt-4 sm:pt-6 border-t border-white/5">
                        <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className="cursor-pointer">
                          <span className="text-accent hover:text-white text-[0.65rem] font-bold font-mono tracking-widest uppercase transition-colors">
                            Request Quote &rarr;
                          </span>
                        </ScrollLink>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-12 sm:mt-20 lg:mt-24 glass p-8 sm:p-12 lg:p-16 rounded-2xl text-center border border-white/[0.05] relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">
            Ready to start your project?
          </h3>
          <p className="text-white/60 mb-6 sm:mb-8 max-w-xl mx-auto font-light leading-relaxed text-sm sm:text-base">
            Whether you need a complete web application or specific components, I'm ready to bring your ideas to life with modern, scalable solutions.
          </p>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
            <motion.button
              className="btn-primary px-6 sm:px-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.button>
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
