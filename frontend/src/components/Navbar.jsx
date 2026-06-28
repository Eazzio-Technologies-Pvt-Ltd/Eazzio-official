import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Eazzio Logo" className="logo-img" />
        </Link>

        <div className="nav-links-container">
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/')}`} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className={`nav-link ${isActive('/products')}`} onClick={toggleMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item mobile-only">
              <Link to="/contact" className="btn btn-primary nav-btn" onClick={toggleMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="nav-cta desktop-only">
          <Link to="/contact" className="btn btn-primary">
            Contact Us
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
