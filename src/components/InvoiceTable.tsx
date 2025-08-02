import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, CheckCircle, Clock } from 'lucide-react';

const InvoiceTable: React.FC = () => {
  const [visibleRows, setVisibleRows] = useState(0);

  const invoiceData = [
    {
      service: "Trash - 4yd",
      frequency: "3x/week",
      monthly_cost: "$1,120",
      notes: "Standard service",
      status: "verified"
    },
    {
      service: "Recycling - 8yd",
      frequency: "1x/week",
      monthly_cost: "$275",
      notes: "Compliant",
      status: "verified"
    },
    {
      service: "Bulk Pickup",
      frequency: "As needed",
      monthly_cost: "$850",
      notes: "Overcharge detected",
      status: "flagged"
    },
    {
      service: "Administrative Fee",
      frequency: "Monthly",
      monthly_cost: "$245",
      notes: "Under review",
      status: "pending"
    },
    {
      service: "Fuel Surcharge",
      frequency: "Monthly",
      monthly_cost: "$87",
      notes: "Market rate",
      status: "verified"
    }
  ];

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleRows(prev => {
          if (prev >= invoiceData.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 200);
    }, 800);
    return () => clearTimeout(timer);
  }, [invoiceData.length]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'flagged':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-orange-500" />;
      default:
        return <CheckCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-800';
      case 'flagged':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="flex items-center mb-6">
        <FileText className="w-5 h-5 text-gray-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Invoice Line Items</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Frequency
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Monthly Cost
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {invoiceData.slice(0, visibleRows).map((row, index) => (
              <motion.tr
                key={index}
                className="hover:bg-gray-50 transition-colors duration-150"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{row.service}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">{row.frequency}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900">{row.monthly_cost}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getStatusIcon(row.status)}
                    <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(row.status)}`}>
                      {row.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">{row.notes}</div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-between items-center pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-600">
          Total Monthly Cost: <span className="font-semibold text-gray-900">$2,577</span>
        </div>
        <div className="text-sm">
          <span className="text-red-600 font-medium">1 item flagged</span> • 
          <span className="text-orange-600 font-medium ml-2">1 under review</span>
        </div>
      </div>
    </motion.div>
  );
};

export default InvoiceTable;