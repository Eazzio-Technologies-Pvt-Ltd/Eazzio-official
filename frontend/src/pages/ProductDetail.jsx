import { useParams, Navigate, Link } from 'react-router-dom';
import { products } from '../data/products';
import { CheckCircle2, Star, ArrowRight, Shield, Zap } from 'lucide-react';
import * as Icons from 'lucide-react';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <Navigate to="/products" />;
  }
  
  const IconComponent = Icons[product.iconName] || Icons.Box;

  return (
    <div className="product-detail-page">
      <header className="page-hero detail-hero">
        <div className="container text-center">
          <div className="detail-icon-wrapper mx-auto mb-6">
             <IconComponent size={48} className="text-white" />
          </div>
          <span className="product-category-badge mb-4 mx-auto">{product.category}</span>
          <h1 className="hero-title text-white">{product.name}</h1>
          <p className="hero-subtitle text-white-muted mx-auto">
            {product.tagline}
          </p>
          <div className="flex justify-center mt-6 gap-4 flex-wrap sm-flex-col">
            <Link to="/contact" className="btn btn-primary btn-large">
              Request Demo <ArrowRight size={20} className="ml-2" />
            </Link>
            {product.externalLink && product.externalLink !== "Mobile App" && (
              <a href={product.externalLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-large">
                Visit Website
              </a>
            )}
            {product.externalLink === "Mobile App" && (
              <span className="btn btn-outline-white btn-large" style={{ opacity: 0.8, cursor: 'default' }}>
                Available on Mobile App
              </span>
            )}
          </div>
        </div>
      </header>

      <section className="section bg-white">
        <div className="container">
          <div className="detail-intro-box text-center mx-auto mb-12">
            <h2 className="title">About {product.name}</h2>
            <div className="title-underline mx-auto"></div>
            <p className="about-text">{product.description}</p>
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
        <div className="container">
          <h2 className="title text-white">See {product.name} in Action</h2>
          <p className="subtitle text-white-muted mx-auto">
            Schedule a personalized demo to learn how our software can streamline your operations.
          </p>
          <Link to="/contact" className="btn btn-primary mt-8 btn-large">
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
