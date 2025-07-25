import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building, Calendar, Users, Target, Zap } from 'lucide-react';

const OurReach = () => {
  const counters = [
    {
      icon: Target,
      number: '6000+',
      label: 'Media Sites',
      description: 'Premium locations across South India'
    },
    {
      icon: MapPin,
      number: '100+',
      label: 'Cities Covered',
      description: 'Extensive network reach'
    },
    {
      icon: Calendar,
      number: '50+',
      label: 'Years of Legacy',
      description: 'Trusted industry experience'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
      description: 'Satisfied brand partners'
    }
  ];

  const cities = [
    { name: 'Hyderabad', sites: '2,000+', type: 'Corporate Hub' },
    { name: 'Vijayawada', sites: '1,500+', type: 'Head Office' },
    { name: 'Bangalore', sites: '1,200+', type: 'Tech Capital' },
    { name: 'Chennai', sites: '1,000+', type: 'Metro City' },
    { name: 'Vizag', sites: '300+', type: 'Port City' }
  ];

  return (
    <section id="reach" className="py-24 bg-white">
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
            Our Reach
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Unmatched <span className="text-blue-900">Network Coverage</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From bustling metropolitan cities to emerging urban centers, our extensive network 
            ensures your brand reaches the right audience at the right locations.
          </p>
        </motion.div>

        {/* Counters */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {counters.map((counter, index) => (
            <motion.div
              key={counter.label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-100 group-hover:border-blue-200">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <counter.icon className="w-8 h-8 text-white" />
                </div>
                
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {counter.number}
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {counter.label}
                </h3>
                
                <p className="text-gray-600">
                  {counter.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Map Illustration */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 lg:p-16 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Strategic Presence Across South India
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our offices and media sites are strategically located in key metropolitan areas 
              to ensure maximum brand visibility and audience engagement.
            </p>
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {cities.map((city, index) => (
              <motion.div
                key={city.name}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {city.name}
                </h4>
                
                <div className="text-2xl font-bold text-blue-900 mb-1">
                  {city.sites}
                </div>
                
                <div className="text-sm text-gray-600">
                  {city.type}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <Zap className="w-16 h-16 text-blue-300 mx-auto mb-8" />
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Connecting Brands with Millions Daily
              </h3>
              
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
                Our strategic network delivers over 2 million daily impressions, ensuring your brand 
                message reaches the right audience at the right moment across South India's most 
                dynamic markets.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div>
                  <div className="text-3xl font-bold text-blue-300 mb-2">2M+</div>
                  <div className="text-blue-100">Daily Impressions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-300 mb-2">95%</div>
                  <div className="text-blue-100">Client Retention</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-300 mb-2">24/7</div>
                  <div className="text-blue-100">Brand Visibility</div>
                </div>
              </div>
              
              <div className="mt-8">
                <motion.button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Your Quote Today
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurReach;