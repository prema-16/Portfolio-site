import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import Avatar from '../utils/Avatar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', link: 'hero' },
    { name: 'About', link: 'about' },
    { name: 'Skills', link: 'skills' },
    { name: 'Projects', link: 'projects' },
    { name: 'Services', link: 'services' },
    { name: 'Timeline', link: 'timeline' },
    { name: 'Contact', link: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-dark py-4' : 'py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Avatar */}
          <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer">
            <Avatar size="md" animated={true} />
          </ScrollLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.link}
                to={item.link}
                smooth={true}
                spy={true}
                offset={-85}
                duration={500}
                activeClass="text-[#FF6B00] active-nav"
                className="cursor-pointer text-white/70 hover:text-white transition-colors relative py-1"
              >
                <motion.span whileHover={{ y: -1 }}>
                  {item.name}
                </motion.span>
              </ScrollLink>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ScrollLink to="contact" smooth={true} duration={500}>
              <button className="btn-primary">Get in Touch</button>
            </ScrollLink>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl p-2 -mr-2 rounded-lg hover:bg-white/5 transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-white/10">
            {navItems.map((item) => (
              <ScrollLink
                key={item.link}
                to={item.link}
                smooth={true}
                spy={true}
                offset={-85}
                duration={500}
                activeClass="text-[#FF6B00] font-medium pl-2 border-l border-[#FF6B00]"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-white/70 hover:text-white transition-colors block py-1"
              >
                {item.name}
              </ScrollLink>
            ))}
            <ScrollLink to="contact" smooth={true} duration={500}>
              <motion.button
                className="btn-primary w-full mt-2"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </motion.button>
            </ScrollLink>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
