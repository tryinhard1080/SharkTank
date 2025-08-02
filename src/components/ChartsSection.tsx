import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp } from 'lucide-react';

const ChartsSection: React.FC = () => {
  const [animateCharts, setAnimateCharts] = useState(false);

  const monthlySpendData = [
    { service: 'Trash', amount: 1120, color: 'bg-blue-500', percentage: 45 },
    { service: 'Recycling', amount: 275, color: 'bg-green-500', percentage: 11 },
    { service: 'Bulk', amount: 850, color: 'bg-purple-500', percentage: 34 },
    { service: 'Fees', amount: 245, color: 'bg-orange-500', percentage: 10 }
  ];

  const trendData = [
    { month: 'Jan', amount: 2350 },
    { month: 'Feb', amount: 2420 },
    { month: 'Mar', amount: 2380 },
    { month: 'Apr', amount: 2510 },
    { month: 'May', amount: 2490 },
    { month: 'Jun', amount: 2530 },
    { month: 'Jul', amount: 2470 },
    { month: 'Aug', amount: 2520 },
    { month: 'Sep', amount: 2490 },
    { month: 'Oct', amount: 2540 },
    { month: 'Nov', amount: 2510 },
    { month: 'Dec', amount: 2490 }
  ];

  const maxTrendAmount = Math.max(...trendData.map(d => d.amount));

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCharts(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Bar Chart */}
      <motion.div
        className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center mb-6">
          <BarChart3 className="w-5 h-5 text-gray-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Monthly Waste Spend by Service Type</h3>
        </div>

        <div className="space-y-4">
          {monthlySpendData.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{item.service}</span>
                <span className="text-sm font-semibold text-gray-900">${item.amount.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <motion.div
                  className={`h-4 ${item.color} rounded-full flex items-center justify-end pr-2`}
                  initial={{ width: 0 }}
                  animate={{ width: animateCharts ? `${item.percentage}%` : 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8, ease: "easeOut" }}
                >
                  <span className="text-xs text-white font-medium">{item.percentage}%</span>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Total Monthly Spend</span>
            <span className="text-lg font-bold text-gray-900">
              ${monthlySpendData.reduce((sum, item) => sum + item.amount, 0).toLocaleString()}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Line Chart */}
      <motion.div
        className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center mb-6">
          <TrendingUp className="w-5 h-5 text-gray-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Waste Spend Trend (Last 12 Months)</h3>
        </div>

        <div className="relative h-64">
          <div className="absolute inset-0 flex items-end justify-between px-2">
            {trendData.map((item, index) => {
              const height = (item.amount / maxTrendAmount) * 100;
              return (
                <div key={index} className="flex flex-col items-center flex-1">
                  <motion.div
                    className="w-full max-w-6 bg-blue-500 rounded-t-lg mb-2 relative group cursor-pointer"
                    initial={{ height: 0 }}
                    animate={{ height: animateCharts ? `${height}%` : 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                    whileHover={{ backgroundColor: '#3B82F6' }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      ${item.amount.toLocaleString()}
                    </div>
                  </motion.div>
                  <span className="text-xs text-gray-500 font-medium">{item.month}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <span>Average: ${(trendData.reduce((sum, item) => sum + item.amount, 0) / trendData.length).toLocaleString()}</span>
          <span className="text-green-600 font-medium">↓ 3.2% vs last year</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ChartsSection;