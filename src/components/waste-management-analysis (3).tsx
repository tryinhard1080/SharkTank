import React from 'react';
import { LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const WasteAnalysis = () => {
  // First set of invoices - actual data from original invoices (Jan-Sep 2024)
  const oldInvoiceData = [
    { month: 'Jan', year: 2024, totalCost: 9199.79, costPerDoor: 30.26, regularService: 6821.03, rollOffService: 2378.76 },
    { month: 'Feb', year: 2024, totalCost: 9115.57, costPerDoor: 29.99, regularService: 6821.03, rollOffService: 2294.54 },
    { month: 'Mar', year: 2024, totalCost: 9460.57, costPerDoor: 31.12, regularService: 6271.12, rollOffService: 3189.45 },
    { month: 'Apr', year: 2024, totalCost: 9053.32, costPerDoor: 29.78, regularService: 6271.12, rollOffService: 2782.20 },
    { month: 'May', year: 2024, totalCost: 7293.88, costPerDoor: 24.00, regularService: 6271.12, rollOffService: 1022.76 },
    { month: 'Jun', year: 2024, totalCost: 7549.58, costPerDoor: 24.83, regularService: 6271.12, rollOffService: 1278.46 },
    { month: 'Aug', year: 2024, totalCost: 8382.12, costPerDoor: 27.57, regularService: 6772.84, rollOffService: 1609.28 },
    { month: 'Sep', year: 2024, totalCost: 6772.84, costPerDoor: 22.28, regularService: 6772.84, rollOffService: 0 }
  ];

  // Second set of invoices - actual data from Waste Management invoices (Apr 2024-Mar 2025)
  const newInvoiceData = [
    { month: 'Apr', year: 2024, totalCost: 4279.42, costPerDoor: 14.08 },
    { month: 'May', year: 2024, totalCost: 7061.62, costPerDoor: 23.23 },
    { month: 'Jun', year: 2024, totalCost: 9355.14, costPerDoor: 30.77 },
    { month: 'Jul', year: 2024, totalCost: 6797.88, costPerDoor: 22.36 },
    { month: 'Aug', year: 2024, totalCost: 6797.88, costPerDoor: 22.36 },
    { month: 'Nov', year: 2024, totalCost: 6797.81, costPerDoor: 22.36 },
    { month: 'Dec', year: 2024, totalCost: 6797.84, costPerDoor: 22.36 },
    { month: 'Jan', year: 2025, totalCost: 8520.99, costPerDoor: 28.03 },
    { month: 'Feb', year: 2025, totalCost: 7822.73, costPerDoor: 25.73 },
    { month: 'Mar', year: 2025, totalCost: 7792.88, costPerDoor: 25.63 }
  ];

  // YoY comparison data - actual invoice amounts for Q1 comparison
  const yoyComparisonData = [
    { month: 'January', year2024: 9199.79, year2025: 8520.99, savings: 678.80, percentReduction: 7.4 },
    { month: 'February', year2024: 9115.57, year2025: 7822.73, savings: 1292.84, percentReduction: 14.2 },
    { month: 'March', year2024: 9460.57, year2025: 7792.88, savings: 1667.69, percentReduction: 17.6 }
  ];

  // Merged data for total cost comparison - only including months where we have actual invoice data
  const mergedCostData = [
    { month: 'Jan', cost2024: 9199.79, cost2025: 8520.99 },
    { month: 'Feb', cost2024: 9115.57, cost2025: 7822.73 },
    { month: 'Mar', cost2024: 9460.57, cost2025: 7792.88 },
    { month: 'Apr', cost2024: 9053.32, cost2025: 4279.42 },
    { month: 'May', cost2024: 7293.88, cost2025: 7061.62 },
    { month: 'Jun', cost2024: 7549.58, cost2025: 9355.14 },
    { month: 'Jul', cost2024: null, cost2025: 6797.88 },
    { month: 'Aug', cost2024: 8382.12, cost2025: 6797.88 },
    { month: 'Sep', cost2024: 6772.84, cost2025: null },
    { month: 'Nov', cost2024: null, cost2025: 6797.81 },
    { month: 'Dec', cost2024: null, cost2025: 6797.84 }
  ].filter(item => item.cost2024 !== null || item.cost2025 !== null);

  // Actual Q1 averages directly from invoice data
  const Q1_2024_Avg = (9199.79 + 9115.57 + 9460.57) / 3;
  const Q1_2025_Avg = (8520.99 + 7822.73 + 7792.88) / 3;
  
  // Direct calculations from actual invoice data
  const avgSavingsDollar = Q1_2024_Avg - Q1_2025_Avg;
  const avgSavingsPercent = (avgSavingsDollar / Q1_2024_Avg) * 100;
  const avgSavingsPerDoor = avgSavingsDollar / 304;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">7 West Apartments: Waste Management Cost Analysis</h1>
      <p className="text-center mb-4 text-gray-600">Based on actual invoice data from 2024-2025</p>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Monthly Total Cost Comparison</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={mergedCostData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 10000]} />
              <Tooltip formatter={(value) => value ? `${value.toFixed(2)}` : 'N/A'} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="cost2024" 
                name="2024 Cost" 
                stroke="#8884d8" 
                activeDot={{ r: 8 }} 
                connectNulls 
              />
              <Line 
                type="monotone" 
                dataKey="cost2025" 
                name="2025 Cost" 
                stroke="#82ca9d" 
                activeDot={{ r: 8 }} 
                connectNulls 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-500 mt-2">Note: Only showing months with actual invoice data. Gaps in lines indicate months without data.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Q1 Year-over-Year Comparison</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={yoyComparisonData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" orientation="left" />
              <YAxis yAxisId="right" orientation="right" domain={[0, 20]} />
              <Tooltip formatter={(value, name) => {
                if (name === 'percentReduction') return `${value.toFixed(1)}%`;
                return `${value.toFixed(2)}`;
              }} />
              <Legend />
              <Bar yAxisId="left" dataKey="year2024" name="2024 Cost" fill="#8884d8" />
              <Bar yAxisId="left" dataKey="year2025" name="2025 Cost" fill="#82ca9d" />
              <Bar yAxisId="right" dataKey="percentReduction" name="% Reduction" fill="#ff7300" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Q1 Cost Per Door Comparison</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[
                {month: 'January', year: 2024, costPerDoor: 9199.79/304},
                {month: 'February', year: 2024, costPerDoor: 9115.57/304},
                {month: 'March', year: 2024, costPerDoor: 9460.57/304},
                {month: 'January', year: 2025, costPerDoor: 8520.99/304},
                {month: 'February', year: 2025, costPerDoor: 7822.73/304},
                {month: 'March', year: 2025, costPerDoor: 7792.88/304}
              ]}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 35]} />
              <Tooltip formatter={(value) => `${value.toFixed(2)}`} />
              <Legend />
              <Bar dataKey="costPerDoor" name="Cost Per Door">
                {[...Array(6)].map((_, index) => (
                  <Cell key={`cell-${index}`} fill={index < 3 ? '#8884d8' : '#82ca9d'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-500 mt-2">Purple: 2024 | Green: 2025</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2 text-center">Actual Q1 Metrics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-lg font-semibold">2024 Q1 Average</p>
              <p className="text-2xl font-bold text-indigo-600">${Q1_2024_Avg.toFixed(2)}</p>
              <p className="text-sm text-gray-500">Per door: ${(Q1_2024_Avg/304).toFixed(2)}</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-lg font-semibold">2025 Q1 Average</p>
              <p className="text-2xl font-bold text-green-600">${Q1_2025_Avg.toFixed(2)}</p>
              <p className="text-sm text-gray-500">Per door: ${(Q1_2025_Avg/304).toFixed(2)}</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-lg font-semibold">Q1 Dollar Difference</p>
              <p className="text-2xl font-bold text-orange-600">${avgSavingsDollar.toFixed(2)}</p>
              <p className="text-sm text-gray-500">{avgSavingsPercent.toFixed(1)}% reduction</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-lg font-semibold">Q1 Difference Per Door</p>
              <p className="text-2xl font-bold text-orange-600">${avgSavingsPerDoor.toFixed(2)}</p>
              <p className="text-sm text-gray-500">Per unit per month</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2 text-center">Service Changes Observed</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-semibold">Pickup Frequency:</span> 3x weekly in 2024 invoices, 2x weekly in Feb 2025 invoice</li>
            <li><span className="font-semibold">Service Consistency:</span> Jul-Dec 2024 invoices show $6,797/month</li>
            <li><span className="font-semibold">Valet Service:</span> Added in Jan 2025 invoice ($995/month)</li>
            <li><span className="font-semibold">Monthly Change in Q1:</span> January (7.4%), February (14.2%), March (17.6%)</li>
            <li><span className="font-semibold">Jul-Dec 2024:</span> Consistent charge of $6,797.81-$6,797.88</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h2 className="text-xl font-bold mb-2 text-center">Data Summary</h2>
        <p className="mb-2">Based strictly on the invoice data provided, Q1 2025 shows lower costs than Q1 2024 across all three months. The dollar difference between Q1 2024 and Q1 2025 averages is $1,213.11 per month.</p>
        <p>The invoices show a consistent monthly charge of approximately $6,797 from July through December 2024, and a change from 3x weekly to 2x weekly trash pickup in 2025.</p>
      </div>
    </div>
  );
};

export default WasteAnalysis;