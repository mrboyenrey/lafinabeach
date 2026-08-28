import { navLinks, site } from '../data/content';
import Icon from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="navbar__brand navbar__brand--footer">
            <span className="navbar__logo">L</span>
            <span className="navbar__name">{site.name}</span>
          </a>
          <p>
            {site.tagline}. A private beachfront escape on the Philippine coast.
          </p>
          <div className="footer__social">
            <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
              <Icon name="facebook" size={18} />
            </a>
            <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
              <Icon name="instagram" size={18} />
            </a>
            <a href={site.social.twitter} aria-label="Twitter" target="_blank" rel="noreferrer">
              <Icon name="twitter" size={18} />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <ul>
            {navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li>{site.address}</li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
