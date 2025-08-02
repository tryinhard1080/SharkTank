import React from 'react';
import { Menu, X, Search } from 'lucide-react';
import Navigation from './Navigation';

interface Section {
  id: string;
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface HeaderProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (section: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  sections,
  activeSection,
  onSectionChange,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  return (
    <header className="bg-dark-navy shadow-lg border-b border-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src="/image.png" 
                alt="Advantage Waste Analyzer" 
                className="h-10 w-auto transition-ease hover:scale-105"
              />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Navigation 
              sections={sections}
              activeSection={activeSection}
              onSectionChange={onSectionChange}
            />
          </div>

          {/* Spotlight Search */}
          <div className="hidden md:flex items-center">
            <div className="glass-box text-gray-300 px-4 py-2 rounded-lg text-sm flex items-center cursor-pointer hover:bg-white/10 transition-ease group">
              <Search className="w-4 h-4 mr-2 group-hover:text-bourbon-orange transition-ease" />
              <span className="mr-3 group-hover:text-white transition-ease">Search contracts, invoices...</span>
              <div className="bg-gray-700 text-xs px-2 py-1 rounded border border-gray-600 group-hover:border-bourbon-orange transition-ease">
                ⌘K
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus-visible:outline-bourbon-orange transition-ease"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-navy border-t border-gray-800">
              <Navigation 
                sections={sections}
                activeSection={activeSection}
                onSectionChange={(section) => {
                  onSectionChange(section);
                  setMobileMenuOpen(false);
                }}
                mobile
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;