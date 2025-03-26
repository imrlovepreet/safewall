import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    {
      label: 'About',
      path: '/about',
      submenu: [
        { label: 'Our Mission', path: '/about#mission' },
        { label: 'Our Vision', path: '/about#vision' },
        { label: 'Why Choose SafeWall', path: '/about#why-choose-us' }
      ]
    },
    {
      label: 'Services',
      path: '/services',
      submenu: [
        { label: 'Network Installation & IT Management', path: '/services/network' },
        { label: 'Computer Setup & Active Directory', path: '/services/setup' },
        { label: 'Firewall Solutions', path: '/services/firewall' },
        { label: 'VPN & Zero Trust Security', path: '/services/vpn' },
        { label: 'Penetration Testing', path: '/services/testing' },
        { label: 'Managed Security Services', path: '/services/mssp' },
        { label: 'Compliance & Risk Assessment', path: '/services/compliance' },
        { label: 'IT Startup Boostplan', path: '/services/startup' }
      ]
    },
    {
      label: 'Industries',
      path: '/industries',
      submenu: [
        { label: 'Government & Public Sector', path: '/industries/government' },
        { label: 'Healthcare & Medical Offices', path: '/industries/healthcare' },
        { label: 'Financial Services & Banking', path: '/industries/finance' },
        { label: 'E-commerce & Retail', path: '/industries/retail' },
        { label: 'Education & Institutions', path: '/industries/education' },
        { label: 'Law Firms & Legal Services', path: '/industries/legal' }
      ]
    },
    {
      label: 'Blog & Resources',
      path: '/blog',
      submenu: [
        { label: 'IT Best Practices', path: '/blog/category/best-practices' },
        { label: 'Cybersecurity Trends', path: '/blog/category/trends' },
        { label: 'Compliance & Security Frameworks', path: '/blog/category/compliance' }
      ]
    },
    {
      label: 'Contact',
      path: '/contact'
    }
  ];

  return (
    <nav className="bg-white dark:bg-brand-dark shadow-sm sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Shield className="h-8 w-8 text-brand-blue" />
            <span className="ml-2 text-xl font-bold text-brand-dark dark:text-white font-montserrat">SafeWall</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center ${
                    isActive(item.path)
                      ? 'text-brand-blue'
                      : 'text-brand-dark dark:text-white hover:text-brand-blue dark:hover:text-brand-blue'
                  } transition`}
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <div className="py-2 bg-white dark:bg-brand-dark rounded-lg shadow-lg border border-brand-grey/10 dark:border-white/10">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-brand-dark dark:text-white hover:bg-brand-grey/10 dark:hover:bg-white/5 hover:text-brand-blue dark:hover:text-brand-blue transition"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/consultation"
              className="bg-brand-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition"
            >
              Free Consultation
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-brand-dark dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 text-brand-dark dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 w-full h-full bg-white dark:bg-brand-dark shadow-lg z-50 overflow-y-auto py-4">
            {navItems.map((item) => (
              <div key={item.path} className="py-2">
                <Link
                  to={item.path}
                  className={`block ${
                    isActive(item.path)
                      ? 'text-brand-blue'
                      : 'text-brand-dark dark:text-white hover:text-brand-blue dark:hover:text-brand-blue'
                  } transition`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block text-sm text-brand-dark/70 dark:text-white/70 hover:text-brand-blue dark:hover:text-brand-blue transition"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/consultation"
              className="block w-full bg-brand-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition mt-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Free Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;