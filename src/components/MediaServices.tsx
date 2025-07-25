import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Monitor, Train, Eye, Target, Zap } from 'lucide-react';

const MediaServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: 'Static Media',
      icon: Building2,
      services: [
        {
          title: 'Cantilever',
          description: 'Overhanging display structures for enhanced visibility at key intersections',
          image: '/images/cantilever.jpg'
        },
        {
          title: 'Billboards',
          description: 'Large-scale outdoor displays for maximum brand impact and visibility',
          image: '/images/billboards.jpg'
        },
        {
          title: 'Public Utility',
          description: 'Public utility infrastructure branding and advertising solutions',
          image: '/images/public-utility.jpg'
        },
        {
          title: 'Unipole',
          description: 'Premium single-pole installations at strategic commercial locations',
          image: '/images/unipole.jpg'
        },
        {
          title: 'Foot Over Bridge',
          description: 'Bridge advertising solutions for high-traffic pedestrian areas',
          image: '/images/foot-over-bridge.jpg'
        },
        {
          title: 'Gantry',
          description: 'Highway gantry displays for maximum vehicular traffic exposure',
          image: '/images/gantry.jpg'
        },
        {
          title: 'Bus Shelter',
          description: 'Transit advertising at bus stops with high footfall and visibility',
          image: '/images/bus-shelter.jpg'
        },
        {
          title: 'Model Bus Shelter',
          description: 'Premium model bus shelter advertising with enhanced visibility and design',
          image: '/images/model-bus-shelter.jpg'
        },
        {
          title: 'Police Booth',
          description: 'Police booth branding and advertising in high-security areas',
          image: '/images/police-booth.jpg'
        },
        {
          title: 'Metro Gantry',
          description: 'Metro station gantry displays for enhanced transit advertising visibility',
          image: '/images/metro-gantry.jpg'
        },
        {
          title: 'Metro Facade',
          description: 'External metro station branding with high visibility and passenger engagement',
          image: '/images/metro-facade.jpg'
        },
        {
          title: 'Metro Pillars',
          description: 'Metro station pillar advertising for targeted transit audience reach',
          image: '/images/metro-pillars.jpg'
        }
      ]
    },
    {
      name: 'Transit Media',
      icon: Train,
      services: [
        {
          title: 'Elevator Branding',
          description: 'Complete elevator interior and exterior branding solutions',
          image: '/images/elevator-branding.jpg'
        },
        {
          title: 'Escalator Branding',
          description: 'Dynamic escalator advertising with high visibility and engagement',
          image: '/images/escalator-branding.jpg'
        },
        {
          title: 'AFC Gates Branding',
          description: 'Automatic Fare Collection gate branding for maximum passenger exposure',
          image: '/images/afc-gates-branding.jpg'
        },
        {
          title: 'Static Entry Level',
          description: 'Entry level static displays for impactful first impressions',
          image: '/images/static-entry-level.jpg'
        },
        {
          title: 'Static Platform Level',
          description: 'Platform level advertising with high passenger engagement',
          image: '/images/static-platform-level.jpg'
        },
        {
          title: 'Airport Media',
          description: 'Comprehensive airport advertising solutions with exclusive rights',
          image: '/images/airport-media.jpg'
        }
      ]
    },
    {
      name: 'Digital/DOOH',
      icon: Monitor,
      services: [
        {
          title: 'Foot Over Bridge',
          description: 'Digital displays on foot over bridges for high-traffic pedestrian areas',
          image: '/images/foot-over-bridge-digital.jpg'
        },
        {
          title: 'Cantilever',
          description: 'Digital cantilever displays with LED technology for enhanced visibility',
          image: '/images/cantilever-digital.jpg'
        },
        {
          title: 'Police Booths',
          description: 'Digital police booth displays and information systems in high-security areas',
          image: '/images/police-booths-digital.jpg'
        },
        {
          title: 'Inside Metro Station',
          description: 'Digital advertising displays inside metro stations for captive audience engagement',
          image: '/images/inside-metro-station.jpg'
        },
        {
          title: 'Airport Digital',
          description: 'Digital displays and screens at airports for premium passenger engagement and brand visibility',
          image: '/images/airport-digital.jpg'
        }
      ]
    }
  ];

  const features = [
    {
      icon: Eye,
      title: 'Maximum Visibility',
      description: 'Strategic placement for optimal brand exposure'
    },
    {
      icon: Target,
      title: 'Targeted Reach',
      description: 'Precise audience targeting across demographics'
    },
    {
      icon: Zap,
      title: '24/7 Impact',
      description: 'Round-the-clock brand presence and recall'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
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
            What We Offer
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Premium <span className="text-blue-900">Media Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive outdoor advertising services designed to maximize your brand's impact 
            across South India's most strategic locations.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.name}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                activeTab === index
                  ? 'bg-blue-900 text-white shadow-xl'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="w-6 h-6" />
              <span>{tab.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            {tabs[activeTab].services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Features */}
        <motion.div
          className="bg-gray-50 rounded-3xl p-12 lg:p-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Media Solutions?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering exceptional results through strategic placement and innovative technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaServices;