import { site } from '../data/content';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__content">
        <p className="hero__eyebrow">Welcome to Paradise</p>
        <h1 className="hero__title">
          Escape to <span>Lafina Beach</span>
        </h1>
        <p className="hero__subtitle">{site.tagline}</p>
        <div className="hero__actions">
          <a href="#rooms" className="btn btn--primary">
            Explore Rooms
          </a>
          <a href="#contact" className="btn btn--ghost">
            Book Your Stay
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <strong>120+</strong>
            <span>Rooms &amp; Villas</span>
          </div>
          <div className="hero__stat">
            <strong>4.9</strong>
            <span>Guest Rating</span>
          </div>
          <div className="hero__stat">
            <strong>1.2 km</strong>
            <span>Private Beach</span>
          </div>
        </div>
      </div>
      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
