import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, AlertTriangle, TrendingUp } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  description: string;
  delay: number;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, icon: Icon, color, bgColor, description, delay }) => {
  const [animatedValue, setAnimatedValue] = useState('0');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      // Extract numeric value for animation
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
      let start = 0;
      const duration = 1500;
      const increment = numericValue / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setAnimatedValue(value);
          clearInterval(timer);
        } else {
          const currentValue = Math.floor(start);
          if (value.includes('$')) {
            setAnimatedValue(`$${currentValue.toLocaleString()}`);
          } else if (value.includes('%')) {
            setAnimatedValue(`${Math.floor(start)}%`);
          } else if (value.includes('hours')) {
            setAnimatedValue(`${start.toFixed(1)} hours`);
          } else {
            setAnimatedValue(currentValue.toString());
          }
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${bgColor}`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
        <TrendingUp className="w-4 h-4 text-green-500" />
      </div>
      
      <div className="mb-2">
        <div className="text-3xl font-bold text-gray-900 mb-1">
          {animatedValue}
        </div>
        <div className="text-sm font-medium text-gray-600">
          {title}
        </div>
      </div>
      
      <div className="text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">
        {description}
      </div>
    </motion.div>
  );
};

const KPICards: React.FC = () => {
  const kpis = [
    {
      title: 'Cost Savings Identified',
      value: '$3,500',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      description: 'Potential monthly savings vs current contract',
      delay: 0.2
    },
    {
      title: 'Time Saved',
      value: '3.2 hours',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      description: 'Automated analysis vs manual review',
      delay: 0.4
    },
    {
      title: 'Overcharges Flagged',
      value: '11%',
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      description: 'Invoice discrepancies identified',
      delay: 0.6
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {kpis.map((kpi, index) => (
        <KPICard key={index} {...kpi} />
      ))}
    </div>
  );
};

export default KPICards;