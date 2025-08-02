import React, { useState, useEffect } from 'react';
import { TrendingDown, Clock, DollarSign, AlertTriangle, Upload, FileText, CheckCircle } from 'lucide-react';
import KPICard from './KPICard';
import DataTable from './DataTable';
import SavingsChart from './SavingsChart';
import LandingSection from './LandingSection';
import ScannerDemo from './ScannerDemo';

const Dashboard: React.FC = () => {
  const [animateValues, setAnimateValues] = useState(false);
  const [showProcessSteps, setShowProcessSteps] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateValues(true);
      setShowProcessSteps(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const kpis = [
    {
      title: 'Monthly Waste Spend Reduction',
      value: '23.5%',
      icon: TrendingDown,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      trend: '+5.2% vs last month'
    },
    {
      title: 'Time Saved for Property Managers',
      value: '47.3',
      unit: 'hrs/month',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      trend: '+12 hours vs last month'
    },
    {
      title: 'Cost Avoidance Opportunities',
      value: '$84,250',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      trend: 'Identified this quarter'
    },
    {
      title: 'Compliance Issues Flagged',
      value: '7',
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      trend: '3 resolved this week'
    }
  ];

  const contractData = [
    {
      property: 'Oakwood Apartments',
      contractStart: '2024-01-01',
      contractEnd: '2024-12-31',
      monthlyRate: '$2,450',
      frequency: '3x/week',
      binSize: '4 yard',
      status: 'Active'
    },
    {
      property: 'Riverside Commons',
      contractStart: '2023-06-15',
      contractEnd: '2024-06-14',
      monthlyRate: '$1,890',
      frequency: '2x/week',
      binSize: '3 yard',
      status: 'Expiring Soon'
    },
    {
      property: 'Metro Heights',
      contractStart: '2024-03-01',
      contractEnd: '2025-02-28',
      monthlyRate: '$3,120',
      frequency: '4x/week',
      binSize: '6 yard',
      status: 'Active'
    }
  ];

  const invoiceData = [
    {
      property: 'Oakwood Apartments',
      invoiceDate: '2024-01-15',
      amount: '$2,450.00',
      services: 'Regular pickup',
      overages: '$0.00',
      status: 'Verified'
    },
    {
      property: 'Riverside Commons',
      invoiceDate: '2024-01-15',
      amount: '$2,120.00',
      services: 'Regular pickup + extra',
      overages: '$230.00',
      status: 'Flagged'
    },
    {
      property: 'Metro Heights',
      invoiceDate: '2024-01-15',
      amount: '$3,120.00',
      services: 'Regular pickup',
      overages: '$0.00',
      status: 'Verified'
    }
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Process Overview Section */}
        {showProcessSteps && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Automated Waste Contract Analysis Process
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our AI-powered platform streamlines waste management analysis from document upload to actionable insights.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Documents</h3>
                <p className="text-gray-600">Scan and upload waste contracts and invoices</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Parse Data Fields</h3>
                <p className="text-gray-600">AI extracts key information automatically</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Generate Insights</h3>
                <p className="text-gray-600">Identify savings and compliance opportunities</p>
              </div>
            </div>
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Waste Management Dashboard
          </h2>
          <p className="text-gray-600">
            Real-time insights into your property portfolio's waste management performance
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => (
            <KPICard 
              key={index} 
              {...kpi} 
              animate={animateValues}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Contract Data Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contract Overview
              </h3>
              <DataTable 
                data={contractData}
                columns={[
                  { key: 'property', header: 'Property' },
                  { key: 'monthlyRate', header: 'Monthly Rate' },
                  { key: 'frequency', header: 'Frequency' },
                  { key: 'contractEnd', header: 'Contract End' },
                  { key: 'status', header: 'Status' }
                ]}
              />
            </div>
          </div>

          {/* Savings Chart */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Savings Breakdown
              </h3>
              <SavingsChart />
            </div>
          </div>
        </div>

        {/* Invoice Comparison */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Invoice Analysis
          </h3>
          <DataTable 
            data={invoiceData}
            columns={[
              { key: 'property', header: 'Property' },
              { key: 'invoiceDate', header: 'Invoice Date' },
              { key: 'amount', header: 'Amount' },
              { key: 'services', header: 'Services' },
              { key: 'overages', header: 'Overages' },
              { key: 'status', header: 'Status' }
            ]}
          />
        </div>

        {/* Document Processing Simulation */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Document Processing Status
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">contract_oakwood_2024.pdf</div>
                  <div className="text-sm text-gray-500">Processed 2 minutes ago</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">✓ Complete</div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">invoice_january_2024.pdf</div>
                  <div className="text-sm text-gray-500">Processed 1 minute ago</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">✓ Complete</div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <FileText className="w-5 h-5 text-blue-500 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Ready for next upload</div>
                  <div className="text-sm text-gray-500">Drop files here or click to browse</div>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;