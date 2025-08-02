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
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setFlowAnimation(true), 1000);
    return () => clearTimeout(timer);
  }, []);

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

        {/* Property Spend Tracker */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Property Spend Tracker
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
              Showing 5 properties with total monthly spend of ${sortedProperties.reduce((sum, p) => sum + p.monthlySpend, 0).toLocaleString()}
            </div>
            <div className="text-sm text-green-600 font-medium">
              Total savings opportunity: ${sortedProperties.reduce((sum, p) => sum + p.savingsOpportunity, 0).toLocaleString()}/month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataWarehouse;