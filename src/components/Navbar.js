import React, { useState } from 'react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      id: 'infrastructure',
      title: 'Data Center Infrastructure Management',
      items: ['Monitoring Devices', 'Asset Tracking', 'Network Management', 'Change Management', 'Colocation Management']
    },
    {
      id: 'intelligence',
      title: 'Intelligence Solutions',
      items: ['Digital Twins', 'Smart Power Mapping', 'Predictive Failure and Alerting', 'Smart Control Systems']
    },
    {
      id: 'compliance',
      title: 'Data Center Compliance',
      items: ['DCOI Compliance', '(EU) 2023/1791', 'EN 50600', 'LEED Certification']
    },
    {
      id: 'sustainability',
      title: 'Sustainability Blog',
      items: ['Energy Efficiency', 'Stranded Energy Map', 'Environmental Product Declaration', 'Renewables Integration']
    }
  ];

  return (
    <nav className="fixed w-full z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-14 w-auto"
              src="/images/logo.svg"
              alt="CentralAxis"
            />
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="px-3 py-2 text-sm text-white hover:text-gray-300 flex items-center"
                >
                  {item.title}
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === item.id && (
                  <div className="absolute left-0 mt-2 w-64 bg-black border border-gray-700 rounded-md shadow-lg">
                    {item.items.map((subItem, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-white"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 