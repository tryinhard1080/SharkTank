import React, { useState, useEffect } from 'react';

const SavingsChart: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  const data = [
    { category: 'Contract Optimization', amount: 45230, color: 'bg-green-500' },
    { category: 'Overage Reduction', amount: 23850, color: 'bg-blue-500' },
    { category: 'Service Efficiency', amount: 15170, color: 'bg-purple-500' }
  ];

  const maxAmount = Math.max(...data.map(d => d.amount));

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              {item.category}
            </span>
            <span className="text-sm font-semibold text-gray-900">
              ${item.amount.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className={`h-3 ${item.color} rounded-full transition-all duration-1000 ease-out ${
                animate ? 'translate-x-0' : '-translate-x-full'
              }`}
              style={{
                width: animate ? `${(item.amount / maxAmount) * 100}%` : '0%'
              }}
            />
          </div>
        </div>
      ))}
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-900">
            Total Savings
          </span>
          <span className="text-xl font-bold text-green-600">
            ${data.reduce((sum, item) => sum + item.amount, 0).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SavingsChart;