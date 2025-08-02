import React from 'react';
import { Zap, Shield, Rocket, Users, Globe, Heart } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance with modern technologies.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure by Default',
      description: 'Built-in security features to protect your data and users.',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Easy to Scale',
      description: 'Grow from prototype to production without breaking a sweat.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time collaboration tools.',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Reach',
      description: 'Deploy worldwide with our global infrastructure network.',
      color: 'from-teal-400 to-green-500'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Made with Love',
      description: 'Crafted with attention to detail and user experience in mind.',
      color: 'from-pink-400 to-red-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to help you build, deploy, and scale your applications with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already building amazing things with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-blue-300 text-white hover:bg-blue-500 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}