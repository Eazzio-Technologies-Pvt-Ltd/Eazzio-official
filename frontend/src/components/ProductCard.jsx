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
      <div className="product-card-footer">
        <Link to={`/products/${product.slug}`} className="btn btn-outline w-full view-details-btn">
          View Details <ArrowRight size={18} className="arrow-icon" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
