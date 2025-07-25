import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  const navigationItems = [
    {
      name: 'Home',
      id: 'home',
      dropdown: [
        { name: 'Hero Section', id: 'home' },
        { name: 'About Us', id: 'about' },
        { name: 'Our Legacy', id: 'about' }
      ]
    },
    {
      name: 'About',
      id: 'about',
      dropdown: [
        { name: 'Our Story', id: 'about' },
        { name: 'Company History', id: 'about' },
        { name: 'Leadership', id: 'about' }
      ]
    },
    {
      name: 'Services',
      id: 'services',
      dropdown: [
        { name: 'Static Media', id: 'services' },
        { name: 'Transit Media', id: 'services' },
        { name: 'Digital/DOOH', id: 'services' }
      ]
    },
    {
      name: 'Clients',
      id: 'clients',
      dropdown: [
        { name: 'Our Clients', id: 'clients' },
        { name: 'Case Studies', id: 'clients' },
        { name: 'Success Stories', id: 'clients' }
      ]
    },
    {
      name: 'Contact',
      id: 'contact',
      dropdown: [
        { name: 'Get in Touch', id: 'contact' },
        { name: 'Office Locations', id: 'contact' },
        { name: 'Request Quote', id: 'contact' }
      ]
    }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-lg'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="/images/prakash-arts-logo.png"
              alt="Prakash Arts Private Limited"
              className="h-12 w-auto hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-900 font-semibold text-sm uppercase tracking-wide transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-50"
                  onClick={() => scrollToSection(item.id)}
                >
                  <span>{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.id ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.id && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-100 py-3 overflow-hidden"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <button
                          key={dropdownItem.name}
                          onClick={() => scrollToSection(dropdownItem.id)}
                          className="block w-full text-left px-6 py-3 text-sm text-gray-700 hover:text-blue-900 hover:bg-blue-50 transition-all duration-200 font-medium"
                        >
                          {dropdownItem.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Contact Info */}
            <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-gray-200">
              <a
                href="tel:+918884555555"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-900 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-blue-50"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+91 8884555555</span>
              </a>
              
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl btn-modern"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </motion.button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 text-gray-700 hover:text-blue-900 transition-all duration-300 rounded-lg hover:bg-blue-50"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-gray-700 hover:text-blue-900 font-semibold py-3 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300"
                  >
                    {item.name}
                  </button>
                  <div className="ml-4 space-y-2">
                    {item.dropdown.map((dropdownItem) => (
                      <button
                        key={dropdownItem.name}
                        onClick={() => scrollToSection(dropdownItem.id)}
                        className="block w-full text-left text-sm text-gray-600 hover:text-blue-900 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300"
                      >
                        {dropdownItem.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:+918884555555"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-900 py-3 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 8884555555</span>
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full mt-3 bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 btn-modern"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;