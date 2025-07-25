import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowRight } from 'lucide-react';

const ClientsProjects = () => {
  const clients = [
    'Apple', 'Samsung', 'Wipro', 'Vodafone', 'Airtel', 'Maruti Suzuki',
    'Tanishq', 'My Home', 'Aparna', 'Tata', 'Reliance', 'HDFC Bank',
    'ICICI Bank', 'Flipkart', 'Amazon', 'Google', 'Microsoft', 'IBM'
  ];

  const campaigns = [
    {
      title: 'Vijayawada Airport',
      description: 'Complete media management including wall sites, banners, scrollers, and digital screens across the entire airport complex.',
      image: '/images/vijayawada-airport-campaign.jpg',
      stats: ['100% Airport Coverage', '24/7 Visibility', 'Premium Locations']
    },
    {
      title: 'Hyderabad Metro Network',
      description: 'Comprehensive metro station branding and platform advertising across the entire Hyderabad Metro Rail network.',
      image: '/images/hyderabad-metro-campaign.jpg',
      stats: ['50+ Stations', '2M+ Daily Reach', 'Exclusive Rights']
    },
    {
      title: 'Financial District BOT',
      description: '3.5km urban transformation project with benches, walkways, kiosks, bus shelters, and complete infrastructure development.',
      image: '/images/financial-district-bot-campaign.jpg',
      stats: ['3.5km Coverage', 'Urban Integration', 'PPP Success']
    }
  ];

  return (
    <section id="clients" className="py-24 bg-gray-50">
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
            Our Clients
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Trusted by <span className="text-blue-900">Industry Leaders</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From Fortune 500 companies to emerging brands, we deliver exceptional results 
            that drive business growth and brand recognition.
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-gray-800 font-bold text-lg group-hover:text-blue-900 transition-colors duration-300">
                  {client}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 text-lg">
              And <span className="font-semibold text-blue-900">500+</span> other leading brands across industries
            </p>
          </motion.div>
        </motion.div>

        {/* Featured Campaigns */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured Campaigns & Projects
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our most impactful campaigns and strategic partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={campaign.title}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {campaign.title}
                    </h4>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {campaign.description}
                  </p>
                  
                  <div className="space-y-2">
                    {campaign.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-blue-900" />
                        <span className="text-sm font-medium text-gray-700">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center">
            <Quote className="w-16 h-16 text-blue-300 mx-auto mb-8" />
            
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 max-w-4xl mx-auto">
              "Prakash Arts has been our trusted partner for outdoor advertising across South India. 
              Their strategic locations, professional service, and innovative solutions have consistently 
              delivered exceptional results for our brand campaigns."
            </blockquote>
            
            <div className="text-blue-200">
              <div className="font-semibold text-lg">Leading Brand Partner</div>
              <div className="text-sm opacity-75">Fortune 500 Company</div>
            </div>
            
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Campaign
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsProjects;