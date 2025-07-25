import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Our Reach', id: 'reach' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    'Traditional OOH Media',
    'Digital Displays',
    'Transit & Metro Media',
    'Airport Advertising',
    'BOT Projects'
  ];

  const legalLinks = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Disclaimer',
    'Sitemap'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:bg-sky-500' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:bg-blue-700' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:bg-pink-600' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Company Logo Placeholder */}
              <div className="mb-6">
                <img
                  src="/images/prakash-arts-logo.png"
                  alt="Prakash Arts Private Limited"
                  className="h-16 w-auto"
                />
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                South India's most trusted OOH media partner with over 60 years of excellence 
                in outdoor advertising, serving 100+ cities with 6,000+ premium media sites.
              </p>
              
              {/* IOAA Badge */}
              <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-blue-200 font-medium text-sm">
                  IOAA Founding Member
                </span>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 border border-white/20 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group text-left"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {link.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-white">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer block">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-600/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Museum Road, Governorpet<br />
                      Vijayawada – 520002<br />
                      Andhra Pradesh, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <a 
                    href="tel:+918884555555" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    +91 8884555555
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <a 
                    href="mailto:info@prakasharts.com" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    info@prakasharts.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-4">
                  Stay Updated with Our Latest Campaigns
                </h4>
                <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
                  Subscribe to our newsletter for industry insights, campaign showcases, and exclusive offers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <motion.button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 btn-modern"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-gray-400 text-center lg:text-left">
                <p className="mb-2">
                  © 2024 Prakash Arts Private Limited. All rights reserved.
                </p>
                <p className="text-sm">
                  Designed with ❤️ for exceptional outdoor advertising experiences.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
                {legalLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-1 group"
                  >
                    <span>{link}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;