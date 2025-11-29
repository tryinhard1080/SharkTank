import React from 'react';

interface Section {
  id: string;
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface NavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (section: string) => void;
  mobile?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ 
  sections, 
  activeSection, 
  onSectionChange, 
  mobile = false 
}) => {
  const baseClasses = mobile
    ? "block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
    : "inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300";

  return (
    <nav className={mobile ? "space-y-1" : "flex space-x-4"}>
      {sections.map((section) => {
        const Icon = section.icon;
        const isActive = activeSection === section.id;

        return (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`${baseClasses} ${
              isActive
                ? 'bg-forest-800 text-white shadow-glow-forest transform scale-105'
                : 'text-gray-300 hover:text-white hover:bg-forest-700 hover:scale-105'
            }`}
          >
            <Icon size={16} className={mobile ? "inline mr-2" : "mr-2"} />
            {section.name}
          </button>
        );
      })}
    </nav>
  );
};

export default Navigation;