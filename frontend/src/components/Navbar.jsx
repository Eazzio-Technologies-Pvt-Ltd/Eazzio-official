import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoLight from '../assets/logo_light.png';
import logoDark from '../assets/logo_dark.png';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar inner-nav">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <img src={logoDark} alt="Eazzio Logo" className="logo-img" />
        </Link>

        <div className="nav-links-container">
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li 
              className="nav-item has-dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link to="/products" className={`nav-link ${isActive('/products')} flex items-center gap-1`} onClick={() => setIsOpen(false)}>
                Products <ChevronDown size={14} className="dropdown-arrow-icon" />
              </Link>
              {dropdownOpen && (
                <div className="nav-dropdown">
                  <Link to="/products/eazzio-books" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    Eazzio Books
                  </Link>
                  <Link to="/products/eazzio-payroll" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    Eazzio Payroll
                  </Link>
                  <Link to="/products/eazzio-telecaller" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    Eazzio Telecaller
                  </Link>
                  <Link to="/products/eazzio-reminders" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    Eazzio Reminders
                  </Link>
                  <Link to="/products/eazzio-whats-bulk" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    Eazzio Whats Bulk
                  </Link>
                </div>
              )}
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            
            {/* Mobile View CTA Elements */}
            <li className="nav-item mobile-only divider"></li>

            <li className="nav-item mobile-only">
              <a href="tel:+918083681114" className="btn btn-primary nav-btn" onClick={() => setIsOpen(false)}>
                Call Me
              </a>
            </li>
          </ul>
        </div>
        
        {/* Desktop View CTA and Toggles */}
        <div className="nav-cta desktop-only">
          <a href="tel:+918083681114" className="btn btn-primary btn-navbar">
            Call Me
          </a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
