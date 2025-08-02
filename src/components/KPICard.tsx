import React, { useState, useEffect } from 'react';

interface KPICardProps {
  title: string;
  value: string;
  unit?: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  trend: string;
  animate: boolean;
  delay: number;
}

const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  unit,
  icon: Icon,
  color,
  bgColor,
  trend,
  animate,
  delay
}) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (animate && isVisible) {
      let start = 0;
      const end = parseFloat(value.replace(/[^0-9.]/g, ''));
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          const currentValue = start.toFixed(1);
          setDisplayValue(value.includes('%') ? `${currentValue}%` : 
                         value.includes('$') ? `$${Math.round(start).toLocaleString()}` :
                         currentValue + (unit || ''));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [animate, isVisible, value, unit]);

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-700 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
    } hover:shadow-xl hover:scale-105`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${bgColor}`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
      </div>
      
      <div className="mb-2">
        <div className="text-3xl font-bold text-gray-900">
          {displayValue}
        </div>
        <div className="text-sm font-medium text-gray-600 mt-1">
          {title}
        </div>
      </div>
      
      <div className="text-sm text-gray-500">
        {trend}
      </div>
    </div>
  );
};

export default KPICard;