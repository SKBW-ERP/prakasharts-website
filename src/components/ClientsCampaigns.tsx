import React from 'react';
import { TrendingUp, Users, Award, MapPin, Zap, Target } from 'lucide-react';

const ClientsCampaigns = () => {
  const clients = [
    'Apple', 'Samsung', 'Wipro', 'Vodafone', 'Airtel', 'Maruti Suzuki',
    'Tanishq', 'My Home', 'Aparna', 'Tata', 'Reliance', 'HDFC Bank',
    'ICICI Bank', 'Flipkart', 'Amazon', 'Google', 'Microsoft', 'IBM'
  ];

  const campaigns = [
    {
      title: 'Vijayawada Airport Exclusive Rights',
      description: 'Complete media management including wall sites, banners, scrollers, and digital screens',
      icon: MapPin,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Hyderabad Metro Branding',
      description: 'Comprehensive metro station branding and platform advertising across the network',
      icon: Zap,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'COVID-19 Disinfectant Kiosks',
      description: 'CSR initiative providing sanitization kiosks across public spaces during the pandemic',
      icon: Award,
      color: 'from-purple-500 to-violet-600'
    }
  ];

  const counters = [
    { number: '6000+', label: 'Media Sites', icon: Target },
    { number: '100+', label: 'Cities Covered', icon: MapPin },
    { number: '50+', label: 'Years of Legacy', icon: Award }
  ];

  return (
    <section id="clients" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            Portfolio & <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Delivering exceptional results for Fortune 500 companies and leading brands across South India
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Major Projects & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Vijayawada Airport</h4>
              <p className="text-blue-100 leading-relaxed mb-4">Exclusive media rights management including wall sites, banners, scrollers, and digital screens across the entire airport complex.</p>
              <div className="text-amber-400 font-semibold">Complete Airport Branding</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Hyderabad Metro Network</h4>
              <p className="text-blue-100 leading-relaxed mb-4">Comprehensive metro station branding and platform advertising across the entire Hyderabad Metro Rail network.</p>
              <div className="text-amber-400 font-semibold">Metro Media Rights</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Financial District BOT</h4>
              <p className="text-blue-100 leading-relaxed mb-4">3.5km urban transformation project with benches, walkways, kiosks, bus shelters, and complete infrastructure development.</p>
              <div className="text-amber-400 font-semibold">PPP Infrastructure</div>
            </div>
          </div>
        </div>

        {/* Animated Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {counters.map((counter, index) => {
            const Icon = counter.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{counter.number}</div>
                  <div className="text-blue-200 text-lg">{counter.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Logos Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center transform hover:scale-105">
                <div className="text-white font-semibold text-lg">{client}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-blue-200 text-lg">And 500+ other leading brands across industries</p>
          </div>
        </div>

        {/* Campaign Results */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Campaign Impact & Results</h3>
          <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">95%+</div>
                <div className="text-blue-100">Client Retention Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">2M+</div>
                <div className="text-blue-100">Daily Impressions</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
                <div className="text-blue-100">Brand Visibility</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">ROI</div>
                <div className="text-blue-100">Guaranteed Results</div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">Why Leading Brands Choose Us</h3>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              As South India's #1 OOH media company, we combine 50+ years of expertise with cutting-edge technology 
              and strategic locations to deliver unmatched brand visibility and measurable results for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCampaigns;