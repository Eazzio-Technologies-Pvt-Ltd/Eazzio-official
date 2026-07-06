import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';
import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Eazzio Logo" className="logo-img" />
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
              <button onClick={() => { toggleTheme(); setIsOpen(false); }} className="theme-toggle-btn-mobile">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />} {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
            <li className="nav-item mobile-only">
              <Link to="/contact" className="nav-link-login" onClick={() => setIsOpen(false)}>
                LOGIN
              </Link>
            </li>
            <li className="nav-item mobile-only">
              <Link to="/contact" className="btn btn-primary nav-btn" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Desktop View CTA and Toggles */}
        <div className="nav-cta desktop-only">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn" 
            aria-label="Toggle Theme"
            id="theme-toggle-btn-desktop"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <Link to="/contact" className="nav-login-link">
            LOGIN
          </Link>
          
          <Link to="/contact" className="btn btn-primary btn-navbar">
            Get Started
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
