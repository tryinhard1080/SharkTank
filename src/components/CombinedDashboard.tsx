import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingDown, 
  Clock, 
  DollarSign, 
  AlertTriangle, 
  Building, 
  Calendar, 
  Truck,
  CheckCircle,
  Bell
} from 'lucide-react';

interface AnimatedKPIProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  trend: string;
  delay: number;
}

const AnimatedKPI: React.FC<AnimatedKPIProps> = ({
  title,
  value,
  prefix = '',
  suffix = '',
  icon: Icon,
  color,
  bgColor,
  trend,
  delay
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
      } hover:shadow-xl hover:scale-105`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 1000, duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${bgColor}`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
      </div>
      
      <div className="mb-2">
        <div className="text-3xl font-bold text-gray-900 mb-1">
          {prefix}{displayValue.toLocaleString()}{suffix}
        </div>
        <div className="text-sm font-medium text-gray-600">
          {title}
        </div>
      </div>
      
      <div className="text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">
        {trend}
      </div>
    </motion.div>
  );
};

const CombinedDashboard: React.FC = () => {
  const [visibleRows, setVisibleRows] = useState(0);

  const kpis = [
    {
      title: 'Average Savings Found',
      value: 22.5,
      suffix: '%',
      icon: TrendingDown,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      trend: 'Across analyzed properties',
      delay: 200
    },
    {
      title: 'Total Monthly Savings',
      value: 8750,
      prefix: '$',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      trend: 'Identified opportunities',
      delay: 400
    },
    {
      title: 'Properties Analyzed',
      value: 7,
      icon: Building,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      trend: 'Contract & invoice review complete',
      delay: 600
    },
    {
      title: 'Contracts Expiring Soon',
      value: 3,
      icon: Bell,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      trend: 'Within 90 days',
      delay: 800
    }
  ];

  const propertyData = [
    {
      property: 'Oakwood Apartments',
      contractStart: '2024-01-01',
      contractEnd: '2024-12-31',
      monthlyRate: '$2,450',
      monthlyRateNum: 2450,
      frequency: '3x/week',
      binSize: '4 yard',
      lastInvoice: '$2,450',
      overage: '$0',
      status: 'Active',
      noticePeriod: '2024-10-02', // 90 days before end
      savingsFound: '$588', // 24% of 2450
      savingsNum: 588
    },
    {
      property: 'Riverside Commons',
      contractStart: '2023-06-15',
      contractEnd: '2024-06-14',
      monthlyRate: '$1,890',
      monthlyRateNum: 1890,
      frequency: '2x/week',
      binSize: '3 yard',
      lastInvoice: '$2,120',
      overage: '$230',
      status: 'Expiring Soon',
      noticePeriod: '2024-03-16', // 90 days before end
      savingsFound: '$420', // ~22% of 1890
      savingsNum: 420
    },
    {
      property: 'Metro Heights',
      contractStart: '2024-03-01',
      contractEnd: '2025-02-28',
      monthlyRate: '$3,120',
      monthlyRateNum: 3120,
      frequency: '4x/week',
      binSize: '6 yard',
      lastInvoice: '$3,120',
      overage: '$0',
      status: 'Active',
      noticePeriod: '2024-11-30', // 90 days before end
      savingsFound: '$0', // No savings found
      savingsNum: 0
    },
    {
      property: 'Garden Vista',
      contractStart: '2023-09-01',
      contractEnd: '2024-08-31',
      monthlyRate: '$1,650',
      monthlyRateNum: 1650,
      frequency: '2x/week',
      binSize: '3 yard',
      lastInvoice: '$1,780',
      overage: '$130',
      status: 'Expiring Soon',
      noticePeriod: '2024-06-02', // 90 days before end
      savingsFound: '$363', // 22% of 1650
      savingsNum: 363
    },
    {
      property: 'Sunset Towers',
      contractStart: '2024-02-15',
      contractEnd: '2025-02-14',
      monthlyRate: '$2,890',
      monthlyRateNum: 2890,
      frequency: '3x/week',
      binSize: '5 yard',
      lastInvoice: '$2,890',
      overage: '$0',
      status: 'Active',
      noticePeriod: '2024-11-16', // 90 days before end
      savingsFound: '$0', // No savings found
      savingsNum: 0
    },
    {
      property: 'Lakefront Plaza',
      contractStart: '2023-11-01',
      contractEnd: '2024-10-31',
      monthlyRate: '$2,200',
      monthlyRateNum: 2200,
      frequency: '3x/week',
      binSize: '4 yard',
      lastInvoice: '$2,200',
      overage: '$0',
      status: 'Expiring Soon',
      noticePeriod: '2024-08-02', // 90 days before end
      savingsFound: '$484', // 22% of 2200
      savingsNum: 484
    },
    {
      property: 'Downtown Commons',
      contractStart: '2024-01-15',
      contractEnd: '2025-01-14',
      monthlyRate: '$3,450',
      monthlyRateNum: 3450,
      frequency: '4x/week',
      binSize: '6 yard',
      lastInvoice: '$3,450',
      overage: '$0',
      status: 'Active',
      noticePeriod: '2024-10-16', // 90 days before end
      savingsFound: '$759', // 22% of 3450
      savingsNum: 759
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleRows(prev => {
          if (prev >= propertyData.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 200);
    }, 1500);
    return () => clearTimeout(timer);
  }, [propertyData.length]);

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'expiring soon':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSavingsColor = (savingsNum: number) => {
    if (savingsNum === 0) return 'text-gray-500';
    return 'text-green-600 font-semibold';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getDaysUntilNotice = (noticePeriod: string) => {
    const today = new Date();
    const notice = new Date(noticePeriod);
    const diffTime = notice.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const totalSavings = propertyData.reduce((sum, property) => sum + property.savingsNum, 0);
  const propertiesWithSavings = propertyData.filter(p => p.savingsNum > 0).length;

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Comprehensive Waste Management Dashboard
          </h2>
          <p className="text-gray-600">
            Complete analysis of property portfolio contracts, savings opportunities, and notice periods
          </p>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => (
            <AnimatedKPI key={index} {...kpi} />
          ))}
        </div>

        {/* Main Property Analysis Table */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Property Contract Analysis
            </h3>
            <div className="text-sm text-gray-500">
              {propertyData.length} properties analyzed
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Property
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contract Period
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Monthly Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Notice Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Savings Found
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {propertyData.slice(0, visibleRows).map((property, index) => {
                  const daysUntilNotice = getDaysUntilNotice(property.noticePeriod);
                  return (
                    <motion.tr 
                      key={index} 
                      className="hover:bg-gray-50 transition-colors duration-150"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2 + index * 0.1, duration: 0.4 }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Building className="w-5 h-5 text-gray-400 mr-3" />
                          <span className="text-sm font-medium text-gray-900">
                            {property.property}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                          <div>
                            <div>{formatDate(property.contractStart)}</div>
                            <div className="text-xs text-gray-500">
                              to {formatDate(property.contractEnd)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-semibold text-gray-900">
                          {property.monthlyRate}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <Truck className="w-4 h-4 text-gray-400 mr-2" />
                          <div>
                            <div>{property.frequency}</div>
                            <div className="text-xs text-gray-500">{property.binSize}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm">
                          <Bell className="w-4 h-4 text-gray-400 mr-2" />
                          <div>
                            <div className="text-gray-900">{formatDate(property.noticePeriod)}</div>
                            <div className={`text-xs ${
                              daysUntilNotice < 30 
                                ? 'text-red-600' 
                                : daysUntilNotice < 60 
                                ? 'text-orange-600' 
                                : 'text-gray-500'
                            }`}>
                              {daysUntilNotice > 0 ? `${daysUntilNotice} days` : 'Past due'}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm ${getSavingsColor(property.savingsNum)}`}>
                          {property.savingsFound}
                          {property.savingsNum > 0 && (
                            <div className="text-xs text-gray-500">
                              {Math.round((property.savingsNum / property.monthlyRateNum) * 100)}% reduction
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(property.status)}`}>
                          {property.status}
                        </span>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Summary Statistics */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-lg font-bold text-blue-600">
                {propertyData.length}
              </div>
              <div className="text-xs text-gray-600">Total Properties</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-lg font-bold text-green-600">
                ${totalSavings.toLocaleString()}
              </div>
              <div className="text-xs text-gray-600">Monthly Savings Found</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="text-lg font-bold text-purple-600">
                {propertiesWithSavings}/{propertyData.length}
              </div>
              <div className="text-xs text-gray-600">Properties w/ Savings</div>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-lg">
              <div className="text-lg font-bold text-orange-600">
                {propertyData.filter(p => p.status === 'Expiring Soon').length}
              </div>
              <div className="text-xs text-gray-600">Expiring Soon</div>
            </div>
          </div>
        </motion.div>

        {/* Process Status */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Analysis Status
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Contract Analysis Complete</div>
                  <div className="text-sm text-gray-500">{propertyData.length} properties processed</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">✓ Complete</div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Invoice Verification Complete</div>
                  <div className="text-sm text-gray-500">Cross-referenced with contract terms</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">✓ Complete</div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-500 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Ready for Contract Renegotiation</div>
                  <div className="text-sm text-gray-500">Savings opportunities identified</div>
                </div>
              </div>
              <div className="text-sm text-blue-600 font-medium">Ready</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CombinedDashboard;