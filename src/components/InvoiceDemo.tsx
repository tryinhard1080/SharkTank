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

// NOTE: This component is for the Invoice Demo and currently displays the same PropertyAnalysisReport.
// This report can be replaced with an invoice-specific report when provided.

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

const InvoiceDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [showParsedData, setShowParsedData] = useState(false);
  const [showPropertyReport, setShowPropertyReport] = useState(false);
  const [showDataWarehouse, setShowDataWarehouse] = useState(false);
  const [visibleFields, setVisibleFields] = useState(0);
  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);

  const parsedFields: ParsedField[] = [
    { label: 'Invoice Date', value: 'January 15, 2024', icon: Calendar },
    { label: 'Service Period', value: 'January 1-31, 2024', icon: FileText },
    { label: 'Base Service Charge', value: '$2,450.00', icon: DollarSign },
    { label: 'Overage Charges', value: '$230.00', icon: AlertTriangle },
    { label: 'Additional Fees', value: '$125.00', icon: DollarSign },
    { label: 'Total Amount Due', value: '$2,805.00', icon: TrendingUp }
  ];

  const kpiCards: KPICard[] = [
    {
      title: 'Overcharges Detected',
      value: '$230',
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      description: 'Invoice amounts exceed contracted rates'
    },
    {
      title: 'Processing Time',
      value: '15 sec',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      description: 'Automated invoice analysis vs manual review'
    },
    {
      title: 'Compliance Issues',
      value: '2',
      icon: FileText,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      description: 'Invoice discrepancies flagged for review'
    }
  ];

  const spendBreakdown = [
    { category: 'Base Service', amount: 2450, percentage: 67, color: 'bg-blue-500' },
    { category: 'Overages', amount: 230, percentage: 6, color: 'bg-red-500' },
    { category: 'Additional Fees', amount: 125, percentage: 3, color: 'bg-orange-500' }
  ];

  const comparisonData = [
    { metric: 'Base Charge', contracted: '$2,450', invoiced: '$2,450', variance: '$0' },
    { metric: 'Overage Rate', contracted: '$65/pickup', invoiced: '$85/pickup', variance: '+$20' },
    { metric: 'Admin Fee', contracted: '$0', invoiced: '$125', variance: '+$125' },
    { metric: 'Total', contracted: '$2,450', invoiced: '$2,805', variance: '+$355' }
  ];

  const propertyData = [
    { 
      property: 'Oakwood Apartments', 
      lastInvoice: '2024-01-15', 
      amount: '$2,805', 
      variance: '+$355',
      status: 'overcharge'
    },
    { 
      property: 'Riverside Commons', 
      lastInvoice: '2024-01-15', 
      amount: '$1,890', 
      variance: '$0',
      status: 'compliant'
    },
    { 
      property: 'Metro Heights', 
      lastInvoice: '2024-01-15', 
      amount: '$3,120', 
      variance: '$0',
      status: 'compliant'
    },
    { 
      property: 'Garden Vista', 
      lastInvoice: '2024-01-15', 
      amount: '$1,650', 
      variance: '+$85',
      status: 'review'
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
      case 'overcharge': return 'bg-red-100 text-red-800';
      case 'compliant': return 'bg-green-100 text-green-800';
      case 'review': return 'bg-yellow-100 text-yellow-800';
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
            Advantage Waste Invoice Scanner
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload your waste management invoices to instantly verify charges, 
            detect overages, and ensure compliance with your contracts.
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
                    Upload Invoice Document
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Drop your waste management invoice here or click to browse
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
                  Scanning Invoice...
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
                  Parsing invoice... verifying charges and detecting discrepancies ({scanProgress}%)
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
                    Invoice Data Extracted
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
                  Invoice Data Warehouse Integration
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

export default InvoiceDemo;