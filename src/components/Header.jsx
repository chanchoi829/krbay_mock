const BagIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="4" y="11" width="20" height="15" rx="2" fill="#e6f4fb" stroke="#0095da" strokeWidth="1.5" />
    <path d="M10 11V9a4 4 0 018 0v2" stroke="#0095da" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 18h8" stroke="#0095da" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SearchIcon = ({ color = '#888' }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="8" stroke={color} strokeWidth="1.5" />
    <path d="M21 21l-4.35-4.35" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="20.5" r="1.5" fill="#333" />
    <circle cx="20" cy="20.5" r="1.5" fill="#333" />
  </svg>
);

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="#333" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="7" r="4" stroke="#333" strokeWidth="1.5" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="#333" strokeWidth="1.5" />
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#333" strokeWidth="1.5" />
  </svg>
);

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 9l6 6 6-6" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <a href="#" className="logo">
            <BagIcon />
            <span className="logo-text">KRBAY</span>
          </a>
        </div>

        <div className="header-center">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Pick Language & Search"
              className="search-input"
              aria-label="Search"
            />
            <button className="search-icon-btn" aria-label="Search">
              <SearchIcon />
            </button>
          </div>
        </div>

        <div className="header-right">
          <button className="mobile-search-btn mobile-only" aria-label="Search">
            <SearchIcon color="#333" />
          </button>
          <button className="icon-btn" aria-label="Cart">
            <span className="cart-wrapper">
              <CartIcon />
              <span className="cart-badge">0</span>
            </span>
          </button>
          <button className="icon-btn desktop-only" aria-label="Wishlist">
            <HeartIcon />
          </button>
          <button className="icon-btn desktop-only" aria-label="Account">
            <UserIcon />
          </button>
          <button className="lang-btn desktop-only">
            <GlobeIcon />
            <span>English</span>
            <ChevronDown />
          </button>
        </div>
      </div>
    </header>
  );
}
