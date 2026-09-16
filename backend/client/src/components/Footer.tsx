import { Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns-container">
        <div className="footer-column">
          <h4 className="footer-heading">Support</h4>
          <ul className="footer-links">
            <li><a href="#help">Help Center</a></li>
            <li><a href="#aircover">AirCover</a></li>
            <li><a href="#anti-discrimination">Anti-discrimination</a></li>
            <li><a href="#disability">Disability support</a></li>
            <li><a href="#cancellation">Cancellation options</a></li>
            <li><a href="#neighborhood">Report neighborhood concern</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Hosting</h4>
          <ul className="footer-links">
            <li><a href="#airbnb-your-home">Airbnb your home</a></li>
            <li><a href="#aircover-hosts">AirCover for Hosts</a></li>
            <li><a href="#hosting-resources">Hosting resources</a></li>
            <li><a href="#community-forum">Community forum</a></li>
            <li><a href="#hosting-responsibly">Hosting responsibly</a></li>
            <li><a href="#airbnb-friendly">Airbnb-friendly apartments</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Airbnb</h4>
          <ul className="footer-links">
            <li><a href="#newsroom">Newsroom</a></li>
            <li><a href="#new-features">New features</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#investors">Investors</a></li>
            <li><a href="#gift-cards">Gift cards</a></li>
            <li><a href="#emergency-stays">Airbnb.org emergency stays</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-left">
          <span>© 2026 Airbnb, Inc.</span>
          <span>·</span>
          <a href="#privacy">Privacy</a>
          <span>·</span>
          <a href="#terms">Terms</a>
          <span>·</span>
          <a href="#sitemap">Sitemap</a>
          <span>·</span>
          <a href="#company-details">Company details</a>
        </div>

        <div className="footer-bottom-right">
          <button className="footer-util-btn">
            <Globe size={16} />
            <span>English (US)</span>
          </button>
          <button className="footer-util-btn">
            <span>$ USD</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
