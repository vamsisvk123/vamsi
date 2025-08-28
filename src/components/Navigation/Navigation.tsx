import React, { useState } from 'react';
import './Navigation.css';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onSectionClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['About', 'Skills', 'Experience', 'Education', 'Contact'];

  const handleLogoClick = () => {
    // Navigate to dashboard - you can replace this with your actual dashboard route
    window.location.href = '/dashboard';
  };

  const handleNavClick = (section: string) => {
    onSectionClick(section);
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as Element;
        if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-toggle')) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="nav-logo" onClick={handleLogoClick}>
          <div className="logo-circle">
            <span className="logo-text">SVK</span>
          </div>
        </div>
        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item}
              className={`nav-link ${
                activeSection === item.toLowerCase() ? 'active' : ''
              }`}
              onClick={() => handleNavClick(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <span className="menu-icon" style={{ fontSize: '28px' }}>
              ×
            </span>
          ) : (
            <span className="menu-icon" style={{ fontSize: '20px' }}>
              ☰
            </span>
          )}
        </button>
      </div>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navItems.map((item) => (
            <button
              key={item}
              className={`mobile-nav-link ${
                activeSection === item.toLowerCase() ? 'active' : ''
              }`}
              onClick={() => handleNavClick(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
