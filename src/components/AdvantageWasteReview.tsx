import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, BarChart3, Building, Lightbulb } from 'lucide-react';
import FileParsingPreview from './FileParsingPreview';
import KPICards from './KPICards';
import ChartsSection from './ChartsSection';
import InvoiceTable from './InvoiceTable';
import ContractSummaryTable from './ContractSummaryTable';

const AdvantageWasteReview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'contracts', name: 'Contracts', icon: FileText },
    { id: 'properties', name: 'Properties', icon: Building },
    { id: 'insights', name: 'Insights', icon: Lightbulb }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'contracts':
        return (
          <div className="space-y-8">
            <FileParsingPreview />
            <InvoiceTable />
          </div>
        );
      case 'properties':
        return <ContractSummaryTable />;
      case 'insights':
        return (
          <div className="space-y-8">
            <KPICards />
            <ChartsSection />
          </div>
        );
      default:
        return (
          <div className="space-y-8">
            <FileParsingPreview />
            <KPICards />
            <ChartsSection />
            <InvoiceTable />
            <ContractSummaryTable />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.div 
        className="bg-white shadow-sm border-b border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Advantage Waste Review
                </h1>
                <p className="mt-2 text-gray-600">
                  Automated contract analysis and cost optimization dashboard
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-medium"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  ✓ Analysis Complete
                </motion.div>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="mt-8">
              <nav className="flex space-x-8 border-b border-gray-200">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'border-green-500 text-green-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {tab.name}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderTabContent()}
        </motion.div>
      </div>

      {/* Footer Summary */}
      <motion.div 
        className="bg-white border-t border-gray-200 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>
              Last updated: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
            </div>
            <div className="flex items-center space-x-6">
              <span>5 Properties Analyzed</span>
              <span className="text-green-600 font-medium">$3,500 Monthly Savings Identified</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdvantageWasteReview;