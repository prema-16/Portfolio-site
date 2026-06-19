import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { containerVariants, itemVariants } from '../utils/animations';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const ContactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'premanandlondhe16@gmail.com',
      link: 'mailto:premanandlondhe16@gmail.com',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 8624853376',
      link: 'tel:+918624853376',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Maharashtra, India',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: FiGithub, name: 'GitHub', link: 'https://github.com/prema-16' },
    { icon: FiLinkedin, name: 'LinkedIn', link: 'https://www.linkedin.com/in/premanand-londhe416/' },
    { icon: FiTwitter, name: 'Twitter', link: 'https://twitter.com' },
  ];

  return (
    <section ref={ref} id="contact" className="relative py-16 sm:py-24 lg:py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background gradients */}
        <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-radial from-neon-blue/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-radial from-neon-purple/10 to-transparent rounded-full blur-3xl" />

        <motion.h2
          className="section-title text-4xl sm:text-5xl md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-center text-white/70 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 sm:mb-12 px-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a project in mind? Let's collaborate and create something amazing together. Feel free to reach out!
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  className="glass-panel p-4 sm:p-6 rounded-xl hover:border-neon-blue/50 transition-all flex items-center sm:items-start gap-3 sm:gap-4 group"
                  whileHover={{ y: -3 }}
                >
                  <motion.div
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-neon transition-all"
                    whileHover={{ scale: 1.08, rotate: 8 }}
                  >
                    <Icon className="w-5 h-5 text-neon-blue" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-white mb-0.5 text-sm sm:text-base">{info.title}</h3>
                    <p className="text-white/70 group-hover:text-white transition-colors text-xs sm:text-sm break-all sm:break-normal">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div className="space-y-3 pt-2 sm:pt-4" variants={itemVariants}>
              <h3 className="font-bold text-white text-base sm:text-lg">Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-white/20 text-white/70 hover:border-neon-blue hover:text-neon-blue transition-all text-xs sm:text-sm font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={14} />
                      <span className="hidden sm:inline">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="glass-panel p-5 sm:p-8 rounded-2xl space-y-4 sm:space-y-6"
              variants={containerVariants}
            >
              {/* Name + Email row on larger screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-white font-semibold mb-1.5 text-sm sm:text-base">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Premanand"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-dark-secondary/50 border border-white/10 text-white text-sm placeholder-white/40 focus:outline-none focus:border-neon-blue transition-all"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-white font-semibold mb-1.5 text-sm sm:text-base">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-dark-secondary/50 border border-white/10 text-white text-sm placeholder-white/40 focus:outline-none focus:border-neon-blue transition-all"
                  />
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-white font-semibold mb-1.5 text-sm sm:text-base">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-dark-secondary/50 border border-white/10 text-white text-sm placeholder-white/40 focus:outline-none focus:border-neon-blue transition-all"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-white font-semibold mb-1.5 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-dark-secondary/50 border border-white/10 text-white text-sm placeholder-white/40 focus:outline-none focus:border-neon-blue transition-all resize-none"
                />
              </motion.div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  className="p-3 sm:p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-xs sm:text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  className="p-3 sm:p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✗ An error occurred. Please try again.
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 py-3 text-sm sm:text-base"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <FiSend size={17} />
                    </motion.div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={17} />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
