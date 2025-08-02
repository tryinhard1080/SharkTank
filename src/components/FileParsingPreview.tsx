import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Calendar, AlertTriangle, DollarSign, Clock } from 'lucide-react';

const FileParsingPreview: React.FC = () => {
  const extractedTerms = [
    { label: 'Start Date', value: 'Jan 1, 2025', icon: Calendar },
    { label: 'End Date', value: 'Dec 31, 2027', icon: Calendar },
    { label: 'Annual Increase', value: '5%', icon: DollarSign },
    { label: 'Termination Notice', value: '60 Days', icon: Clock },
    { label: 'Service Frequency', value: '3x per week', icon: AlertTriangle },
    { label: 'Base Monthly Rate', value: '$2,450', icon: DollarSign }
  ];

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">File Parsing Preview</h3>
        <motion.div 
          className="flex items-center text-green-600"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <CheckCircle className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">Parsed Successfully</span>
        </motion.div>
      </div>

      <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-lg">
        <FileText className="w-8 h-8 text-blue-600 mr-3" />
        <div>
          <div className="font-medium text-gray-900">contract_sample.pdf</div>
          <div className="text-sm text-gray-500">Uploaded 2 minutes ago</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {extractedTerms.map((term, index) => {
          const Icon = term.icon;
          return (
            <motion.div
              key={index}
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <div className="bg-white p-2 rounded-lg mr-3 shadow-sm">
                <Icon className="w-4 h-4 text-gray-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">{term.label}</div>
                <div className="text-sm text-gray-600">{term.value}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default FileParsingPreview;