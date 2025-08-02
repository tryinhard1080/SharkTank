import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropertyAnalysisReport from './PropertyAnalysisReport';
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  DollarSign,
  AlertTriangle,
  ArrowRight,
  Calendar,
  Truck,
  Building,
  Database,
  BarChart3,
  Info
} from 'lucide-react';

interface ParsedField {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface KPICard {
  title: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  description: string;
}

const ScannerDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [showParsedData, setShowParsedData] = useState(false);
  const [showPropertyReport, setShowPropertyReport] = useState(false);
  const [showDataWarehouse, setShowDataWarehouse] = useState(false);
  const [visibleFields, setVisibleFields] = useState(0);
  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);

  const parsedFields: ParsedField[] = [
    { label: 'Contract Start Date', value: 'January 1, 2024', icon: Calendar },
    { label: 'Termination Clause', value: '30-day notice required', icon: FileText },
    { label: 'Hauling Frequency', value: '3x per week', icon: Truck },
    { label: 'Monthly Cost', value: '$2,450.00', icon: DollarSign },
    { label: 'Annual Price Increase', value: '3.5%', icon: TrendingUp },
    { label: 'Notice Window', value: '60 days prior to renewal', icon: Clock }
  ];

  const kpiCards: KPICard[] = [
    {
      title: 'Savings Identified',
      value: '$3,250',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      description: 'Based on market rates for similar properties in your area'
    },
    {
      title: 'Overcharges Detected',
      value: '12%',
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      description: 'Invoice amounts exceed contracted rates'
    },
    {
      title: 'Time Saved',
      value: '3.5 hrs',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      description: 'Automated analysis vs manual contract review'
    }
  ];

  const spendBreakdown = [
    { category: 'Base Service', amount: 2450, percentage: 65, color: 'bg-blue-500' },
    { category: 'Overages', amount: 890, percentage: 24, color: 'bg-orange-500' },
    { category: 'Fees', amount: 410, percentage: 11, color: 'bg-purple-500' }
  ];

  const comparisonData = [
    { metric: 'Monthly Base Rate', current: '$2,450', benchmark: '$2,180', savings: '$270' },
    { metric: 'Pickup Frequency', current: '3x/week', benchmark: '2x/week', savings: 'Optimize' },
    { metric: 'Overage Rate', current: '$85/pickup', benchmark: '$65/pickup', savings: '$20/pickup' },
    { metric: 'Annual Increase', current: '3.5%', benchmark: '2.8%', savings: '0.7%' }
  ];

  const propertyData = [
    { 
      property: 'Oakwood Apartments', 
      expiration: '2024-12-31', 
      monthlySpend: '$2,450', 
      notes: 'Contract renewal due',
      status: 'expiring'
    },
    { 
      property: 'Riverside Commons', 
      expiration: '2024-06-14', 
      monthlySpend: '$1,890', 
      notes: 'Overcharge detected',
      status: 'flagged'
    },
    { 
      property: 'Metro Heights', 
      expiration: '2025-02-28', 
      monthlySpend: '$3,120', 
      notes: 'Compliant',
      status: 'active'
    },
    { 
      property: 'Garden Vista', 
      expiration: '2024-08-15', 
      monthlySpend: '$1,650', 
      notes: 'Rate optimization available',
      status: 'optimize'
    }
  ];

  const handleUpload = () => {
    setIsScanning(true);
    setCurrentStep(1);
    
    // Simulate scanning progress
    const progressInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsScanning(false);
            setShowParsedData(true);
            setCurrentStep(2);
            
            // Animate parsed fields appearing
            const fieldInterval = setInterval(() => {
              setVisibleFields(prev => {
                if (prev >= parsedFields.length) {
                  clearInterval(fieldInterval);
                  setTimeout(() => {
                    setShowPropertyReport(true);
                    setCurrentStep(3);
                    setTimeout(() => {
                      setShowDataWarehouse(true);
                      setCurrentStep(4);
                    }, 2000);
                  }, 1500);
                  return prev;
                }
                return prev + 1;
              });
            }, 300);
          }, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const resetDemo = () => {
    setCurrentStep(0);
    setIsScanning(false);
    setScanProgress(0);
    setShowParsedData(false);
    setShowPropertyReport(false);
    setShowDataWarehouse(false);
    setVisibleFields(0);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'expiring': return 'bg-yellow-100 text-yellow-800';
      case 'flagged': return 'bg-red-100 text-red-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'optimize': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Advantage Waste Contract Scanner
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload your waste contracts and invoices to instantly extract key terms, 
            identify savings opportunities, and streamline property management.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-center space-x-4">
            {[
              { step: 1, label: 'Upload', icon: Upload },
              { step: 2, label: 'Parse', icon: FileText },
              { step: 3, label: 'Report', icon: BarChart3 },
              { step: 4, label: 'Warehouse', icon: Database }
            ].map(({ step, label, icon: Icon }, index) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                  currentStep >= step 
                    ? 'bg-green-500 border-green-500 text-white' 
                    : 'bg-white border-gray-300 text-gray-400'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step ? 'text-green-600' : 'text-gray-400'
                }`}>
                  {label}
                </span>
                {index < 3 && (
                  <ArrowRight className={`w-4 h-4 mx-4 ${
                    currentStep > step ? 'text-green-500' : 'text-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Step 1: Upload Section */}
        <AnimatePresence>
          {currentStep === 0 && (
            <motion.div
              className="max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-12 border-2 border-dashed border-gray-300 hover:border-green-500 transition-colors duration-300">
                <div className="text-center">
                  <Upload className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Upload Contract & Invoice
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Drop your waste management documents here or click to browse
                  </p>
                  
                  <motion.button
                    onClick={handleUpload}
                    className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center mx-auto text-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Upload className="w-6 h-6 mr-3" />
                    Start Analysis
                  </motion.button>
                  
                  <div className="text-sm text-gray-500 mt-6">
                    Supports PDF, JPG, PNG files up to 10MB
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scanning Animation */}
        <AnimatePresence>
          {isScanning && (
            <motion.div
              className="max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <FileText className="w-12 h-12 text-blue-600" />
                </motion.div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Scanning Document...
                </h3>
                
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <motion.div
                    className="bg-blue-600 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${scanProgress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                
                <p className="text-gray-600">
                  Parsing contract... extracting key terms and costs ({scanProgress}%)
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2: Parsed Data */}
        <AnimatePresence>
          {showParsedData && (
            <motion.div
              className="max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-8">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Contract Data Extracted
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {parsedFields.slice(0, visibleFields).map((field, index) => {
                    const Icon = field.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center p-4 bg-gray-50 rounded-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                      >
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-500">
                            {field.label}
                          </div>
                          <div className="text-lg font-semibold text-gray-900">
                            {field.value}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 3: Property Analysis Report */}
        <AnimatePresence>
          {showPropertyReport && (
            <motion.div
              className="max-w-7xl mx-auto mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <PropertyAnalysisReport />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 4: Data Warehouse */}
        <AnimatePresence>
          {showDataWarehouse && (
            <motion.div
              className="max-w-7xl mx-auto mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Data Flow Visualization */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                  Contract Data Warehouse Integration
                </h3>
                
                <div className="flex items-center justify-between overflow-x-auto">
                  <motion.div
                    className="flex flex-col items-center min-w-max"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <div className="bg-blue-100 p-4 rounded-xl mb-2">
                      <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Parsed Data</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                  >
                    <ArrowRight className="w-8 h-8 text-green-500 mx-8" />
                  </motion.div>

                  <motion.div
                    className="flex flex-col items-center min-w-max"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <div className="bg-green-100 p-4 rounded-xl mb-2">
                      <Database className="w-8 h-8 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Data Warehouse</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                  >
                    <ArrowRight className="w-8 h-8 text-green-500 mx-8" />
                  </motion.div>

                  <motion.div
                    className="flex flex-col items-center min-w-max"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    <div className="bg-purple-100 p-4 rounded-xl mb-2">
                      <BarChart3 className="w-8 h-8 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Analytics</span>
                  </motion.div>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* Reset Button */}
        <AnimatePresence>
          {currentStep === 4 && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              <motion.button
                onClick={resetDemo}
                className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Run Demo Again
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ScannerDemo;