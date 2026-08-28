import { gallery } from '../data/content';

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Moments</p>
          <h2 className="section__title">Gallery</h2>
          <p className="section__subtitle">
            A glimpse of the golden sands, crystal waters, and peaceful corners
            of Lafina.
          </p>
        </div>

        <div className="gallery__grid">
          {gallery.map((photo, i) => (
            <figure key={i} className="gallery__item">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
