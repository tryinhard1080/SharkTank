import React, { useState, useEffect } from 'react';
import { ArrowRight, Database, Building, TrendingUp, Filter, Search, FileText } from 'lucide-react';

const DataWarehouse: React.FC = () => {
  const [flowAnimation, setFlowAnimation] = useState(false);
  const [sortField, setSortField] = useState('property');
  const [sortDirection, setSortDirection] = useState('asc');

  const properties = [
    {
      property: 'Oakwood Apartments',
      monthlySpend: 2450,
      contractExpiration: '2024-12-31',
      savingsOpportunity: 580,
      units: 120,
      currentHauler: 'Republic Services',
      contractLoaded: true,
      contractFilePath: '/contracts/oakwood_apartments_contract.pdf'
    },
    {
      property: 'Riverside Commons',
      monthlySpend: 1890,
      contractExpiration: '2024-06-14',
      savingsOpportunity: 340,
      units: 85,
      currentHauler: 'Waste Management',
      contractLoaded: true,
      contractFilePath: '/contracts/riverside_commons_contract.pdf'
    },
    {
      property: 'Metro Heights',
      monthlySpend: 3120,
      contractExpiration: '2025-02-28',
      savingsOpportunity: 750,
      units: 150,
      currentHauler: 'GFL Environmental',
      contractLoaded: false,
      contractFilePath: ''
    },
    {
      property: 'Garden Vista',
      monthlySpend: 1650,
      contractExpiration: '2024-08-15',
      savingsOpportunity: 210,
      units: 75,
      currentHauler: 'Republic Services',
      contractLoaded: true,
      contractFilePath: '/contracts/garden_vista_contract.pdf'
    },
    {
      property: 'Sunset Towers',
      monthlySpend: 2890,
      contractExpiration: '2024-11-30',
      savingsOpportunity: 650,
      units: 135,
      currentHauler: 'Waste Management',
      contractLoaded: true,
      contractFilePath: '/contracts/sunset_towers_contract.pdf'
    },
    // Additional Waste Management properties (8 more for 10 total)
    {
      property: 'Harbor View Apartments',
      monthlySpend: 2180,
      contractExpiration: '2024-09-30',
      savingsOpportunity: 430,
      units: 95,
      currentHauler: 'Waste Management',
      contractLoaded: true,
      contractFilePath: '/contracts/harbor_view_contract.pdf'
    },
    {
      property: 'Pine Ridge Complex',
      monthlySpend: 2750,
      contractExpiration: '2025-01-15',
      savingsOpportunity: 520,
      units: 128,
      currentHauler: 'Waste Management',
      contractLoaded: true,
      contractFilePath: '/contracts/pine_ridge_contract.pdf'
    },
    {
      property: 'Lakeside Manor',
      monthlySpend: 1980,
      contractExpiration: '2024-07-20',
      savingsOpportunity: 390,
      units: 88,
      currentHauler: 'Waste Management',
      contractLoaded: false,
      contractFilePath: ''
    },
    {
      property: 'Brookstone Village',
      monthlySpend: 3450,
      contractExpiration: '2025-03-10',
      savingsOpportunity: 680,
      units: 165,
      currentHauler: 'Waste Management',
      contractLoaded: true,
      contractFilePath: '/contracts/brookstone_contract.pdf'
    },
    {
      property: 'Cedar Park Residences',
      monthlySpend: 2320,
      contractExpiration: '2024-11-05',
      savingsOpportunity: 460,
      units: 105,
      currentHauler: 'Waste Management',
      contractLoaded: true,
      contractFilePath: '/contracts/cedar_park_contract.pdf'
    },
    {
      property: 'Millfield Commons',
      monthlySpend: 2650,
      contractExpiration: '2024-12-18',
      savingsOpportunity: 530,
      units: 118,
      currentHauler: 'Waste Management',
      contractLoaded: true,
      contractFilePath: '/contracts/millfield_contract.pdf'
    },
    {
      property: 'Valley View Estates',
      monthlySpend: 1750,
      contractExpiration: '2024-08-12',
      savingsOpportunity: 350,
      units: 78,
      currentHauler: 'Waste Management',
      contractLoaded: false,
      contractFilePath: ''
    },
    {
      property: 'Highland Park Towers',
      monthlySpend: 3890,
      contractExpiration: '2025-04-22',
      savingsOpportunity: 770,
      units: 185,
      currentHauler: 'Waste Management',
      contractLoaded: true,
      contractFilePath: '/contracts/highland_park_contract.pdf'
    },
    // Additional Republic Services properties (3 more for 5 total)
    {
      property: 'Riverside Terrace',
      monthlySpend: 2280,
      contractExpiration: '2024-10-08',
      savingsOpportunity: 455,
      units: 98,
      currentHauler: 'Republic Services',
      contractLoaded: true,
      contractFilePath: '/contracts/riverside_terrace_contract.pdf'
    },
    {
      property: 'Maple Grove Apartments',
      monthlySpend: 1920,
      contractExpiration: '2025-02-14',
      savingsOpportunity: 385,
      units: 82,
      currentHauler: 'Republic Services',
      contractLoaded: true,
      contractFilePath: '/contracts/maple_grove_contract.pdf'
    },
    {
      property: 'Westfield Gardens',
      monthlySpend: 3150,
      contractExpiration: '2024-09-25',
      savingsOpportunity: 625,
      units: 142,
      currentHauler: 'Republic Services',
      contractLoaded: false,
      contractFilePath: ''
    },
    // Additional GFL Environmental properties (4 more for 5 total)
    {
      property: 'Summit Place',
      monthlySpend: 2480,
      contractExpiration: '2024-11-12',
      savingsOpportunity: 495,
      units: 108,
      currentHauler: 'GFL Environmental',
      contractLoaded: true,
      contractFilePath: '/contracts/summit_place_contract.pdf'
    },
    {
      property: 'Greenwood Court',
      monthlySpend: 1850,
      contractExpiration: '2025-01-28',
      savingsOpportunity: 370,
      units: 85,
      currentHauler: 'GFL Environmental',
      contractLoaded: true,
      contractFilePath: '/contracts/greenwood_court_contract.pdf'
    },
    {
      property: 'Northgate Plaza',
      monthlySpend: 2950,
      contractExpiration: '2024-12-05',
      savingsOpportunity: 590,
      units: 138,
      currentHauler: 'GFL Environmental',
      contractLoaded: false,
      contractFilePath: ''
    },
    {
      property: 'Fairview Heights',
      monthlySpend: 2190,
      contractExpiration: '2025-03-18',
      savingsOpportunity: 440,
      units: 96,
      currentHauler: 'GFL Environmental',
      contractLoaded: true,
      contractFilePath: '/contracts/fairview_heights_contract.pdf'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setFlowAnimation(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Calculate summary statistics
  const haulerBreakdown = properties.reduce((acc, property) => {
    acc[property.currentHauler] = (acc[property.currentHauler] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const totalProperties = properties.length;
  const totalMonthlySpend = properties.reduce((sum, property) => sum + property.monthlySpend, 0);
  const totalUnits = properties.reduce((sum, property) => sum + property.units, 0);
  const totalSavingsOpportunity = properties.reduce((sum, property) => sum + property.savingsOpportunity, 0);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleViewContract = (property: string, filePath: string) => {
    // Demo function - in production this would open the contract document
    alert(`Opening contract for ${property}: ${filePath}`);
  };

  const sortedProperties = [...properties].sort((a, b) => {
    const aVal = a[sortField as keyof typeof a];
    const bVal = b[sortField as keyof typeof b];
    
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return sortDirection === 'asc' 
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }
    
    return sortDirection === 'asc' 
      ? (aVal as number) - (bVal as number)
      : (bVal as number) - (aVal as number);
  });


  const FlowArrow: React.FC<{ delay: number }> = ({ delay }) => (
    <div 
      className={`transition-all duration-1000 ease-in-out ${
        flowAnimation ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <ArrowRight className="w-8 h-8 text-blue-500" />
    </div>
  );

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Data Warehouse Integration
          </h2>
          <p className="text-gray-600">
            Centralized data flow and property spend tracking across your portfolio
          </p>
        </div>

        {/* Data Flow Visualization */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Automated Data Pipeline
          </h3>
          
          <div className="flex items-center justify-between overflow-x-auto">
            {/* Source Systems */}
            <div className="flex flex-col items-center min-w-max">
              <div className="bg-blue-100 p-4 rounded-lg mb-2">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Contract Data</span>
            </div>

            <FlowArrow delay={0} />

            <div className="flex flex-col items-center min-w-max">
              <div className="bg-purple-100 p-4 rounded-lg mb-2">
                <Database className="w-8 h-8 text-purple-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Processing Engine</span>
            </div>

            <FlowArrow delay={300} />

            <div className="flex flex-col items-center min-w-max">
              <div className="bg-green-100 p-4 rounded-lg mb-2">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Analytics Layer</span>
            </div>

            <FlowArrow delay={600} />

            <div className="flex flex-col items-center min-w-max">
              <div className="bg-gray-100 p-4 rounded-lg mb-2">
                <Database className="w-8 h-8 text-gray-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Data Warehouse</span>
            </div>
          </div>
        </div>

        {/* Portfolio Summary Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Key Metrics */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Portfolio Overview</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">{totalProperties}</div>
                <div className="text-sm text-gray-600">Total Properties</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">${totalMonthlySpend.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Monthly Spend</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600">{totalUnits.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Units</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600">${totalSavingsOpportunity.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Savings Opportunity</div>
              </div>
            </div>
          </div>

          {/* Hauler Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Hauler Distribution</h3>
            <div className="space-y-4">
              {Object.entries(haulerBreakdown)
                .sort(([,a], [,b]) => b - a)
                .map(([hauler, count]) => {
                  const percentage = Math.round((count / totalProperties) * 100);
                  const getHaulerColor = (haulerName: string) => {
                    if (haulerName.includes('Waste Management')) return 'bg-green-500';
                    if (haulerName.includes('Republic')) return 'bg-blue-500';
                    if (haulerName.includes('GFL')) return 'bg-purple-500';
                    return 'bg-gray-500';
                  };
                  
                  return (
                    <div key={hauler} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{hauler}</span>
                        <span className="text-sm text-gray-600">{count} contracts ({percentage}%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getHaulerColor(hauler)}`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Property Spend Tracker */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Waste Agreement Tracker
            </h3>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('property')}
                  >
                    Property Name
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('monthlySpend')}
                  >
                    Monthly Spend
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('contractExpiration')}
                  >
                    Contract Expiration
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('savingsOpportunity')}
                  >
                    Savings Opportunity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Units
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('currentHauler')}
                  >
                    Current Hauler
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contract
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedProperties.map((property, index) => (
                  <tr 
                    key={index} 
                    className="hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {property.property}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        ${property.monthlySpend.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(property.contractExpiration).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-green-600">
                        ${property.savingsOpportunity.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {property.units}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {property.currentHauler}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {property.contractLoaded ? (
                        <button
                          onClick={() => handleViewContract(property.property, property.contractFilePath)}
                          className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                        >
                          <FileText className="w-4 h-4 mr-1" />
                          View
                        </button>
                      ) : (
                        <span className="text-gray-400 text-sm">Not loaded</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing {totalProperties} properties with total monthly spend of ${totalMonthlySpend.toLocaleString()}
            </div>
            <div className="text-sm text-green-600 font-medium">
              Total savings opportunity: ${totalSavingsOpportunity.toLocaleString()}/month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataWarehouse;