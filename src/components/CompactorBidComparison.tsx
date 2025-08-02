import React from 'react';
import { Building, AlertTriangle, CheckCircle, TrendingDown, DollarSign } from 'lucide-react';

const CompactorBidComparison: React.FC = () => {
  const contractComparison = [
    {
      element: 'Monthly Equipment Cost',
      craRental: { value: '$1,662.00', note: 'Highest monthly cost', color: 'bg-red-100 text-red-800' },
      towerPurchase: { value: '$0 recurring', note: 'One-time purchase', color: 'bg-green-100 text-green-800' },
      towerRental: { value: '$1,232.00 (3-phase) $1,352.00 (single-phase)', note: '20% lower than CRA', color: 'bg-yellow-100 text-yellow-800' },
      wmPurchase: { value: '$0 recurring', note: 'One-time purchase', color: 'bg-green-100 text-green-800' },
      wmRental: { value: '$1,230.00', note: 'Lowest rental rate', color: 'bg-green-100 text-green-800' },
      craPurchase: { value: '$0 recurring', note: 'One-time purchase', color: 'bg-pink-100 text-pink-800' }
    },
    {
      element: 'Initial Investment',
      craRental: { value: '$0 upfront', note: 'No initial capital required', color: 'bg-red-100 text-red-800' },
      towerPurchase: { value: '$75,665.71 (3-phase) $78,193.21 (single-phase)', note: 'No initial capital required', color: 'bg-green-100 text-green-800' },
      towerRental: { value: '$63,861.63', note: 'Lowest purchase price + taxes & installation', color: 'bg-yellow-100 text-yellow-800' },
      wmPurchase: { value: '$0 upfront', note: 'No initial capital required', color: 'bg-blue-100 text-blue-800' },
      wmRental: { value: '$107,874.00', note: 'Highest upfront investment', color: 'bg-purple-100 text-purple-800' },
      craPurchase: { value: 'Includes delivery', note: '', color: 'bg-pink-100 text-pink-800' }
    },
    {
      element: 'Contract Term',
      craRental: { value: '60 months initial Auto-renewing 12 months', note: '', color: 'bg-red-100 text-red-800' },
      towerPurchase: { value: 'Ownership No contract restrictions', note: '', color: 'bg-green-100 text-green-800' },
      towerRental: { value: '60 months Term not specified for renewal', note: '', color: 'bg-yellow-100 text-yellow-800' },
      wmPurchase: { value: 'Ownership No contract restrictions', note: '', color: 'bg-blue-100 text-blue-800' },
      wmRental: { value: 'Not specified Terms to be negotiated', note: '', color: 'bg-purple-100 text-purple-800' },
      craPurchase: { value: 'Ownership No contract restrictions', note: '', color: 'bg-pink-100 text-pink-800' }
    },
    {
      element: 'Termination Notice',
      craRental: { value: '60-180 days required Early notice required', note: '', color: 'bg-red-100 text-red-800' },
      towerPurchase: { value: 'N/A - Ownership Complete flexibility', note: '', color: 'bg-green-100 text-green-800' },
      towerRental: { value: 'Not specified Contract app negotiable terms', note: '', color: 'bg-yellow-100 text-yellow-800' },
      wmPurchase: { value: 'N/A - Ownership Complete flexibility', note: '', color: 'bg-blue-100 text-blue-800' },
      wmRental: { value: 'Not specified Contract app negotiable terms', note: '', color: 'bg-purple-100 text-purple-800' },
      craPurchase: { value: 'N/A - Ownership Complete flexibility', note: '', color: 'bg-pink-100 text-pink-800' }
    },
    {
      element: 'Maintenance Coverage',
      craRental: { value: 'Company maintains equipment Full maintenance included', note: '', color: 'bg-red-100 text-red-800' },
      towerPurchase: { value: 'Customer responsibility Additional cost per occurrence', note: '', color: 'bg-green-100 text-green-800' },
      towerRental: { value: 'Full maintenance included No additional costs', note: '', color: 'bg-yellow-100 text-yellow-800' },
      wmPurchase: { value: 'Customer responsibility Additional cost per occurrence', note: '', color: 'bg-blue-100 text-blue-800' },
      wmRental: { value: 'Full maintenance included Includes repair/parts (normal use)', note: '', color: 'bg-purple-100 text-purple-800' },
      craPurchase: { value: 'Customer responsibility Additional cost per occurrence', note: '', color: 'bg-pink-100 text-pink-800' }
    },
    {
      element: 'Equipment Warranty',
      craRental: { value: 'Maintained by company Ongoing coverage', note: '', color: 'bg-red-100 text-red-800' },
      towerPurchase: { value: '12 months only Limited coverage', note: '', color: 'bg-green-100 text-green-800' },
      towerRental: { value: 'Covered throughout term Full term coverage', note: '', color: 'bg-yellow-100 text-yellow-800' },
      wmPurchase: { value: 'Not specified Verify warranty terms', note: '', color: 'bg-blue-100 text-blue-800' },
      wmRental: { value: 'Covered throughout term Full term coverage', note: '', color: 'bg-purple-100 text-purple-800' },
      craPurchase: { value: 'Not specified Verify warranty terms', note: '', color: 'bg-pink-100 text-pink-800' }
    },
    {
      element: 'Early Termination',
      craRental: { value: '6 months average charges or remaining term Significant penalty', note: '', color: 'bg-red-100 text-red-800' },
      towerPurchase: { value: 'N/A - Owned equipment No termination fees', note: '', color: 'bg-green-100 text-green-800' },
      towerRental: { value: 'Not specified Negotiate favorable terms', note: '', color: 'bg-yellow-100 text-yellow-800' },
      wmPurchase: { value: 'N/A - Owned equipment No termination fees', note: '', color: 'bg-blue-100 text-blue-800' },
      wmRental: { value: 'Not specified Negotiate favorable terms', note: '', color: 'bg-purple-100 text-purple-800' },
      craPurchase: { value: 'N/A - Owned equipment No termination fees', note: '', color: 'bg-pink-100 text-pink-800' }
    },
    {
      element: 'Tax Implications',
      craRental: { value: 'Monthly rental expense Fully deductible', note: '', color: 'bg-red-100 text-red-800' },
      towerPurchase: { value: 'Capital expenditure Depreciation schedule', note: '', color: 'bg-green-100 text-green-800' },
      towerRental: { value: 'Monthly rental expense Fully deductible', note: '', color: 'bg-yellow-100 text-yellow-800' },
      wmPurchase: { value: 'Capital expenditure Depreciation schedule', note: '', color: 'bg-blue-100 text-blue-800' },
      wmRental: { value: 'Monthly rental expense Fully deductible', note: '', color: 'bg-purple-100 text-purple-800' },
      craPurchase: { value: 'Capital expenditure Depreciation schedule', note: '', color: 'bg-pink-100 text-pink-800' }
    }
  ];

  const fiveYearAnalysis = [
    {
      title: 'CRA Rental',
      totalCost: '$99,720',
      monthlyRental: '$1,662',
      months: '60 Months: $99,720',
      maintenance: 'Included',
      endOfTermValue: '$0',
      totalFiveYear: '$99,720',
      color: 'bg-red-50 border-red-200',
      ranking: '5th'
    },
    {
      title: 'Tower Purchase',
      totalCost: '$83,166*',
      initialPurchase: '$75,665',
      estMaintenance: '$7,500',
      cyrl: '$0',
      monthlyCost: '$0',
      endOfTermValue: 'Owned asset',
      totalFiveYear: '$83,166*',
      totalFiveYearCost: '$83,166*',
      color: 'bg-green-50 border-green-200',
      ranking: '4th'
    },
    {
      title: 'Tower Rental',
      totalCost: '$73,920',
      monthlyRental: '$1,232',
      months: '60 Months: $73,920',
      maintenance: 'Included',
      endOfTermValue: '$0',
      totalFiveYear: '$73,920',
      color: 'bg-yellow-50 border-yellow-200',
      ranking: '3rd'
    },
    {
      title: 'WM Purchase',
      totalCost: '$71,362*',
      initialPurchase: '$63,862',
      estMaintenance: '$7,500',
      cyrl: '$0',
      monthlyCost: '$0',
      endOfTermValue: 'Owned asset',
      totalFiveYear: '$71,362*',
      color: 'bg-blue-50 border-blue-200',
      ranking: '2nd'
    },
    {
      title: 'WM Rental',
      totalCost: '$73,800',
      monthlyRental: '$1,230',
      months: '60 Months: $73,800',
      maintenance: 'Included',
      endOfTermValue: '$0',
      totalFiveYear: '$73,800',
      color: 'bg-purple-50 border-purple-200',
      ranking: '2nd'
    },
    {
      title: 'CRA Purchase',
      totalCost: '$115,474*',
      initialPurchase: '$107,974',
      estMaintenance: '$7,500',
      cyrl: '$0',
      monthlyCost: '$0',
      endOfTermValue: 'Owned asset',
      totalFiveYear: '$115,474*',
      color: 'bg-pink-50 border-pink-200',
      ranking: '6th'
    }
  ];

  const riskFactors = [
    {
      factor: 'Contract Flexibility',
      craRental: { assessment: '60-month auto-renewal', risk: 'HIGH RISK', color: 'bg-red-100 text-red-800' },
      towerPurchase: { assessment: 'Full ownership flexibility', risk: 'LOW RISK', color: 'bg-green-100 text-green-800' },
      towerRental: { assessment: 'Terms not specified', risk: 'MEDIUM RISK', color: 'bg-yellow-100 text-yellow-800' },
      wmPurchase: { assessment: 'Full ownership flexibility', risk: 'LOW RISK', color: 'bg-blue-100 text-blue-800' },
      wmRental: { assessment: 'Terms not specified', risk: 'MEDIUM RISK', color: 'bg-purple-100 text-purple-800' },
      craPurchase: { assessment: 'Full ownership flexibility', risk: 'LOW RISK', color: 'bg-pink-100 text-pink-800' }
    },
    {
      factor: 'Capital Commitment',
      craRental: { assessment: '$99,720 over 5 years', risk: 'MEDIUM RISK', color: 'bg-red-100 text-red-800' },
      towerPurchase: { assessment: '$75,665 upfront', risk: 'HIGH RISK', color: 'bg-green-100 text-green-800' },
      towerRental: { assessment: '$73,920 over 5 years', risk: 'LOW RISK', color: 'bg-yellow-100 text-yellow-800' },
      wmPurchase: { assessment: '$63,862 upfront', risk: 'MEDIUM RISK', color: 'bg-blue-100 text-blue-800' },
      wmRental: { assessment: '$73,800 over 5 years', risk: 'LOW RISK', color: 'bg-purple-100 text-purple-800' },
      craPurchase: { assessment: 'significant capital', risk: 'lowest upfront', color: 'bg-pink-100 text-pink-800' }
    },
    {
      factor: 'Maintenance Risk',
      craRental: { assessment: 'Provider responsibility', risk: 'LOW RISK', color: 'bg-red-100 text-red-800' },
      towerPurchase: { assessment: 'Customer responsibility', risk: 'HIGH RISK', color: 'bg-green-100 text-green-800' },
      towerRental: { assessment: 'Provider responsibility', risk: 'LOW RISK', color: 'bg-yellow-100 text-yellow-800' },
      wmPurchase: { assessment: 'Customer responsibility', risk: 'HIGH RISK', color: 'bg-blue-100 text-blue-800' },
      wmRental: { assessment: 'Provider responsibility', risk: 'LOW RISK', color: 'bg-purple-100 text-purple-800' },
      craPurchase: { assessment: 'unpredictable costs', risk: 'unpredictable costs', color: 'bg-pink-100 text-pink-800' }
    },
    {
      factor: 'Technology Obsolescence',
      craRental: { assessment: 'Provider upgrades equipment', risk: 'LOW RISK', color: 'bg-red-100 text-red-800' },
      towerPurchase: { assessment: 'Customer owns outdated equipment', risk: 'HIGH RISK', color: 'bg-green-100 text-green-800' },
      towerRental: { assessment: 'Provider upgrades equipment', risk: 'LOW RISK', color: 'bg-yellow-100 text-yellow-800' },
      wmPurchase: { assessment: 'Customer owns outdated equipment', risk: 'HIGH RISK', color: 'bg-blue-100 text-blue-800' },
      wmRental: { assessment: 'Provider upgrades equipment', risk: 'LOW RISK', color: 'bg-purple-100 text-purple-800' },
      craPurchase: { assessment: 'Customer owns outdated equipment', risk: 'LOW RISK', color: 'bg-pink-100 text-pink-800' }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Compactor Equipment Analysis
              </h1>
              <div className="text-lg text-gray-700 mb-2">
                <strong>Front Row Development</strong> • Clinton Ave, Huntsville, AL 35801
              </div>
              <div className="text-sm text-gray-600 mb-4">
                <strong>Equipment Requirements:</strong> 2 apartment-style compactors with 8.3-yard containers (24 total yards)<br/>
                <strong>Proposals Analyzed:</strong> 5 vendors (3 rental, 2 purchase options)<br/>
                <strong>Analysis Date:</strong> July 2, 2025<br/>
                <strong>Note:</strong> Property unit count not specified in contracts - impacts per-door analysis
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
                  <th className="px-4 py-4 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">
                    Contract Element
                  </th>
                  <th className="px-3 py-4 text-center text-xs font-medium text-white uppercase tracking-wider bg-red-500">
                    CRA Rental
                  </th>
                  <th className="px-3 py-4 text-center text-xs font-medium text-white uppercase tracking-wider bg-green-500">
                    Tower Purchase
                  </th>
                  <th className="px-3 py-4 text-center text-xs font-medium text-white uppercase tracking-wider bg-yellow-500">
                    Tower Rental
                  </th>
                  <th className="px-3 py-4 text-center text-xs font-medium text-white uppercase tracking-wider bg-blue-500">
                    WM Purchase
                  </th>
                  <th className="px-3 py-4 text-center text-xs font-medium text-white uppercase tracking-wider bg-purple-500">
                    WM Rental
                  </th>
                  <th className="px-3 py-4 text-center text-xs font-medium text-white uppercase tracking-wider bg-pink-500">
                    CRA Purchase
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contractComparison.map((row, index) => (
                  <tr key={index}>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-48">
                      {row.element}
                    </td>
                    <td className={`px-3 py-4 text-xs ${row.craRental.color}`}>
                      <div className="font-medium">{row.craRental.value}</div>
                      {row.craRental.note && <div className="mt-1">{row.craRental.note}</div>}
                    </td>
                    <td className={`px-3 py-4 text-xs ${row.towerPurchase.color}`}>
                      <div className="font-medium">{row.towerPurchase.value}</div>
                      {row.towerPurchase.note && <div className="mt-1">{row.towerPurchase.note}</div>}
                    </td>
                    <td className={`px-3 py-4 text-xs ${row.towerRental.color}`}>
                      <div className="font-medium">{row.towerRental.value}</div>
                      {row.towerRental.note && <div className="mt-1">{row.towerRental.note}</div>}
                    </td>
                    <td className={`px-3 py-4 text-xs ${row.wmPurchase.color}`}>
                      <div className="font-medium">{row.wmPurchase.value}</div>
                      {row.wmPurchase.note && <div className="mt-1">{row.wmPurchase.note}</div>}
                    </td>
                    <td className={`px-3 py-4 text-xs ${row.wmRental.color}`}>
                      <div className="font-medium">{row.wmRental.value}</div>
                      {row.wmRental.note && <div className="mt-1">{row.wmRental.note}</div>}
                    </td>
                    <td className={`px-3 py-4 text-xs ${row.craPurchase.color}`}>
                      <div className="font-medium">{row.craPurchase.value}</div>
                      {row.craPurchase.note && <div className="mt-1">{row.craPurchase.note}</div>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5-Year Total Cost Analysis */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">5-Year Total Cost Analysis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {fiveYearAnalysis.map((option, index) => (
              <div key={index} className={`border-2 rounded-lg p-6 ${option.color}`}>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{option.title}</h3>
                  <div className="text-2xl font-bold text-gray-900">{option.totalCost}</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  {option.monthlyRental && (
                    <>
                      <div className="flex justify-between">
                        <span>Monthly Rental:</span>
                        <span className="font-medium">{option.monthlyRental}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>60 Months:</span>
                        <span className="font-medium">{option.months?.split(': ')[1]}</span>
                      </div>
                    </>
                  )}
                  
                  {option.initialPurchase && (
                    <>
                      <div className="flex justify-between">
                        <span>Initial Purchase:</span>
                        <span className="font-medium">{option.initialPurchase}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Est. Maintenance:</span>
                        <span className="font-medium">{option.estMaintenance}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cyrl:</span>
                        <span className="font-medium">{option.cyrl}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly Cost:</span>
                        <span className="font-medium">{option.monthlyCost}</span>
                      </div>
                    </>
                  )}
                  
                  {option.maintenance && (
                    <div className="flex justify-between">
                      <span>Maintenance:</span>
                      <span className="font-medium">{option.maintenance}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span>End-of-Term Value:</span>
                    <span className="font-medium">{option.endOfTermValue}</span>
                  </div>
                  
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total 5-Year Cost:</span>
                      <span>{option.totalFiveYear}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Statement */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-900 mb-2">
                WM Purchase provides lowest 5-year cost at $71,362
              </div>
              <div className="text-sm text-blue-800">
                <strong>WM Rental:</strong> $73,800 (2nd) • <strong>Tower Rental:</strong> $73,920 (3rd) • <strong>Tower Purchase:</strong> $83,166 (4th) • <strong>CRA Rental:</strong> $99,720 (5th) • <strong>CRA Purchase:</strong> $115,474 (highest)
              </div>
              <div className="text-xs text-blue-700 mt-2">
                *Purchase options assume $1,500/year maintenance costs + taxes/installation • Cyrl not included in WM purchase price
              </div>
            </div>
          </div>
        </div>

        {/* Contract Terms Risk Analysis */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contract Terms Risk Analysis</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-yellow-800 mb-4">Key Risk Factors Identified:</h3>
            
            <div className="space-y-4 text-sm">
              <div>
                <div className="font-semibold text-yellow-800">CRA Contract:</div>
                <div className="text-yellow-700">
                  60-month auto-renewal with 60-180 day termination notice creates significant inflexibility. Early termination penalty of 6 months charges 
                  ($9,972) is above market rate for 5-year commitment.
                </div>
              </div>
              
              <div>
                <div className="font-semibold text-yellow-800">Tower Rental:</div>
                <div className="text-yellow-700">
                  Missing critical contract terms including termination notice period, renewal provisions, and early termination penalties. These gaps must be 
                  negotiated before contract execution.
                </div>
              </div>
              
              <div>
                <div className="font-semibold text-yellow-800">WM Purchase:</div>
                <div className="text-yellow-700">
                  Quote excludes taxes and installation costs. Warranty terms not specified. Customer assumes all maintenance and obsolescence risks.
                </div>
              </div>
              
              <div>
                <div className="font-semibold text-yellow-800">WM Rental:</div>
                <div className="text-yellow-700">
                  Contract lacks formal contract terms. All provisions including contract length, termination notice, renewal terms, and early termination 
                  penalties require formal documentation and negotiation.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Factor Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Risk Factor Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-4 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">
                    Risk Factor
                  </th>
                  <th className="px-3 py-4 text-center text-xs font-medium text-white uppercase tracking-wider bg-red-500">
                    CRA Rental
                  </th>
                  <th className="px-3 py-4 text-center text-xs font-medium text-white uppercase tracking-wider bg-green-500">
                    Tower Purchase
                  </th>
                  <th className="px-3 py-4 text-center text-xs font-medium text-white uppercase tracking-wider bg-yellow-500">
                    Tower Rental
                  </th>
                  <th className="px-3 py-4 text-center text-xs font-medium text-white uppercase tracking-wider bg-blue-500">
                    WM Purchase
                  </th>
                  <th className="px-3 py-4 text-center text-xs font-medium text-white uppercase tracking-wider bg-purple-500">
                    WM Rental
                  </th>
                  <th className="px-3 py-4 text-center text-xs font-medium text-white uppercase tracking-wider bg-pink-500">
                    CRA Purchase
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {riskFactors.map((risk, index) => (
                  <tr key={index}>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-48">
                      {risk.factor}
                    </td>
                    <td className={`px-3 py-4 text-xs ${risk.craRental.color}`}>
                      <div className="font-medium mb-1">{risk.craRental.assessment}</div>
                      <div className="font-bold">{risk.craRental.risk}</div>
                    </td>
                    <td className={`px-3 py-4 text-xs ${risk.towerPurchase.color}`}>
                      <div className="font-medium mb-1">{risk.towerPurchase.assessment}</div>
                      <div className="font-bold">{risk.towerPurchase.risk}</div>
                    </td>
                    <td className={`px-3 py-4 text-xs ${risk.towerRental.color}`}>
                      <div className="font-medium mb-1">{risk.towerRental.assessment}</div>
                      <div className="font-bold">{risk.towerRental.risk}</div>
                    </td>
                    <td className={`px-3 py-4 text-xs ${risk.wmPurchase.color}`}>
                      <div className="font-medium mb-1">{risk.wmPurchase.assessment}</div>
                      <div className="font-bold">{risk.wmPurchase.risk}</div>
                    </td>
                    <td className={`px-3 py-4 text-xs ${risk.wmRental.color}`}>
                      <div className="font-medium mb-1">{risk.wmRental.assessment}</div>
                      <div className="font-bold">{risk.wmRental.risk}</div>
                    </td>
                    <td className={`px-3 py-4 text-xs ${risk.craPurchase.color}`}>
                      <div className="font-medium mb-1">{risk.craPurchase.assessment}</div>
                      <div className="font-bold">{risk.craPurchase.risk}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default CompactorBidComparison;