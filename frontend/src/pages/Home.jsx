import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowRight, ShieldCheck, Zap, TrendingUp, Users, Check, Play, Clock, PhoneCall } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>Eazzio Technologies | Smart Business Software Solutions</title>
        <meta name="description" content="Empower your business with Eazzio's suite of intuitive, scalable software solutions." />
      </Helmet>

      {/* Hero Section */}
      <header className="hero section grid-background">
        <div className="container hero-grid-container">
          {/* Left Column: Hero Content */}
          <div className="hero-content-left">
            <div className="trust-badge">
              <Zap size={14} className="text-primary" />
              <span>ONE UNIFIED PLATFORM</span>
            </div>
            <h1 className="hero-title">
              Run Your Business Smarter with One Platform.
            </h1>
            <p className="hero-subtitle">
              Eazzio helps businesses manage accounting, payroll, telecalling and reminders from one place. Designed for growing Indian startups and SMEs.
            </p>
            <div className="hero-cta flex items-center gap-4 flex-wrap">
              <Link to="/contact" className="btn btn-primary btn-large">
                Get Started <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline btn-large flex items-center gap-2">
                <span className="play-icon-circle"><Play size={12} fill="currentColor" /></span> Book a Demo
              </Link>
            </div>
            
            <div className="hero-checks flex items-center gap-6 mt-8 flex-wrap">
              <div className="hero-check-item">
                <span className="check-icon-wrapper"><Check size={14} /></span>
                <span>Easy to Use</span>
              </div>
              <div className="hero-check-item">
                <span className="check-icon-wrapper"><Check size={14} /></span>
                <span>Secure Data</span>
              </div>
              <div className="hero-check-item">
                <span className="check-icon-wrapper"><Check size={14} /></span>
                <span>Made for Indian Businesses</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Widgets */}
          <div className="hero-visuals-right">
            <div className="widgets-wrapper">
              {/* Accounting Core Widget */}
              <div className="widget-card widget-accounting">
                <div className="widget-header">
                  <span className="status-dot-gray"></span>
                  <span className="widget-label">ACCOUNTING CORE</span>
                </div>
                <div className="widget-revenue-section">
                  <p className="revenue-label">TOTAL SALES REVENUE</p>
                  <h3>₹14,86,450</h3>
                </div>
                <div className="widget-bar-chart">
                  <div className="chart-bar" style={{ '--bar-h': '30%' }}></div>
                  <div className="chart-bar" style={{ '--bar-h': '45%' }}></div>
                  <div className="chart-bar" style={{ '--bar-h': '35%' }}></div>
                  <div className="chart-bar" style={{ '--bar-h': '55%' }}></div>
                  <div className="chart-bar" style={{ '--bar-h': '40%' }}></div>
                  <div className="chart-bar" style={{ '--bar-h': '70%' }}></div>
                  <div className="chart-bar" style={{ '--bar-h': '60%' }}></div>
                  <div className="chart-bar" style={{ '--bar-h': '80%' }}></div>
                  <div className="chart-bar" style={{ '--bar-h': '50%' }}></div>
                  <div className="chart-bar" style={{ '--bar-h': '85%' }}></div>
                </div>
              </div>

              {/* Salary Payroll Overlay Widget */}
              <div className="widget-card widget-payroll">
                <div className="widget-payroll-header">
                  <span className="widget-label">SALARY PAYROLL</span>
                  <span className="status-dot-green"></span>
                </div>
                <h4 className="widget-payroll-title">June Payout Cycle</h4>
                <p className="widget-payroll-amount">₹5,84,000</p>
                <div className="widget-payroll-footer">
                  <span className="employees-count">42 EMPLOYEES</span>
                  <span className="status-processed-badge">PROCESSED</span>
                </div>
              </div>

              {/* Dialer Outreach Overlay Widget */}
              <div className="widget-card widget-dialer">
                <div className="widget-dialer-header">
                  <div className="dialer-title-group">
                    <PhoneCall size={12} className="text-primary" />
                    <span className="widget-label">DIALER OUTREACH</span>
                  </div>
                  <span className="dialer-amount">₹84,500</span>
                </div>
                
                <h4 className="widget-dialer-calls">184 Calls</h4>
                <p className="dialer-sublabel">TODAY'S VOLUME</p>
                
                <div className="widget-dialer-footer">
                  <span className="dialer-stat"><Clock size={12} /> 6H 12M</span>
                  <span className="dialer-success-rate">98% SUCCESS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="stats-section bg-secondary">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>4+</h3>
              <p>Software Products</p>
            </div>
            <div className="stat-card">
              <h3>Focus</h3>
              <p>Business Automation</p>
            </div>
            <div className="stat-card">
              <h3>Web</h3>
              <p>Scalable Solutions</p>
            </div>
            <div className="stat-card">
              <h3>SaaS</h3>
              <p>Modern Architecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header text-center mb-8">
            <h2 className="title">Our Product Ecosystem</h2>
            <p className="subtitle mx-auto">
              Discover our range of specialized software solutions built to tackle your specific business challenges.
            </p>
          </div>
          <div className="grid grid-cols-4 md-grid-cols-2 sm-grid-cols-1 gap-8 products-hover-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center mb-8">
            <h2 className="title">Built for Growing Businesses</h2>
            <p className="subtitle mx-auto">
              We build software that works for you, not the other way around. Why Choose Eazzio Technologies?
            </p>
          </div>
          <div className="grid grid-cols-2 sm-grid-cols-1 gap-8 features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Zap size={28} />
              </div>
              <div>
                <h3>Lightning Fast</h3>
                <p>Optimized for speed and performance, ensuring a smooth user experience without interruptions.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3>Secure & Reliable</h3>
                <p>Enterprise-grade security to keep your business data safe, encrypted, and strictly compliant.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Users size={28} />
              </div>
              <div>
                <h3>User-Centric Design</h3>
                <p>Intuitive interfaces that require minimal training, enabling your team to be productive instantly.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <TrendingUp size={28} />
              </div>
              <div>
                <h3>Scalable Solutions</h3>
                <p>Our software grows effortlessly with your business, handling increased demand and complex workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2 className="title text-white">Request a Product Demo</h2>
          <p className="subtitle text-white-muted mx-auto">
            Join hundreds of companies that trust Eazzio Technologies for their daily operations.
          </p>
          <Link to="/contact" className="btn btn-primary mt-4 btn-large">
            Get Started Today <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
