import { useState } from 'react';
import { site } from '../data/content';

const initialForm = {
  name: '',
  email: '',
  checkIn: '',
  checkOut: '',
  guests: '2',
  roomType: 'Deluxe Ocean Room',
  message: '',
};

export default function Booking() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (name) => ({
    name,
    value: form[name],
    onChange: handleChange,
  });

  return (
    <section id="contact" className="section booking">
      <div className="container booking__grid">
        <div className="booking__info">
          <p className="section__eyebrow">Reservations</p>
          <h2 className="section__title">Book Your Stay</h2>
          <p className="booking__text">
            Tell us your travel dates and our team will get back to you within
            24 hours to confirm availability.
          </p>

          <ul className="booking__contacts">
            <li>
              <strong>Phone</strong>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            </li>
            <li>
              <strong>Email</strong>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <strong>Address</strong>
              <span>{site.address}</span>
            </li>
          </ul>
        </div>

        <div className="booking__card">
          {submitted ? (
            <div className="booking__success" role="status">
              <div className="booking__success-icon">✓</div>
              <h3>Request Received!</h3>
              <p>
                Thank you, <strong>{form.name}</strong>. We&apos;ve received your
                inquiry for <strong>{form.roomType}</strong> and will contact you
                at <strong>{form.email}</strong> shortly.
              </p>
              <button
                type="button"
                className="btn btn--outline"
                onClick={() => {
                  setForm(initialForm);
                  setSubmitted(false);
                }}
              >
                Make another request
              </button>
            </div>
          ) : (
            <form className="booking__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Full Name
                  <input
                    type="text"
                    required
                    placeholder="Juan Dela Cruz"
                    {...update('name')}
                  />
                </label>
                <label>
                  Email Address
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    {...update('email')}
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Check-in
                  <input type="date" required {...update('checkIn')} />
                </label>
                <label>
                  Check-out
                  <input type="date" required {...update('checkOut')} />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Guests
                  <select {...update('guests')}>
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Room Type
                  <select {...update('roomType')}>
                    <option>Deluxe Ocean Room</option>
                    <option>Beachfront Suite</option>
                    <option>Garden Villa</option>
                    <option>Family Suite</option>
                    <option>Honeymoon Villa</option>
                    <option>Penthouse Suite</option>
                  </select>
                </label>
              </div>

              <label>
                Special Requests
                <textarea
                  rows={3}
                  placeholder="Airport transfer, celebrations, dietary needs…"
                  {...update('message')}
                />
              </label>

              <button type="submit" className="btn btn--primary booking__submit">
                Request Reservation
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
