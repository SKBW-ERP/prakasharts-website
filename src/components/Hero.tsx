import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10" />
        <img
          src="/images/hero-background.jpg"
          alt="Outdoor Advertising"
          className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-[10s]"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-white mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="block text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-blue-200">
              Prakash Arts Private Limited
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              South India's Most Trusted
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent font-bold animate-pulse">
              OOH Media Partner
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-blue-100 max-w-5xl mx-auto leading-relaxed mb-16 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Over <span className="font-bold text-white bg-blue-600/20 px-3 py-1 rounded-full">60+ years</span> of unmatched outdoor presence across <span className="font-bold text-white bg-blue-600/20 px-3 py-1 rounded-full">100+ cities</span>
          </motion.p>

          {/* Key Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {[
              { number: '60+', label: 'Years Legacy', subtitle: 'Since 1960' },
              { number: '100+', label: 'Cities Covered', subtitle: 'Across South India' },
              { number: '6,000+', label: 'Premium Sites', subtitle: 'Strategic Locations' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 group hover:bg-white/15 hover:border-white/40 transition-all duration-500 shadow-2xl hover:shadow-3xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full -translate-y-6 translate-x-6 group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-blue-300/10 rounded-full -translate-x-4 translate-y-4 group-hover:scale-110 transition-transform duration-500" />
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Number */}
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 tracking-tight">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-blue-200 font-bold text-lg md:text-xl mb-2 group-hover:text-white transition-colors duration-300 uppercase tracking-wide">
                    {stat.label}
                  </div>
                  
                  {/* Subtitle */}
                  <div className="text-blue-300/80 font-medium text-sm group-hover:text-blue-200 transition-colors duration-300">
                    {stat.subtitle}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            className="w-10 h-16 border-2 border-white/50 rounded-full flex justify-center cursor-pointer hover:border-white/70 transition-colors duration-300 backdrop-blur-sm bg-white/5"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection('about')}
          >
            <motion.div
              className="w-2 h-6 bg-white/70 rounded-full mt-4"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <p className="text-white/60 text-sm mt-3 font-medium">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;