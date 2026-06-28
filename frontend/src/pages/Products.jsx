import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => {
  return (
    <div className="products-page">
      <Helmet>
        <title>Products | Eazzio Technologies</title>
        <meta name="description" content="Explore our comprehensive suite of software solutions designed to optimize your business operations." />
      </Helmet>

      <header className="page-hero text-center">
        <div className="container">
          <h1 className="hero-title text-white">Our Products</h1>
          <p className="hero-subtitle text-white-muted mx-auto">
            Explore our comprehensive suite of software solutions designed to optimize every aspect of your business operations.
          </p>
        </div>
      </header>

      <section className="section bg-light min-h-screen">
        <div className="container">
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

export default Products;
