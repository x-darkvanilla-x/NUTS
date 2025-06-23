import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<any>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownEnter = (dropdown: string | React.SetStateAction<null>) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Mehndi', 
      href: 'mehndi',
      dropdown: [
        { name: 'Services', href: 'mehndi-services' },
        { name: 'Gallery', href: 'mehndi-gallery' }
      ]
    },
    { 
      name: 'Makeup', 
      href: 'makeup',
      dropdown: [
        { name: 'Services', href: 'makeup-services' },
        { name: 'Gallery', href: 'makeup-gallery' }
      ]
    },
    { name: 'Stats', href: 'stats' },
    { name: 'About Us', href: 'about' },
  ];

  return (
    <nav className="relative top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgba(93, 64, 55, 0.9)' }}>
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand Name */}
          <div className="">
            <div className="flex items-center">
              <h1 className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                Nutan's Makeup and Mehndi Studio
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
                  onMouseLeave={() => item.dropdown && handleDropdownLeave()}
                >
                  <a
                    href={item.href}
                    className="text-white hover:text-orange-200 px-3 py-2 text-lg font-medium transition-colors duration-200 flex items-center"
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </a>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center bg-transparent justify-center p-2 rounded-md text-white hover:text-orange-200 hover:bg-black hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-20 backdrop-blur-sm" style={{ backgroundColor: 'rgba(93, 64, 55, 0.9)' }}>
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="text-white hover:text-orange-200 block px-3 py-2 text-lg font-medium transition-colors duration-200"
                  onClick={() => {
                    if (!item.dropdown) {
                      setIsOpen(false);
                    }
                  }}
                >
                  {item.name}
                </a>
                {/* Mobile Dropdown */}
                {item.dropdown && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="text-orange-200 hover:text-white block px-3 py-2 text-sm font-medium transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}