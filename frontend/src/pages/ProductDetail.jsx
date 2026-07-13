import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';
import { CheckCircle2, Star, ArrowRight, Shield, Zap } from 'lucide-react';
import * as Icons from 'lucide-react';
import Reveal from '../motion/Reveal';
import TelecallerDashboard from '../components/TelecallerDashboard';
import PayrollDashboard from '../components/PayrollDashboard';
import BooksDashboard from '../components/BooksDashboard';
import WhatsBulkDashboard from '../components/WhatsBulkDashboard';
import RemindersDashboard from '../components/RemindersDashboard';
import MobileMockup from '../components/MobileMockup';
import './ProductDetail.css';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" />;
  }
  
  const isImageIcon = typeof product.icon === 'string' && (product.icon.includes('.') || product.icon.includes('/'));
  const IconComponent = !isImageIcon ? (Icons[product.icon] || Icons.Box) : null;


  const renderDashboard = (productId) => {
    const content = (() => {
      switch (productId) {
        case 'eazzio-telecaller': return <TelecallerDashboard />;
        case 'eazzio-payroll': return <PayrollDashboard />;
        case 'eazzio-books': return <BooksDashboard />;
        case 'eazzio-whats-bulk': return <WhatsBulkDashboard />;
        case 'eazzio-reminders': return <RemindersDashboard />;
        default: return <div className="iphone-app-screenshot-placeholder"></div>;
      }
    })();
    return <div style={{ flex: 1, width: '100%', overflowY: 'auto' }}>{content}</div>;
  };

  return (
    <div className="product-detail-page">
      <Helmet>
        <title>{product.name} | Eazzio Technologies</title>
        <meta name="description" content={product.shortDescription} />
      </Helmet>

      <header className="page-hero detail-hero premium-hero">
        <div className="hero-bg-glow"></div>
        <div className="hero-bg-glow hero-bg-glow-2"></div>
        <div className="hero-dot-pattern"></div>
        <div className="container hero-grid-container relative z-10">
          <div className="hero-content-left text-left">
            <Reveal direction="up" delay={0.1} duration={0.8} viewport={{ once: true }}>
              <div className="detail-icon-wrapper premium-icon-wrapper mb-6">
                 {isImageIcon ? (
                   <img src={product.icon} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                 ) : (
                   <IconComponent size={42} className="text-white" />
                 )}
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.15} duration={0.8} viewport={{ once: true }}>
              <div className="hero-eyebrow">
                <span className="eyebrow-dot"></span>
                {product.name.replace('Eazzio ', '')} Management
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.2} duration={0.8} viewport={{ once: true }}>
              <h1 className="hero-title premium-title text-white">{product.name}</h1>
            </Reveal>
            <Reveal direction="up" delay={0.3} duration={0.8} viewport={{ once: true }}>
              <p className="hero-subtitle premium-subtitle text-white-muted">
                {product.shortDescription}
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.4} duration={0.8} viewport={{ once: true }}>
              <div className="flex mt-8 gap-4 flex-wrap sm-flex-col hero-actions">
                <Link to="/contact" state={{ selectedProduct: product.name }} className="btn btn-primary btn-large btn-pill btn-glow">
                  {product.ctaText} <ArrowRight size={18} className="ml-2 btn-icon-shift" />
                </Link>
                {product.externalLink && product.externalLink !== "Mobile App" && (
                  <a href={product.externalLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-large btn-pill btn-hover-tint">
                    Visit Website
                  </a>
                )}
                {product.externalLink === "Mobile App" && (
                  <span className="btn btn-outline-white btn-large btn-pill btn-hover-tint" style={{ opacity: 0.8, cursor: 'default' }}>
                    Available on Mobile App
                  </span>
                )}
              </div>
            </Reveal>
          </div>
          
          <Reveal direction="up" distance={40} duration={0.9} delay={0.3} className="hero-visuals-right relative" viewport={{ once: true }}>
            <div className="mockup-glow-behind"></div>
            <div style={{ width: '250px', height: '470px' }} className="detail-mockup-wrapper premium-mockup">
              <MobileMockup>
                {renderDashboard(product.id)}
                <div className="iphone-single-product-content" style={{ flexGrow: 0, paddingTop: '0.25rem' }}>
                  {product.externalLink !== "Mobile App" ? (
                    <a href={product.externalLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary iphone-btn-full">
                      Visit Website
                    </a>
                  ) : (
                    <span className="btn btn-primary iphone-btn-full" style={{ pointerEvents: 'none', opacity: 0.8 }}>
                      Visit Website
                    </span>
                  )}
                </div>
              </MobileMockup>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="section bg-white">
        <div className="container">
          <div className="detail-intro-box text-center mx-auto mb-12">
            <h2 className="title">About {product.name}</h2>
            <div className="title-underline mx-auto"></div>
            <p className="about-text">{product.fullDescription}</p>
          </div>
          
          <div className="detail-grid">
            <div className="detail-features">
              <h3 className="detail-sidebar-title">
                <Zap className="text-primary" size={28} /> Key Features
              </h3>
              <div className="feature-list-grid">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="feature-list-item premium-card">
                    <CheckCircle2 className="text-primary feature-check" size={24} />
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="detail-sidebar">
              <div className="card premium-card sidebar-card mb-8">
                <h3 className="detail-sidebar-title">
                  <Star className="text-yellow" size={24} /> Benefits
                </h3>
                <ul className="benefit-list">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <div className="benefit-bullet"></div>
                      <span className="text-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="card premium-card sidebar-card sidebar-alt-bg">
                <h3 className="detail-sidebar-title">
                  <Shield className="text-primary" size={24} /> Ideal For
                </h3>
                <ul className="use-case-list">
                  {product.useCases.map((useCase, idx) => (
                    <li key={idx}>
                       - {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section text-center">
        <Reveal direction="up" duration={0.8} className="container">
          <h2 className="title text-white">See {product.name} in Action</h2>
          <p className="subtitle text-white-muted mx-auto">
            Schedule a personalized demo to learn how our software can streamline your operations.
          </p>
          <Link to="/contact" state={{ selectedProduct: product.name }} className="btn btn-primary mt-8 btn-large">
            {product.ctaText}
          </Link>
        </Reveal>
      </section>
    </div>
  );
};

export default ProductDetail;
