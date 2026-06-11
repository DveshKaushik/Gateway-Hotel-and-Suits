import { hotel } from '@/data/content'
import Icon from './Icons'
import SectionHeader from './SectionHeader'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeader
          center
          eyebrow="Get In Touch"
          title="Contact Us"
          intro="Ready to book your stay or have questions? Our guest services team is here to help."
        />

        <div className="contact__grid">
          <div className="contact__card">
            <span className="contact__icon"><Icon name="location" /></span>
            <h3>Address</h3>
            <address>
              <a href={hotel.mapUrl} target="_blank" rel="noopener noreferrer">
                {hotel.address}<br />
                {hotel.city}, {hotel.province}
              </a>
            </address>
            <a
              href={hotel.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary contact__map-btn"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="contact__card">
            <span className="contact__icon"><Icon name="phone" /></span>
            <h3>Phone</h3>
            <p>
              <a href={hotel.phoneHref} className="contact__link">
                {hotel.phone}
              </a>
            </p>
            <p className="contact__hint">Call us for reservations and inquiries.</p>
          </div>

          <div className="contact__card">
            <span className="contact__icon"><Icon name="email" /></span>
            <h3>Email</h3>
            <p>
              <a href={`mailto:${hotel.email}`} className="contact__link email-link">
                {hotel.email}
              </a>
            </p>
            <p className="contact__hint">We&apos;ll respond as soon as possible.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
