import { amenities } from '../data/content';
import Icon from './Icons';

export default function Amenities() {
  return (
    <section id="amenities" className="section amenities">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Resort Facilities</p>
          <h2 className="section__title">Amenities &amp; Experiences</h2>
          <p className="section__subtitle">
            Everything you need for an unforgettable seaside getaway is right
            here.
          </p>
        </div>

        <div className="amenities__grid">
          {amenities.map((item) => (
            <div key={item.title} className="amenity-card">
              <div className="amenity-card__icon">
                <Icon name={item.icon} size={28} />
              </div>
              <h3 className="amenity-card__title">{item.title}</h3>
              <p className="amenity-card__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
