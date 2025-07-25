import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Plane, 
  Train, 
  Monitor, 
  MapPin, 
  Zap,
  Eye,
  Target
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Hoardings',
      description: 'Large-format hoardings and billboards strategically placed across highways, commercial areas, and high-traffic zones.',
      features: ['Large-format displays', 'Highway locations', 'Commercial zones']
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Unipoles',
      description: 'Premium unipole installations at key intersections and commercial districts with cantilever options.',
      features: ['Key intersections', 'Cantilever options', 'Premium visibility']
    },
    {
      icon: <Train className="w-12 h-12" />,
      title: 'Metro Media',
      description: 'Exclusive media rights for Hyderabad Metro including station façades, pillars, and inside station advertising.',
      features: ['Metro façades', 'Station pillars', 'Platform advertising']
    },
    {
      icon: <Plane className="w-12 h-12" />,
      title: 'Airport Media',
      description: 'Exclusive media rights at Vijayawada Airport managing wall sites, banners, scrollers, and digital screens.',
      features: ['Wall sites', 'Digital screens', 'Banner displays']
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: 'Transit & Urban Media',
      description: 'Bus shelters, kiosks, road medians, bridge branding, railway media, and mobile/bus-tail advertising solutions.',
      features: ['Bus shelters', 'Bridge branding', 'Railway media']
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'PPP Projects',
      description: 'Build-Operate-Transfer projects including the 3.5km Financial District development with cycle tracks, walkways, and street furniture.',
      features: ['BOT projects', 'Street furniture', 'Urban development']
    }
  ];

  const stats = [
    { number: '6,000+', label: 'Active Sites' },
    { number: '100+', label: 'Cities Covered' },
    { number: '500+', label: 'Happy Clients' },
    { number: '64+', label: 'Years Experience' }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Premium OOH Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive outdoor advertising services designed to maximize your brand's impact across South India's most strategic locations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:bg-gradient-to-br hover:from-blue-50 hover:to-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="text-yellow-500 mb-6 group-hover:text-yellow-600 transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <Eye className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact Across South India
            </h3>
            <p className="text-xl text-blue-200">
              Delivering exceptional results for brands across diverse industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-blue-900 mb-6">
            Ready to Amplify Your Brand?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create a powerful outdoor advertising campaign that delivers exceptional ROI and maximum brand visibility.
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Campaign Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;