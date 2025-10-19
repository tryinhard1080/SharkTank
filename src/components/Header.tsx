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
                alt="WasteWise"
                className="h-14 w-auto transition-transform duration-300 hover:scale-105"
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus-visible:outline-electric-blue transition-all duration-300"
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