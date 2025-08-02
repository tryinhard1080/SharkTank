import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const ContractSummaryTable: React.FC = () => {
  const [visibleRows, setVisibleRows] = useState(0);

  const contractData = [
    {
      property: "Oakwood Apartments",
      expiration: "2024-12-31",
      monthlySpend: "$2,450",
      notes: "Contract renewal due in 60 days",
      status: "expiring",
      units: 120
    },
    {
      property: "Riverside Commons",
      expiration: "2024-06-14",
      monthlySpend: "$1,890",
      notes: "Overcharge identified - $230/month",
      status: "flagged",
      units: 85
    },
    {
      property: "Metro Heights",
      expiration: "2025-02-28",
      monthlySpend: "$3,120",
      notes: "Performing within contract terms",
      status: "active",
      units: 150
    },
    {
      property: "Garden Vista",
      expiration: "2024-08-15",
      monthlySpend: "$1,650",
      notes: "Rate optimization opportunity",
      status: "optimize",
      units: 75
    },
    {
      property: "Sunset Towers",
      expiration: "2025-01-30",
      monthlySpend: "$2,890",
      notes: "Recently negotiated rates",
      status: "active",
      units: 135
    }
  ];

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleRows(prev => {
          if (prev >= contractData.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 250);
    }, 1200);
    return () => clearTimeout(timer);
  }, [contractData.length]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'expiring':
        return <Clock className="w-4 h-4 text-orange-500" />;
      case 'flagged':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'optimize':
        return <AlertTriangle className="w-4 h-4 text-blue-500" />;
      default:
        return <CheckCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'expiring':
        return 'bg-orange-100 text-orange-800';
      case 'flagged':
        return 'bg-red-100 text-red-800';
      case 'optimize':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getDaysUntilExpiration = (dateString: string) => {
    const today = new Date();
    const expiration = new Date(dateString);
    const diffTime = expiration.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Building className="w-5 h-5 text-gray-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Property-Level Contract Summary</h3>
        </div>
        <div className="text-sm text-gray-500">
          {contractData.length} properties managed
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Property Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contract Expiration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Monthly Spend
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
            {contractData.slice(0, visibleRows).map((row, index) => {
              const daysUntilExpiration = getDaysUntilExpiration(row.expiration);
              return (
                <motion.tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.15, duration: 0.5 }}
                  whileHover={{ backgroundColor: 'rgba(249, 250, 251, 1)' }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Building className="w-5 h-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{row.property}</div>
                        <div className="text-xs text-gray-500">{row.units} units</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                      <div>
                        <div className="text-sm text-gray-900">{formatDate(row.expiration)}</div>
                        <div className={`text-xs ${daysUntilExpiration < 90 ? 'text-orange-600' : 'text-gray-500'}`}>
                          {daysUntilExpiration > 0 ? `${daysUntilExpiration} days` : 'Expired'}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">{row.monthlySpend}</div>
                    <div className="text-xs text-gray-500">per month</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(row.status)}
                      <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(row.status)}`}>
                        {row.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600 max-w-xs">{row.notes}</div>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-lg font-bold text-gray-900">
            ${contractData.reduce((sum, item) => sum + parseInt(item.monthlySpend.replace(/[$,]/g, '')), 0).toLocaleString()}
          </div>
          <div className="text-xs text-gray-600">Total Monthly Spend</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <div className="text-lg font-bold text-green-600">
            {contractData.filter(item => item.status === 'active').length}
          </div>
          <div className="text-xs text-gray-600">Active Contracts</div>
        </div>
        <div className="text-center p-3 bg-orange-50 rounded-lg">
          <div className="text-lg font-bold text-orange-600">
            {contractData.filter(item => item.status === 'expiring').length}
          </div>
          <div className="text-xs text-gray-600">Expiring Soon</div>
        </div>
        <div className="text-center p-3 bg-red-50 rounded-lg">
          <div className="text-lg font-bold text-red-600">
            {contractData.filter(item => item.status === 'flagged').length}
          </div>
          <div className="text-xs text-gray-600">Issues Flagged</div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContractSummaryTable;