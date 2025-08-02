import React from 'react';
import { Building, Calendar, FileText, AlertTriangle, CheckCircle, TrendingDown } from 'lucide-react';

const PropertyAnalysisReport: React.FC = () => {
  const contractComparison = [
    {
      element: 'Monthly Cost',
      republic: '$2,875.00',
      wasteManagement: '$2,145.50',
      highlight: true
    },
    {
      element: 'Annual Cost',
      republic: '$34,500.00',
      wasteManagement: '$25,734.00',
      highlight: true
    },
    {
      element: 'Cost per Door',
      republic: '$11.46',
      wasteManagement: '$8.58',
      highlight: false
    },
    {
      element: 'Contract Term',
      republic: '3 Years',
      wasteManagement: '5 Years',
      highlight: false
    },
    {
      element: 'Equipment Configuration',
      republic: '4-yard dumpster, 3x/week',
      wasteManagement: '6-yard dumpster, 2x/week',
      highlight: false
    },
    {
      element: 'Payment Terms',
      republic: 'Net 30',
      wasteManagement: 'Net 15',
      highlight: false
    },
    {
      element: 'Price Escalation',
      republic: '4.5% annually',
      wasteManagement: '3.2% annually',
      highlight: false
    },
    {
      element: 'Termination Terms',
      republic: '90-day notice',
      wasteManagement: '60-day notice',
      highlight: false
    },
    {
      element: 'Additional Fees',
      republic: 'Multiple variable fees',
      wasteManagement: 'Fixed pricing only',
      highlight: true
    }
  ];

  const monthlyBreakdown = {
    republic: [
      { service: 'Base Service', cost: 2450.00 },
      { service: 'Fuel Surcharge', cost: 125.00 },
      { service: 'Environmental Fee', cost: 85.00 },
      { service: 'Administrative Fee', cost: 95.00 },
      { service: 'Variable Fees', cost: 120.00, variable: true }
    ],
    wasteManagement: [
      { service: 'Base Service', cost: 2145.50 },
      { service: 'Variable Fees', cost: 0.00, none: true }
    ]
  };

  const efficiencyMetrics = [
    {
      metric: 'Total Container Volume',
      republic: '4 yards',
      wasteManagement: '6 yards',
      winner: 'wm'
    },
    {
      metric: 'Weekly Pickup Events',
      republic: '3 pickups',
      wasteManagement: '2 pickups',
      winner: 'wm'
    },
    {
      metric: 'Cost/Yard/Month',
      republic: '$718.75',
      wasteManagement: '$357.58',
      winner: 'wm'
    },
    {
      metric: 'Cost/Door',
      republic: '$11.46',
      wasteManagement: '$8.58',
      winner: 'wm'
    }
  ];

  const riskAssessment = [
    {
      factor: 'Cost Predictability',
      republic: 'Poor - Variable fees',
      wasteManagement: 'Excellent - Fixed pricing',
      republicRisk: 'high',
      wmRisk: 'low'
    },
    {
      factor: 'Contract Clarity',
      republic: 'Fair - Complex terms',
      wasteManagement: 'Good - Clear terms',
      republicRisk: 'medium',
      wmRisk: 'low'
    },
    {
      factor: 'Fee Structure',
      republic: 'Complex - Multiple fees',
      wasteManagement: 'Simple - All-inclusive',
      republicRisk: 'high',
      wmRisk: 'low'
    },
    {
      factor: 'Termination Flexibility',
      republic: '90-day notice',
      wasteManagement: '60-day notice',
      republicRisk: 'medium',
      wmRisk: 'low'
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-orange-600 bg-orange-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Waste Service Contract Analysis
              </h1>
              <div className="text-lg text-gray-700 mb-2">
                <strong>The Mint 425</strong> • 2547 N. Clybourn Ave, Chicago, IL 60614
              </div>
              <div className="text-sm text-gray-600">
                Property Type: Mid-Rise Apartment • 251 Units • Analysis Date: {new Date().toLocaleDateString()} • Status: Active Review
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-medium">
                <CheckCircle className="w-4 h-4 inline mr-2" />
                Analysis Complete
              </div>
            </div>
          </div>
        </div>

        {/* Contract Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contract Element Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">
                    Contract Element
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-red-600 uppercase tracking-wider bg-red-50">
                    Republic Services
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-green-600 uppercase tracking-wider bg-green-50">
                    Waste Management
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contractComparison.map((row, index) => (
                  <tr key={index} className={row.highlight ? 'bg-yellow-50' : ''}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {row.element}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-700 bg-red-25">
                      {row.republic}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700 bg-green-25">
                      {row.wasteManagement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Monthly Cost Breakdown Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Republic Services Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-400">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-2 rounded-lg mr-3">
                <Building className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-red-700">Republic Services - Monthly Cost</h3>
            </div>
            
            <div className="space-y-3">
              {monthlyBreakdown.republic.map((item, index) => (
                <div key={index} className={`flex justify-between items-center py-2 ${item.variable ? 'bg-yellow-50 px-3 rounded' : ''}`}>
                  <span className="text-gray-700">{item.service}</span>
                  <span className={`font-semibold ${item.variable ? 'text-orange-600' : 'text-gray-900'}`}>
                    ${item.cost.toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="border-t pt-3">
                <div className="flex justify-between items-center font-bold text-lg">
                  <span className="text-red-700">Total Monthly</span>
                  <span className="text-red-700">${monthlyBreakdown.republic.reduce((sum, item) => sum + item.cost, 0).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Waste Management Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-400">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-lg mr-3">
                <Building className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-700">Waste Management - Monthly Cost</h3>
            </div>
            
            <div className="space-y-3">
              {monthlyBreakdown.wasteManagement.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2">
                  <span className="text-gray-700">{item.service}</span>
                  <span className={`font-semibold ${item.none ? 'text-green-600' : 'text-gray-900'}`}>
                    {item.none ? 'None' : `$${item.cost.toFixed(2)}`}
                  </span>
                </div>
              ))}
              <div className="border-t pt-3">
                <div className="flex justify-between items-center font-bold text-lg">
                  <span className="text-green-700">Total Monthly</span>
                  <span className="text-green-700">${monthlyBreakdown.wasteManagement.reduce((sum, item) => sum + item.cost, 0).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Annual Cost Comparison */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Annual Cost Comparison</h2>
          
          <div className="space-y-6">
            {/* Republic Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-red-700">Republic Services</span>
                <span className="font-bold text-red-700">$34,500.00</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-6">
                <div className="bg-red-400 h-6 rounded-full w-full flex items-center justify-end pr-3">
                  <span className="text-white text-sm font-medium">$34,500</span>
                </div>
              </div>
            </div>

            {/* Waste Management Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-green-700">Waste Management</span>
                <span className="font-bold text-green-700">$25,734.00</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-6">
                <div className="bg-green-400 h-6 rounded-full" style={{ width: '74.6%' }}>
                  <div className="flex items-center justify-end pr-3 h-full">
                    <span className="text-white text-sm font-medium">$25,734</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Callout */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
              <div className="flex items-center">
                <TrendingDown className="w-8 h-8 text-green-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-green-700">WM Annual Savings: $8,766.00</div>
                  <div className="text-lg text-green-600">(30.4% reduction)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fee Analysis */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Fee Analysis</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Republic Services - True Cost Impact</h3>
                <p className="text-yellow-700 mb-4">
                  Republic's base pricing appears competitive, but variable fees add significant hidden costs:
                </p>
                <ul className="space-y-1 text-sm text-yellow-700">
                  <li>• Fuel Surcharge: $125/month (varies with fuel prices)</li>
                  <li>• Environmental Fee: $85/month (regulatory compliance)</li>
                  <li>• Administrative Fee: $95/month (billing and service)</li>
                  <li>• Variable Fees: $120/month average (seasonal fluctuations)</li>
                </ul>
                <div className="bg-yellow-100 p-3 rounded mt-4">
                  <strong className="text-yellow-800">Total Variable Fee Impact: $425/month ($5,100 annually)</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Efficiency Metrics */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Efficiency Metrics</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Metric
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-red-600 uppercase tracking-wider">
                    Republic Services
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-green-600 uppercase tracking-wider">
                    Waste Management
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Winner
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {efficiencyMetrics.map((metric, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {metric.metric}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-700">
                      {metric.republic}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700">
                      {metric.wasteManagement}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        metric.winner === 'wm' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {metric.winner === 'wm' ? 'WM' : 'Republic'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contract Risk Assessment */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contract Risk Assessment</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Republic Risk Profile */}
            <div className="border-l-4 border-red-400 pl-6">
              <h3 className="text-lg font-semibold text-red-700 mb-4">Republic Services Risk Profile</h3>
              <div className="space-y-3">
                {riskAssessment.map((assessment, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium text-gray-900">{assessment.factor}</div>
                      <div className="text-sm text-gray-600">{assessment.republic}</div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(assessment.republicRisk)}`}>
                      {assessment.republicRisk.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Waste Management Risk Profile */}
            <div className="border-l-4 border-green-400 pl-6">
              <h3 className="text-lg font-semibold text-green-700 mb-4">Waste Management Risk Profile</h3>
              <div className="space-y-3">
                {riskAssessment.map((assessment, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium text-gray-900">{assessment.factor}</div>
                      <div className="text-sm text-gray-600">{assessment.wasteManagement}</div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(assessment.wmRisk)}`}>
                      {assessment.wmRisk.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Analysis generated by Advantage Waste Platform • {new Date().toLocaleDateString()} • Confidential</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyAnalysisReport;