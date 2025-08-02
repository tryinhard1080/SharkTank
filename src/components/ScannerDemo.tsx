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
  status: 'risk' | 'opportunity' | 'neutral';
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
  const [showDiffPanel, setShowDiffPanel] = useState(false);

  const parsedFields: ParsedField[] = [
    { label: 'Contract Start Date', value: 'January 1, 2024', icon: Calendar, status: 'neutral' },
    { label: 'Termination Clause', value: '30-day notice required', icon: FileText, status: 'risk' },
    { label: 'Hauling Frequency', value: '3x per week', icon: Truck, status: 'opportunity' },
    { label: 'Monthly Cost', value: '$2,450.00', icon: DollarSign, status: 'risk' },
    { label: 'Annual Price Increase', value: '3.5%', icon: TrendingUp, status: 'risk' },
    { label: 'Notice Window', value: '60 days prior to renewal', icon: Clock, status: 'opportunity' }
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

  const getStatusBadge = (status: 'risk' | 'opportunity' | 'neutral') => {
    switch (status) {
      case 'risk':
        return 'bg-red-500/20 text-red-300 border border-red-500/30';
      case 'opportunity':
        return 'bg-deep-green/20 text-deep-green border border-deep-green/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-dark-navy py-12 px-4 sm:px-6 lg:px-8 relative">
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
              <div className="glass-box rounded-2xl shadow-xl p-12 border-2 border-dashed border-gray-600 hover:border-bourbon-orange transition-ease">
                <div className="text-center">
                  {/* Lottie Animation Placeholder */}
                  <div className="w-24 h-24 mx-auto mb-6 bg-bourbon-orange/20 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-bourbon-orange border-t-transparent rounded-full animate-spin"></div>
                    {/* TODO: Replace with Lottie animation player loading "doc-scan.json" */}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 font-heading">
                    AI Document Analysis Ready
                  </h3>
                  <p className="text-gray-300 mb-8 font-body">
                    Advanced OCR and AI parsing will extract contract terms and identify optimization opportunities
                  </p>
                  
                  <motion.button
                    onClick={handleUpload}
                    className="bg-bourbon-orange text-white px-8 py-4 rounded-xl hover:bg-bourbon-orange/80 transition-ease flex items-center justify-center mx-auto text-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FileText className="w-6 h-6 mr-3" />
                    Begin Document Scan
                  </motion.button>
                  
                  <div className="text-sm text-gray-400 mt-6">
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
              <div className="glass-box rounded-2xl shadow-xl p-12 text-center">
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 bg-bourbon-orange/20 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <FileText className="w-12 h-12 text-bourbon-orange" />
                </motion.div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 font-heading">
                  Scanning Document...
                </h3>
                
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <motion.div
                    className="bg-bourbon-orange h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${scanProgress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                
                <p className="text-gray-300">
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
              className="max-w-7xl mx-auto mb-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-box rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-8">
                  <CheckCircle className="w-8 h-8 text-deep-green mr-3" />
                  <h3 className="text-2xl font-semibold text-white font-heading">
                    Contract Data Extracted
                  </h3>
                  <button
                    onClick={() => setShowDiffPanel(true)}
                    className="ml-auto bg-bourbon-orange text-white px-4 py-2 rounded-lg hover:bg-bourbon-orange/80 transition-ease text-sm font-medium"
                  >
                    Explain Differences
                  </button>
                </div>
                
                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left column: PDF Viewer placeholder */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white font-heading">Document Preview</h4>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-96 flex items-center justify-center">
                      <div className="text-center">
                        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-400">PDF Viewer Integration</p>
                        <p className="text-sm text-gray-500 mt-2">Contract document would display here</p>
                      </div>
                    </div>
                  </div>

                  {/* Right column: Clause list with badges */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white font-heading">Extracted Contract Terms</h4>
                    <div className="space-y-3">
                      {parsedFields.slice(0, visibleFields).map((field, index) => {
                        const Icon = field.icon;
                        return (
                          <motion.div
                            key={index}
                            className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-ease"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                          >
                            <div className="flex items-center flex-1">
                              <div className="bg-white/10 p-3 rounded-lg mr-4">
                                <Icon className="w-5 h-5 text-bourbon-orange" />
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-gray-300">
                                  {field.label}
                                </div>
                                <div className="text-lg font-semibold text-white">
                                  {field.value}
                                </div>
                              </div>
                            </div>
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusBadge(field.status)}`}>
                              {field.status === 'risk' ? 'Risk' : field.status === 'opportunity' ? 'Opportunity' : 'Standard'}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slide-over Diff Panel */}
        <AnimatePresence>
          {showDiffPanel && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowDiffPanel(false)}
              />
              
              {/* Slide-over Panel */}
              <motion.div
                id="diffPanel"
                className="fixed right-0 top-0 h-full w-full max-w-md bg-dark-navy border-l border-gray-700 z-50 overflow-y-auto"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-white font-heading">AI Analysis Summary</h3>
                    <button
                      onClick={() => setShowDiffPanel(false)}
                      className="text-gray-400 hover:text-white transition-ease"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="glass-box p-4 rounded-lg">
                      <h4 className="font-semibold text-bourbon-orange mb-2">Key Findings</h4>
                      <ul className="text-sm text-gray-300 space-y-2">
                        <li>• Termination clause requires 30-day notice (industry standard: 60 days)</li>
                        <li>• Annual price increase of 3.5% exceeds market average of 2.8%</li>
                        <li>• Current hauling frequency may be optimized</li>
                      </ul>
                    </div>
                    
                    <div className="glass-box p-4 rounded-lg">
                      <h4 className="font-semibold text-deep-green mb-2">Optimization Opportunities</h4>
                      <ul className="text-sm text-gray-300 space-y-2">
                        <li>• Negotiate extended notice period for better flexibility</li>
                        <li>• Request price cap at 2.5% annual increase</li>
                        <li>• Consider reducing pickup frequency to 2x/week</li>
                      </ul>
                    </div>
                    
                    <div className="glass-box p-4 rounded-lg">
                      <h4 className="font-semibold text-red-400 mb-2">Risk Factors</h4>
                      <ul className="text-sm text-gray-300 space-y-2">
                        <li>• Short termination notice limits negotiation leverage</li>
                        <li>• Above-market price increases impact long-term costs</li>
                        <li>• No fuel surcharge cap specified</li>
                      </ul>
                    </div>
                    
                    <div className="bg-bourbon-orange/10 border border-bourbon-orange/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-bourbon-orange mb-2">Recommended Actions</h4>
                      <p className="text-sm text-gray-300">
                        Schedule contract renegotiation 90 days before renewal. Focus on extending notice period 
                        and capping annual increases. Consider market alternatives to strengthen negotiation position.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
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
              <div className="glass-box rounded-2xl shadow-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-white mb-8 text-center font-heading">
                  Contract Data Warehouse Integration
                </h3>
                
                <div className="flex items-center justify-between overflow-x-auto">
                  <motion.div
                    className="flex flex-col items-center min-w-max"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <div className="bg-bourbon-orange/20 p-4 rounded-xl mb-2">
                      <FileText className="w-8 h-8 text-bourbon-orange" />
                    </div>
                    <span className="text-sm font-medium text-gray-300">Parsed Data</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                  >
                    <ArrowRight className="w-8 h-8 text-deep-green mx-8" />
                  </motion.div>

                  <motion.div
                    className="flex flex-col items-center min-w-max"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <div className="bg-deep-green/20 p-4 rounded-xl mb-2">
                      <Database className="w-8 h-8 text-deep-green" />
                    </div>
                    <span className="text-sm font-medium text-gray-300">Data Warehouse</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                  >
                    <ArrowRight className="w-8 h-8 text-deep-green mx-8" />
                  </motion.div>

                  <motion.div
                    className="flex flex-col items-center min-w-max"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    <div className="bg-bourbon-orange/20 p-4 rounded-xl mb-2">
                      <BarChart3 className="w-8 h-8 text-bourbon-orange" />
                    </div>
                    <span className="text-sm font-medium text-gray-300">Analytics</span>
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
                className="bg-deep-green text-white px-8 py-3 rounded-xl hover:bg-deep-green/80 transition-ease font-medium"
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