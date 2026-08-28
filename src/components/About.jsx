export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__media">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80"
            alt="Resort infinity pool overlooking the ocean"
            loading="lazy"
          />
          <div className="about__badge">
            <strong>15+</strong>
            <span>Years of hospitality</span>
          </div>
        </div>

        <div className="about__body">
          <p className="section__eyebrow">About Lafina</p>
          <h2 className="section__title">
            A Secluded Haven on the Philippine Coast
          </h2>
          <p className="about__text">
            Nestled along a private cove in Batangas, Lafina Beach Resort blends
            barefoot luxury with the warmth of Filipino hospitality. Wake up to
            the rhythm of the waves, spend your days under swaying palms, and
            end each evening with golden sunsets over the horizon.
          </p>
          <ul className="about__features">
            <li>Direct access to a private white-sand beach</li>
            <li>Sustainable, eco-conscious resort design</li>
            <li>Curated island experiences &amp; water adventures</li>
          </ul>
          <a href="#gallery" className="btn btn--outline">
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
}
