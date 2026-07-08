import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowRight, ShieldCheck, Zap, TrendingUp, Users, Check, Play, Clock, PhoneCall, ChevronLeft, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import './Home.css';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };
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
            
            <div className="hero-checks flex items-center gap-6 mt-6 flex-wrap">
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

          {/* Right Column: 3D Slider */}
          <div className="hero-visuals-right">
            <div className="carousel-3d-container">
              <button className="carousel-nav-btn prev-btn" onClick={prevSlide}>
                <ChevronLeft size={24} />
              </button>

              <div className="carousel-3d-track">
                {products.map((product, index) => {
                  const isImageIcon = typeof product.icon === 'string' && (product.icon.includes('.') || product.icon.includes('/'));
                  const IconComponent = !isImageIcon ? (Icons[product.icon] || Icons.Box) : null;
                  
                  let slideClass = "slide-hidden";
                  if (index === activeIndex) {
                    slideClass = "slide-active";
                  } else if (index === (activeIndex - 1 + products.length) % products.length) {
                    slideClass = "slide-prev";
                  } else if (index === (activeIndex + 1) % products.length) {
                    slideClass = "slide-next";
                  }

                  return (
                    <div key={product.id} className={`iphone-mockup-slide ${slideClass}`} onClick={() => setActiveIndex(index)}>
                      <div className="iphone-mockup">
                        <div className="iphone-notch">
                          <div className="iphone-speaker"></div>
                          <div className="iphone-camera"></div>
                        </div>
                        <div className="iphone-screen single-product-screen">
                          <div className="iphone-app-screenshot-placeholder"></div>
                          
                          <div className="iphone-single-product-content">
                            <div className="iphone-product-icon">
                              {isImageIcon ? (
                                <img src={product.icon} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                              ) : (
                                <IconComponent size={20} />
                              )}
                            </div>
                            <h3 className="iphone-product-title">{product.name}</h3>
                            <p className="iphone-product-desc">{product.shortDescription}</p>
                            
                            <div className="iphone-product-features">
                              {product.features.slice(0, 3).map((feature, idx) => (
                                <div key={idx} className="iphone-feature-row">
                                  <Check size={14} className="text-primary" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                            
                            {product.externalLink !== "Mobile App" ? (
                              <a href={product.externalLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary iphone-btn-full" tabIndex={index === activeIndex ? 0 : -1}>
                                Visit Website
                              </a>
                            ) : (
                              <Link to={`/products/${product.slug}`} className="btn btn-primary iphone-btn-full" tabIndex={index === activeIndex ? 0 : -1}>
                                Visit Website
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="carousel-nav-btn next-btn" onClick={nextSlide}>
                <ChevronRight size={24} />
              </button>
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

      {/* Our Products Section */}
      <section className="section bg-light" id="products">
        <div className="container">
          <div className="section-header text-center mb-8">
            <h2 className="title">Explore Our Products</h2>
            <p className="subtitle mx-auto">
              Discover our suite of specialized software solutions built to streamline your business operations.
            </p>
          </div>
          <div className="grid grid-cols-2 md-grid-cols-2 sm-grid-cols-1 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
