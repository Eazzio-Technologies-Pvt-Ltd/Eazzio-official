import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { products } from '../data/products';
import logo from '../assets/logo_dark.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Eazzio Logo" className="logo-img" />
          </Link>
          <p className="footer-desc">
            Smart Business Software for Modern Teams. Empowering your business with robust, scalable, and intuitive software solutions.
          </p>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-heading">Products</h4>
          <ul className="footer-links">
            {products.map(product => (
              <li key={product.id}>
                <Link to={`/products/${product.slug}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} />
              <span>Jamshedpur, Jharkhand</span>
            </li>
            <li>
              <Mail size={18} />
              <a href="mailto:eazziogroup@gmail.com">eazziogroup@gmail.com</a>
            </li>
            <li>
              <Phone size={18} />
              <a href="tel:+918083681114">+91 80836 81114</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Eazzio Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
