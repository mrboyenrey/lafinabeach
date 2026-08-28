import { rooms } from '../data/content';
import Icon from './Icons';

export default function Rooms() {
  return (
    <section id="rooms" className="section rooms">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Stay With Us</p>
          <h2 className="section__title">Rooms &amp; Suites</h2>
          <p className="section__subtitle">
            Choose from thoughtfully designed spaces — from cozy ocean rooms to
            a private honeymoon villa.
          </p>
        </div>

        <div className="rooms__grid">
          {rooms.map((room) => (
            <article key={room.id} className="room-card">
              <div className="room-card__media">
                <img src={room.image} alt={room.name} loading="lazy" />
                <div className="room-card__price">
                  <span>from</span>
                  <strong>${room.price}</strong>
                  <small>/ night</small>
                </div>
              </div>

              <div className="room-card__body">
                <h3 className="room-card__name">{room.name}</h3>
                <p className="room-card__desc">{room.description}</p>

                <div className="room-card__meta">
                  <span>{room.size}</span>
                  <span>{room.guests} Guests</span>
                  <span>{room.bed}</span>
                </div>

                <div className="room-card__tags">
                  {room.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href="#contact" className="room-card__link">
                  Reserve this room
                  <Icon name="spa" size={16} className="hidden" />
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
