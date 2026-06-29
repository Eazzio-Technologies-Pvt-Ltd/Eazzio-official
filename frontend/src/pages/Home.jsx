import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowRight, ShieldCheck, Zap, TrendingUp, Users, CheckCircle } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>Eazzio Technologies | Smart Business Software Solutions</title>
        <meta name="description" content="Empower your business with Eazzio's suite of intuitive, scalable software solutions." />
      </Helmet>

      {/* Hero Section */}
      <header className="hero section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="trust-badge">
              <CheckCircle size={16} className="text-primary" />
              <span>Business software built for modern teams.</span>
            </div>
            <h1 className="hero-title">
              Smart Business Software for <span className="text-primary">Modern Teams</span>
            </h1>
            <p className="hero-subtitle">
              Empower your business with Eazzio's suite of intuitive, scalable, and robust software solutions designed to streamline your operations and drive growth.
            </p>
            <div className="hero-cta flex items-center gap-4">
              <Link to="/products" className="btn btn-primary btn-large">
                Explore Products <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn btn-outline btn-large">
                Request a Demo
              </Link>
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
