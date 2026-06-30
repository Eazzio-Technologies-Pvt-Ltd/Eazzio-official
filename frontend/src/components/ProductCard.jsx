import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const IconComponent = Icons[product.icon] || Icons.Box;

  return (
    <div className="card product-card">
      <div className="product-card-header">
        <div className="product-icon-wrapper">
          <IconComponent size={28} className="product-icon" />
        </div>
      </div>
      <div className="product-card-body">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.shortDescription}</p>
        
        <div className="product-chips">
          {product.features.slice(0, 3).map((feature, idx) => (
            <span key={idx} className="feature-chip">
              <CheckCircle2 size={12} className="chip-icon" /> {feature}
            </span>
          ))}
        </div>
      </div>
      <div className="product-card-footer flex gap-4">
        <Link 
          to={`/products/${product.slug}`} 
          className="btn btn-outline flex-grow view-details-btn"
        >
          View Details <ArrowRight size={18} className="arrow-icon" />
        </Link>
        {product.externalLink && product.externalLink !== "Mobile App" ? (
          <a 
            href={product.externalLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary flex-grow visit-website-btn"
          >
            Visit Web
          </a>
        ) : (
          <span 
            className="btn btn-outline flex-grow app-only-btn" 
            style={{ 
              opacity: 0.65, 
              cursor: 'default', 
              backgroundColor: '#f1f5f9', 
              borderColor: '#e2e8f0', 
              color: '#64748b' 
            }}
          >
            App Only
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
