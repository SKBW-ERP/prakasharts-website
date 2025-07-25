import React from 'react';
import { Calendar, Award, Building, Plane, Trophy, Star, Users } from 'lucide-react';

const Journey = () => {
  const milestones = [
    {
      year: '1960',
      title: 'Foundation',
      description: 'Prakash Arts was established by Former Chairman Dhanakoti Surya Prakasa Rao Chakka, pioneering outdoor advertising in South India',
      icon: Building,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      year: '1990s',
      title: 'IOAA Founding Member',
      description: 'Became a founding member of the Indian Outdoor Advertising Association (IOAA)',
      icon: Award,
      color: 'from-green-500 to-emerald-600'
    },
    {
      year: '2000s',
      title: 'PPP Projects',
      description: 'Pioneered Build-Operate-Transfer projects with municipal corporations across states',
      icon: Trophy,
      color: 'from-purple-500 to-violet-600'
    },
    {
      year: '2020',
      title: 'Metro Media Rights',
      description: 'Secured exclusive media rights for Hyderabad Metro and expanded transit media operations',
      icon: Calendar,
      color: 'from-orange-500 to-red-600'
    },
    {
      year: '2021',
      title: 'Airport Expansion',
      description: 'Acquired exclusive media rights at Vijayawada Airport managing wall sites, banners, scrollers, and digital screens',
      icon: Plane,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      description: 'Ranked #1 in Southern India with 6,000+ sites across 100+ cities, evolving into a Corporate Media Powerhouse',
      icon: Star,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const stats = [
    { label: 'IOAA Founding Member', value: 'Since 1990s', icon: Award },
    { label: 'BOT Projects Executed', value: '50+', icon: Building },
    { label: '100+ Cities Network', value: 'Pan South India', icon: Calendar },
    { label: 'Premium Clientele', value: 'Fortune 500', icon: Star }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Six decades of innovation, growth, and leadership in outdoor advertising
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-indigo-300 to-purple-200 rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={milestone.year} className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${milestone.color} mb-6 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-slate-900 mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">{milestone.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${milestone.color} shadow-lg border-4 border-white z-10`}></div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <p className="text-slate-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legacy Section */}
        <div className="text-center mb-20 mt-24">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            A Legacy of <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Visibility Since 1972</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Prakash Arts is one of India's oldest and South India's most dominant OOH advertising companies. We specialize in large-format hoardings, unipoles, transit media, PPP infrastructure branding, and cutting-edge DOOH. With offices in Hyderabad, Vijayawada, Chennai, Bangalore, and Vizag — our reach is as expansive as our vision.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-20 border border-slate-100">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Leadership Excellence</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Guided by visionary leadership with decades of industry expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">CEO & MD</h4>
              <p className="text-blue-700 font-semibold">Durga Venkata Chakka Subbarao</p>
              <p className="text-slate-600 text-sm mt-2">Leading strategic vision and growth</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Former Chairman</h4>
              <p className="text-amber-700 font-semibold">Dhanakoti Surya Prakasa Rao Chakka</p>
              <p className="text-slate-600 text-sm mt-2">Founder & visionary pioneer</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">COO</h4>
              <p className="text-green-700 font-semibold">Surender Nath</p>
              <p className="text-slate-600 text-sm mt-2">Operations & execution excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;