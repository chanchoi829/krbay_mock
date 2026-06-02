const BagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="4" y="11" width="20" height="15" rx="2" fill="#1a3a4a" stroke="#0095da" strokeWidth="1.5" />
    <path d="M10 11V9a4 4 0 018 0v2" stroke="#0095da" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 18h8" stroke="#0095da" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.52V6.72a4.85 4.85 0 01-1.02-.03z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-links-inner">
          <a href="#">About</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Warehouse Policy</a>
          <a href="#">Shipping Guide</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="footer-main">
        <div className="footer-main-inner">
          <div className="footer-brand">
            <BagIcon />
            <span className="footer-logo-text">KRBAY</span>
          </div>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram" className="social-link"><InstagramIcon /></a>
            <a href="#" aria-label="TikTok" className="social-link"><TikTokIcon /></a>
            <a href="#" aria-label="YouTube" className="social-link"><YouTubeIcon /></a>
            <a href="#" aria-label="Facebook" className="social-link"><FacebookIcon /></a>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <p className="footer-company">KRBAY Co., Ltd.</p>
        <div className="footer-legal-links">
          <a href="#">Privacy Policy</a>
          <span>·</span>
          <a href="#">Terms of Service</a>
          <span>·</span>
          <a href="#">Marketing Consent</a>
        </div>
        <p className="footer-biz">상호명: 케이알베이(KRBAY) ∙ 대표자: 박윤서, 유시준, 최찬</p>
        <p className="footer-biz">주소: 경기도 남양주시 별내중앙로 26, 1002동 10층 S35호 ∙ 번호: 070-8080-0688 ∙ Instagram: @krbay.official</p>
        <p className="footer-biz">사업자등록번호: 345-64-00638 ∙ Contact Email: krbayofficial@gmail.com</p>
        <p className="footer-rights">KRBAY © 2026 All rights reserved.</p>
      </div>
    </footer>
  );
}
