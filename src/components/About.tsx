import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/usePerformance';
import { 
  Calendar, 
  Building, 
  Award, 
  Users, 
  ArrowRight, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  X,
  CheckCircle,
  Target,
  Zap,
  Globe,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const videoRef = React.useRef<HTMLDivElement>(null);
  const { isIntersecting } = useIntersectionObserver(videoRef, { threshold: 0.5 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);

  React.useEffect(() => {
    if (isIntersecting && !isVideoPlaying) {
      handleVideoPlay();
    }
  }, [isIntersecting]);

  const handleVideoPlay = () => {
    setVideoLoading(true);
    setTimeout(() => {
      setIsVideoPlaying(true);
      setVideoLoading(false);
    }, 1000);
  };

  const handleVideoClose = () => {
    setIsVideoPlaying(false);
    setIsVideoFullscreen(false);
  };

  const timeline = [
    {
      year: '1960',
      title: 'Foundation',
      description: 'Established by CDS Prakasa Rao, pioneering outdoor advertising in South India',
      icon: Building,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      year: '1990s',
      title: 'IOAA Founding Member',
      description: 'Became a founding member of the Indian Outdoor Advertising Association',
      icon: Award,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      year: '2000s',
      title: 'PPP Projects Pioneer',
      description: 'Pioneered Build-Operate-Transfer projects with municipal corporations',
      icon: Calendar,
      color: 'from-purple-500 to-violet-600'
    },
    {
      year: '2020',
      title: 'Metro Media Rights',
      description: 'Secured exclusive media rights for Hyderabad Metro network',
      icon: Target,
      color: 'from-orange-500 to-red-600'
    },
    {
      year: '2021',
      title: 'Airport Media Expansion',
      description: 'Acquired exclusive media rights at Vijayawada Airport',
      icon: Globe,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      description: 'Ranked #1 in South India with 6,000+ sites across 100+ cities',
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'IOAA Founding Member',
      description: 'Founding member of Indian Outdoor Advertising Association since 1990s',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Target,
      title: '6,000+ Premium Sites',
      description: 'Largest network of premium outdoor advertising locations',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Globe,
      title: '100+ Cities Coverage',
      description: 'Comprehensive reach across South India\'s major markets',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Users,
      title: '500+ Happy Clients',
      description: 'Trusted by Fortune 500 companies and leading brands',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Pioneering new technologies and advertising formats',
      icon: Zap
    },
    {
      title: 'Excellence',
      description: 'Delivering exceptional quality in every campaign',
      icon: Award
    },
    {
      title: 'Trust',
      description: 'Building lasting partnerships with transparency',
      icon: CheckCircle
    },
    {
      title: 'Growth',
      description: 'Continuously expanding our reach and capabilities',
      icon: TrendingUp
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider mb-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Building className="w-5 h-5" />
            <span>About Prakash Arts</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            A Legacy of Excellence
            <br />
            <span className="gradient-text">Since 1960</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Prakash Arts is one of India's oldest and South India's most dominant OOH advertising companies. 
            We specialize in large-format hoardings, unipoles, transit media, PPP infrastructure branding, 
            and cutting-edge DOOH solutions.
          </p>
        </motion.div>

        {/* Company Story Video Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
            
            <div className="relative z-10 text-center">
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-white font-medium text-sm uppercase tracking-wide">
                  IOAA Founding Member Since 1990s
                </span>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Watch Our Story Unfold
              </h3>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Discover how we've shaped the outdoor advertising landscape across South India 
                for over six decades, building lasting partnerships and delivering exceptional results.
              </p>
              
              {/* Video Player */}
              <div ref={videoRef} className="relative max-w-4xl mx-auto">
                {!isVideoPlaying ? (
                  <motion.div
                    className="relative bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    onClick={handleVideoPlay}
                  >
                    <div className="aspect-video flex items-center justify-center">
                      <div className="text-center">
                        {videoLoading ? (
                          <div className="w-20 h-20 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4" />
                        ) : (
                          <motion.div
                            className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white/30 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Play className="w-8 h-8 text-white ml-1" />
                          </motion.div>
                        )}
                        <p className="text-white font-semibold text-lg">
                          {videoLoading ? 'Loading...' : 'Click to Watch Our Story'}
                        </p>
                        <p className="text-blue-200 text-sm mt-2">
                          6 decades of excellence in outdoor advertising
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    className="relative bg-black rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="aspect-video">
                      <iframe
                       src="https://drive.google.com/file/d/1zld9xxxfbHl2C_VcKrfsicW6ZYlz2v1G/preview"
                        className="w-full h-full"
                        allow="autoplay; muted"
                        title="Prakash Arts Company Story"
                      />
                    </div>
                    
                    {/* Video Controls */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => setIsVideoPlaying(false)}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          <Pause className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setIsVideoMuted(!isVideoMuted)}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          {isVideoMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </button>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => setIsVideoFullscreen(!isVideoFullscreen)}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          <Maximize className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleVideoClose}
                          className="text-white hover:text-red-400 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
                <motion.button
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group bg-white text-blue-900 hover:bg-blue-50 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 btn-modern"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Journey Through Time
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six decades of innovation, growth, and leadership in outdoor advertising
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-indigo-300 to-purple-200 rounded-full hidden lg:block" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={item.year}
                    className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-0 space-y-8 lg:space-y-0`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Content Card */}
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'} text-center lg:text-left`}>
                      <motion.div
                        className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 ${isEven ? 'lg:ml-auto' : ''}`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-3xl font-bold gradient-text mb-2">{item.year}</div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </motion.div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="w-full lg:w-2/12 flex justify-center">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} shadow-lg border-4 border-white z-10`} />
                    </div>

                    {/* Spacer */}
                    <div className="w-full lg:w-5/12" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Achievements
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that define our leadership in the outdoor advertising industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-100 group-hover:border-blue-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Prakash Arts: A Corporate Media Powerhouse
            </h3>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              With over six decades of excellence, we continue to shape the outdoor advertising landscape 
              across South India, delivering unmatched visibility and impact for brands of all sizes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">64+</div>
                <div className="text-blue-100">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">#1</div>
                <div className="text-blue-100">in South India</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">500+</div>
                <div className="text-blue-100">Fortune 500 Clients</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;