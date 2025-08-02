import React, { useState } from 'react';
import { FileText, BarChart3, Database, Scan } from 'lucide-react';
import LandingSection from './components/LandingSection';
import CombinedDashboard from './components/CombinedDashboard';
import DataWarehouse from './components/DataWarehouse';
import ScannerDemo from './components/ScannerDemo';
import InvoiceDemo from './components/InvoiceDemo';
import PropertyAnalysisReport from './components/PropertyAnalysisReport';
import Header from './components/Header';

function App() {
  const [activeSection, setActiveSection] = useState('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'landing', name: 'Process Overview', icon: FileText },
    { id: 'scanner', name: 'Contract Demo', icon: Scan },
    { id: 'invoice', name: 'Invoice Demo', icon: Scan },
    { id: 'dashboard', name: 'Combined Dashboard', icon: BarChart3 },
    { id: 'warehouse', name: 'Data Warehouse', icon: Database },
    { id: 'report', name: 'Property Report', icon: FileText }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'scanner':
        return <ScannerDemo />;
      case 'invoice':
        return <InvoiceDemo />;
      case 'dashboard':
        return <CombinedDashboard />;
      case 'warehouse':
        return <DataWarehouse />;
      case 'report':
        return <PropertyAnalysisReport />;
      default:
        return <LandingSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <Header
        sections={sections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Content */}
      <main className="flex-1">
        {renderActiveSection()}
      </main>
    </div>
  );
}

export default App;
