import { hotel } from '@/data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <h2>{hotel.name}</h2>
          <p>{hotel.tagline}</p>
        </div>

        <div className="footer__contact">
          <h3>Visit Us</h3>
          <address>
            <a href={hotel.mapUrl} target="_blank" rel="noopener noreferrer">
              {hotel.address}<br />
              {hotel.city}, {hotel.province}
            </a>
          </address>
          <p>
            <a href={hotel.phoneHref}>{hotel.phone}</a>
          </p>
          <p>
            <a href={`mailto:${hotel.email}`} className="email-link">{hotel.email}</a>
          </p>
          <p className="footer__note">
            Walking distance to restaurants, shopping, local services, and the College of
            the North Atlantic.
          </p>
        </div>

        <div className="footer__links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#accommodations">Rooms & Suites</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#explore">Explore the Area</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {year} {hotel.name}. Clarenville, Newfoundland & Labrador.</p>
        </div>
      </div>
    </footer>
  )
}
