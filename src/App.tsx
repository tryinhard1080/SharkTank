import React, { useState } from 'react';
import { FileText, BarChart3, Database, Menu, X, Scan } from 'lucide-react';
import LandingSection from './components/LandingSection';
import Dashboard from './components/Dashboard';
import DataWarehouse from './components/DataWarehouse';
import FullScreenDashboard from './components/FullScreenDashboard';
import ScannerDemo from './components/ScannerDemo';
import InvoiceDemo from './components/InvoiceDemo';
import PropertyAnalysisReport from './components/PropertyAnalysisReport';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'landing', name: 'Process Overview', icon: FileText },
    { id: 'scanner', name: 'Contract Demo', icon: Scan },
    { id: 'invoice', name: 'Invoice Demo', icon: Scan },
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'warehouse', name: 'Data Warehouse', icon: Database },
    { id: 'fullscreen', name: 'Full Dashboard', icon: BarChart3 },
    { id: 'report', name: 'Property Report', icon: FileText }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'scanner':
        return <ScannerDemo />;
      case 'invoice':
        return <InvoiceDemo />;
      case 'dashboard':
        return <Dashboard />;
      case 'warehouse':
        return <DataWarehouse />;
      case 'fullscreen':
        return <FullScreenDashboard />;
      case 'report':
        return <PropertyAnalysisReport />;
      default:
        return <LandingSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">
                  Advantage Waste Analyzer
                </h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <Navigation 
                sections={sections}
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Navigation 
                sections={sections}
                activeSection={activeSection}
                onSectionChange={(section) => {
                  setActiveSection(section);
                  setMobileMenuOpen(false);
                }}
                mobile
              />
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {renderActiveSection()}
      </main>
    </div>
  );
}

export default App;
