import React, { useState, useEffect } from 'react';
import { TrendingDown, Clock, DollarSign, AlertTriangle, Building, Calendar, Truck } from 'lucide-react';

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
    <div className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-1000 transform ${
      isVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-full opacity-0 scale-95'
    } hover:shadow-2xl hover:scale-105`}>
      <div className="flex items-center justify-between mb-6">
        <div className={`p-4 rounded-xl ${bgColor}`}>
          <Icon className={`h-8 w-8 ${color}`} />
        </div>
      </div>
      
      <div className="mb-4">
        <div className="text-4xl font-bold text-gray-900 mb-2">
          {prefix}{displayValue.toLocaleString()}{suffix}
        </div>
        <div className="text-lg font-medium text-gray-600">
          {title}
        </div>
      </div>
      
      <div className="text-sm text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">
        {trend}
      </div>
    </div>
  );
};

interface PropertySavingsProps {
  delay: number;
}

const PropertySavingsChart: React.FC<PropertySavingsProps> = ({ delay }) => {
  const [animate, setAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const properties = [
    { name: 'Oakwood Apartments', savings: 8450, color: 'bg-green-500' },
    { name: 'Riverside Commons', savings: 6230, color: 'bg-blue-500' },
    { name: 'Metro Heights', savings: 9870, color: 'bg-purple-500' },
    { name: 'Garden Vista', savings: 4560, color: 'bg-orange-500' },
    { name: 'Sunset Towers', savings: 7340, color: 'bg-indigo-500' }
  ];

  const maxSavings = Math.max(...properties.map(p => p.savings));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setAnimate(true), 500);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-1000 transform ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Monthly Savings by Property</h3>
      
      <div className="space-y-6">
        {properties.map((property, index) => (
          <div key={index} className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-700">
                {property.name}
              </span>
              <span className="text-lg font-bold text-gray-900">
                ${property.savings.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className={`h-4 ${property.color} rounded-full transition-all duration-2000 ease-out`}
                style={{
                  width: animate ? `${(property.savings / maxSavings) * 100}%` : '0%',
                  transitionDelay: `${index * 200}ms`
                }}
              />
            </div>
          </div>
        ))}
        
        <div className="mt-8 pt-6 border-t-2 border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">
              Total Monthly Savings
            </span>
            <span className="text-2xl font-bold text-green-600">
              ${properties.reduce((sum, p) => sum + p.savings, 0).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ParsedDataTableProps {
  delay: number;
}

const ParsedDataTable: React.FC<ParsedDataTableProps> = ({ delay }) => {
  const [visibleRows, setVisibleRows] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const parsedData = [
    {
      property: 'Oakwood Apartments',
      contractStart: '2024-01-01',
      contractEnd: '2024-12-31',
      monthlyRate: '$2,450',
      frequency: '3x/week',
      binSize: '4 yard',
      lastInvoice: '$2,450',
      overage: '$0',
      status: 'Compliant'
    },
    {
      property: 'Riverside Commons',
      contractStart: '2023-06-15',
      contractEnd: '2024-06-14',
      monthlyRate: '$1,890',
      frequency: '2x/week',
      binSize: '3 yard',
      lastInvoice: '$2,120',
      overage: '$230',
      status: 'Overcharge'
    },
    {
      property: 'Metro Heights',
      contractStart: '2024-03-01',
      contractEnd: '2025-02-28',
      monthlyRate: '$3,120',
      frequency: '4x/week',
      binSize: '6 yard',
      lastInvoice: '$3,120',
      overage: '$0',
      status: 'Compliant'
    },
    {
      property: 'Garden Vista',
      contractStart: '2023-09-01',
      contractEnd: '2024-08-31',
      monthlyRate: '$1,650',
      frequency: '2x/week',
      binSize: '3 yard',
      lastInvoice: '$1,780',
      overage: '$130',
      status: 'Review'
    },
    {
      property: 'Sunset Towers',
      contractStart: '2024-02-15',
      contractEnd: '2025-02-14',
      monthlyRate: '$2,890',
      frequency: '3x/week',
      binSize: '5 yard',
      lastInvoice: '$2,890',
      overage: '$0',
      status: 'Compliant'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const interval = setInterval(() => {
        setVisibleRows(prev => {
          if (prev >= parsedData.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 300);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, parsedData.length]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Compliant':
        return 'bg-green-100 text-green-800';
      case 'Overcharge':
        return 'bg-red-100 text-red-800';
      case 'Review':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-1000 transform ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Parsed Contract & Invoice Data</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Property
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Contract Period
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Monthly Rate
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Service Details
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Last Invoice
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {parsedData.slice(0, visibleRows).map((row, index) => (
              <tr 
                key={index} 
                className="hover:bg-gray-50 transition-all duration-500 transform translate-x-0 opacity-100"
                style={{
                  animation: `slideInFromLeft 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Building className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-sm font-medium text-gray-900">
                      {row.property}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-900">
                    <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                    {new Date(row.contractStart).toLocaleDateString()} - {new Date(row.contractEnd).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-semibold text-gray-900">
                    {row.monthlyRate}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-900">
                    <Truck className="w-4 h-4 text-gray-400 mr-2" />
                    {row.frequency} • {row.binSize}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    <div>{row.lastInvoice}</div>
                    {row.overage !== '$0' && (
                      <div className="text-red-600 font-medium">+{row.overage} overage</div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(row.status)}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const FullScreenDashboard: React.FC = () => {
  const kpis = [
    {
      title: 'Monthly Waste Spend Reduction',
      value: 23.5,
      suffix: '%',
      icon: TrendingDown,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      trend: '+5.2% improvement vs last month',
      delay: 200
    },
    {
      title: 'Time Saved for Property Managers',
      value: 47,
      suffix: ' hrs/month',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      trend: '+12 hours vs previous month',
      delay: 400
    },
    {
      title: 'Cost Avoidance Opportunities',
      value: 84250,
      prefix: '$',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      trend: 'Identified this quarter',
      delay: 600
    },
    {
      title: 'Compliance Issues Flagged',
      value: 7,
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      trend: '3 resolved this week',
      delay: 800
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Waste Management Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Real-time insights across your property portfolio
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {kpis.map((kpi, index) => (
            <AnimatedKPI key={index} {...kpi} />
          ))}
        </div>

        {/* Charts and Data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <PropertySavingsChart delay={1200} />
          <div className="space-y-8">
            {/* Additional metrics */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-1000 delay-1000 translate-x-full opacity-0"
                 style={{ animation: 'slideInFromRight 1s ease-out 1.4s both' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Portfolio Overview</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-gray-900">127</div>
                  <div className="text-sm text-gray-600">Properties Managed</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600">$2.1M</div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600">98.5%</div>
                  <div className="text-sm text-gray-600">Contract Compliance</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600">156</div>
                  <div className="text-sm text-gray-600">Hours Saved/Month</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parsed Data Table */}
        <ParsedDataTable delay={1600} />
      </div>

      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default FullScreenDashboard;