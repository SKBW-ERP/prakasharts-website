import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    });
  };

  const offices = [
    {
      city: 'Hyderabad',
      type: 'Corporate Office',
      address: '3-6-473/1, Street No: 5, Himayatnagar, Hyderabad – 500029',
      phone: '+91-988-511-9144',
      fax: '+91-40-2763 7444',
      email: 'hydprakasharts@gmail.com',
      mapLink: 'https://maps.app.goo.gl/QnYicFt6AwNb7Cmf7?g_st=ipc'
    },
    {
      city: 'Vijayawada',
      type: 'Head Office',
      address: 'Museum Road, Governorpet, Vijayawada – 520002',
      phone: '+91 8884555555',
      fax: '+91-866-2571 554',
      email: 'vjaprakasharts@gmail.com',
      mapLink: 'https://maps.app.goo.gl/LVqrVypYuMEQ566p9?g_st=ipc'
    },
    {
      city: 'Bangalore',
      type: 'Branch Office',
      address: '102, IInd Floor, Ramanathan Complex, Infantry Road, Bangalore – 560001',
      phone: '+91-988-021-9144',
      email: 'rakashartsblr01@gmail.com',
      mapLink: 'https://maps.app.goo.gl/idNjAXwmAf28iAg58?g_st=ipc'
    },
    {
      city: 'Chennai',
      type: 'Branch Office',
      address: 'No.2, 2nd Floor, No.51&52, Royapettah High Road, Chennai – 600004',
      phone: '+91-988-471-0144',
      email: 'prakashartschn@gmail.com',
      mapLink: 'https://maps.app.goo.gl/mU1BvbvLUumTZU7K7?g_st=ipc'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-bold text-lg uppercase tracking-wider mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Let's Create Something <span className="text-blue-900">Extraordinary</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to launch your next outdoor advertising campaign? Connect with South India's 
            premier OOH advertising experts and let's bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Start Your Campaign Today
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your campaign objectives, target audience, budget range, and preferred locations..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>Send Campaign Request</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">24/7 Support Available</p>
                    <a href="tel:+918884555555" className="text-blue-900 font-semibold hover:underline">
                      +91 8884555555
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600">Quick Response Guaranteed</p>
                    <a href="mailto:info@prakasharts.com" className="text-blue-900 font-semibold hover:underline">
                      info@prakasharts.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday to Saturday</p>
                    <p className="text-blue-900 font-semibold">9:00 AM - 7:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Office Locations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Office Locations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {office.city}
                    </h4>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold">
                      {office.type}
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="space-y-3 text-gray-600 text-sm">
                  <p className="leading-relaxed">{office.address}</p>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{office.phone}</span>
                  </div>
                  {office.fax && (
                    <div className="flex items-center space-x-2">
                      <span className="w-4 h-4 text-center text-xs">📠</span>
                      <span>{office.fax}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{office.email}</span>
                  </div>
                  <div className="pt-2">
                    <a
                      href={office.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-900 hover:text-blue-700 font-semibold transition-colors duration-300 group"
                    >
                      <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;