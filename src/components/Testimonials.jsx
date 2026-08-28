import { testimonials } from '../data/content';
import Icon from './Icons';

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          size={16}
          className={i < count ? 'star--on' : 'star--off'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Guest Reviews</p>
          <h2 className="section__title">Loved by Travelers</h2>
          <p className="section__subtitle">
            Real words from guests who have stayed with us.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="testimonial-card">
              <Stars count={t.rating} />
              <p className="testimonial-card__text">&ldquo;{t.text}&rdquo;</p>
              <footer className="testimonial-card__author">
                <span className="testimonial-card__avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
