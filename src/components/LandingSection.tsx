import React, { useState, useEffect } from 'react';
import { Upload, FileText, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const LandingSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    {
      id: 1,
      title: 'Upload Documents',
      description: 'Scan and upload waste contracts and invoices',
      icon: Upload,
      color: 'bg-gradient-to-br from-forest-800 to-forest-900'
    },
    {
      id: 2,
      title: 'Parse Data Fields',
      description: 'AI extracts key information automatically',
      icon: FileText,
      color: 'bg-gradient-to-br from-success to-forest-700'
    },
    {
      id: 3,
      title: 'Generate Insights',
      description: 'Identify savings and compliance opportunities',
      icon: TrendingUp,
      color: 'bg-gradient-to-br from-forest-800 to-success'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-bold font-heading mb-6 bg-gradient-to-r from-forest-800 via-forest-600 to-success bg-clip-text text-transparent animate-slide-up">
            Automate Your Waste Contract Analysis
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-body leading-relaxed">
            Transform hours of manual work into <span className="text-success font-semibold">seconds</span> of automated insights.
            Our AI-powered platform analyzes waste contracts and invoices to identify
            cost savings and ensure compliance.
          </p>
        </div>

        {/* Animated Process Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            How It Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === index;

              return (
                <div
                  key={step.id}
                  className={`group relative p-8 bg-white/90 backdrop-blur-glass-sm rounded-xl shadow-card transition-all duration-700 transform ${
                    isActive
                      ? 'scale-105 shadow-float ring-2 ring-success shadow-glow-green'
                      : 'hover:shadow-float hover:scale-105'
                  } ${isAnimating && isActive ? 'animate-pulse' : ''}`}
                >
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-500 shadow-glow ${
                    isActive ? 'animate-float' : 'group-hover:animate-float group-hover:scale-110'
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    Step {step.id}: {step.title}
                  </h4>

                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>

                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <CheckCircle className="w-8 h-8 text-success bg-white rounded-full animate-checkmark shadow-glow-green" />
                    </div>
                  )}

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Demo Upload Area */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-xl shadow-lg p-8 border-2 border-dashed border-gray-300 hover:border-forest-800 transition-all duration-300">
            <div className="text-center">
              <Upload className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">
                Try the Demo
              </h4>
              <p className="text-gray-600 mb-6 font-body">
                Upload a sample waste contract or invoice to see the magic happen
              </p>

              <div className="space-y-4">
                <button className="w-full bg-forest-800 text-white py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center font-medium shadow-glow animate-pulse-glow hover:scale-105 hover:shadow-lg hover:bg-forest-700">
                  <Upload className="w-5 h-5 mr-2" />
                  Choose Files to Upload
                </button>

                <div className="text-sm text-gray-500">
                  Supports PDF, JPG, PNG files up to 10MB
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group bg-white/90 backdrop-blur-glass-sm p-6 rounded-xl shadow-card text-center hover:shadow-float hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-forest-800 to-forest-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-float group-hover:scale-110 transition-all duration-300 shadow-glow">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Save Time</h4>
            <p className="text-gray-600 font-body">Reduce manual review time from hours to minutes</p>
          </div>

          <div className="group bg-white/90 backdrop-blur-glass-sm p-6 rounded-xl shadow-card text-center hover:shadow-float hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-success to-forest-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-float group-hover:scale-110 transition-all duration-300 shadow-glow-green">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Ensure Compliance</h4>
            <p className="text-gray-600 font-body">Automatically flag contract violations and discrepancies</p>
          </div>

          <div className="group bg-white/90 backdrop-blur-glass-sm p-6 rounded-xl shadow-card text-center hover:shadow-float hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-forest-800 to-success rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-float group-hover:scale-110 transition-all duration-300 shadow-glow">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2 font-heading">Track Savings</h4>
            <p className="text-gray-600 font-body">Identify cost reduction opportunities across properties</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;