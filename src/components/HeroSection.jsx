import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import { fadeInUp, floatingVariants } from '../utils/animations';
import NeonText from '../utils/NeonText';
import ProfileImage from '../utils/ProfileImage';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['MERN Stack Developer', 'React Developer', 'Backend Developer', 'Full Stack Developer'];
  const currentText = texts[textIndex];

  // Typing animation
  useEffect(() => {
    if (displayText.length < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentText, textIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4"
    >
      {/* Background gradient elements */}
      <div className="absolute top-0 left-1/4 w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="flex flex-col gap-5 md:col-span-8 lg:col-span-7 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Greeting Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md shadow-[0_0_20px_rgba(255,107,0,0.15)] w-fit mb-1 mx-auto md:mx-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-accent text-[0.65rem] font-bold tracking-[0.25em] uppercase font-mono">Welcome to my portfolio</span>
            </motion.div>

            {/* Name with gradient effect */}
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-black tracking-tighter uppercase leading-[0.9] text-white"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Premanand
              <span className="block bg-gradient-to-r from-accent via-[#FF8F3d] to-white bg-clip-text text-transparent mt-2">
                Londhe
              </span>
            </motion.h1>

            {/* Title with typing animation */}
            <motion.div
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold h-9 sm:h-10 md:h-12 font-mono flex items-center gap-1 justify-center md:justify-start"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <NeonText color="orange">{displayText}</NeonText>
              <motion.span
                className="text-accent text-xl sm:text-2xl md:text-3xl font-light leading-none"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                _
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl font-light mx-auto md:mx-0"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              BSc Computer Science student passionate about building modern web applications using React, Node.js, Express.js, MongoDB, and JavaScript. Transforming ideas into scalable digital solutions through clean code and continuous learning.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2 items-center md:items-start"
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
            >
              <ScrollLink to="projects" smooth={true} duration={500} offset={-80} className="w-full sm:w-auto">
                <motion.button
                  className="btn-primary text-sm w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Projects
                </motion.button>
              </ScrollLink>
              <motion.button
                className="btn-secondary text-sm w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  // Add your resume download logic
                }} className="block w-full">
                  Download Resume
                </a>
              </motion.button>
              <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className="w-full sm:w-auto">
                <motion.button
                  className="btn-secondary text-sm w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Me
                </motion.button>
              </ScrollLink>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 pt-2 justify-center md:justify-start"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              {[
                { icon: FiGithub, link: 'https://github.com/prema-16' },
                { icon: FiLinkedin, link: 'https://www.linkedin.com/in/premanand-londhe416/' },
                { icon: FiMail, link: 'mailto:premanandlondhe16@gmail.com' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-accent hover:shadow-[0_0_15px_rgba(255,107,0,0.25)] transition-all duration-300"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - hidden on mobile, spacing on desktop for 3D elements */}
          <div className="hidden md:block md:col-span-4 lg:col-span-5 h-[300px]" />
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer">
            <motion.div className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-white/50 text-[0.65rem] tracking-[0.2em] font-mono uppercase">Scroll to explore</span>
              <FiArrowDown className="w-4 h-4 text-accent" />
            </motion.div>
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
