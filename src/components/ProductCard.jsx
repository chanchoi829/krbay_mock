const HeartOutline = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-img" loading="lazy" />
        <span className="krbay-badge">KRBAY</span>
        <button className="wishlist-btn" aria-label="Add to wishlist">
          <HeartOutline />
        </button>
      </div>
      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
