import Header from './components/Header';
import SubNav from './components/SubNav';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { products } from './data/products';
import './App.css';

function PromoCarousel() {
  return (
    <div className="promo-bar">
      <div className="promo-content">
        <div className="promo-text-area">
          <p className="promo-title">Product Request Form</p>
          <p className="promo-sub">Request products you want on our platform!</p>
        </div>
        <button className="promo-btn">Shop Now</button>
      </div>
      <div className="promo-dots">
        <span className="promo-dot active" />
        <span className="promo-dot" />
        <span className="promo-dot" />
      </div>
    </div>
  );
}

function WarehouseSection() {
  return (
    <section className="warehouse-section">
      <div className="section-inner">
        <h2 className="section-heading">My Warehouse</h2>
        <div className="warehouse-card">
          <p>Sign in to manage your warehouse!</p>
          <button className="signin-btn">Sign In</button>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <SubNav />

      <section className="hero">
        <img src="/banner.png" alt="KRBAY — Worldwide K-pop Shopping" />
      </section>

      <PromoCarousel />

      <main className="products-section">
        <div className="section-inner">
          <h2 className="section-heading">Products</h2>
          <div className="products-grid">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="more-wrapper">
            <button className="more-btn">MORE ›</button>
          </div>
        </div>
      </main>

      <WarehouseSection />
      <Footer />
    </div>
  );
}
