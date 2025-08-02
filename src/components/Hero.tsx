import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              New features available
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Build something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}amazing
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Start with a solid foundation and expand your ideas into reality. 
              Our platform provides everything you need to create exceptional experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start mt-8 space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="font-semibold text-gray-900">100k+</span>
                <span className="ml-1">users</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-900">99.9%</span>
                <span className="ml-1">uptime</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-900">24/7</span>
                <span className="ml-1">support</span>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-blue-200 rounded w-5/6"></div>
                  <div className="h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full shadow-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}