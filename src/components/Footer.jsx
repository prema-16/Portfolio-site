import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', link: 'hero' },
    { name: 'About', link: 'about' },
    { name: 'Skills', link: 'skills' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact', link: 'contact' },
  ];

  const socialLinks = [
    { icon: FiGithub, link: 'https://github.com' },
    { icon: FiLinkedin, link: 'https://linkedin.com' },
    { icon: FiMail, link: 'mailto:premanand@example.com' },
  ];

  return (
    <motion.footer
      className="relative border-t border-white/10 bg-dark-secondary/30 backdrop-blur"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-neon-purple/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold gradient-text">Premanand</div>
              <p className="text-white/60 text-sm">
                Full Stack Developer creating modern, scalable web applications with MERN stack.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-white">Quick Links</h3>
              <div className="space-y-2">
                {footerLinks.map((link) => (
                  <ScrollLink
                    key={link.link}
                    to={link.link}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <motion.div
                      className="text-white/60 hover:text-neon-blue transition-colors text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.div>
                  </ScrollLink>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-white">Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-neon-blue transition-all"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.p
              className="text-white/50 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              © {currentYear} Premanand Londhe. All rights reserved.
            </motion.p>

            {/* Back to Top Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer">
                <motion.button
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white/60 hover:text-white hover:border-neon-blue transition-all text-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Back to Top</span>
                  <FiArrowUp size={16} />
                </motion.button>
              </ScrollLink>
            </motion.div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 blur-3xl pointer-events-none"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
