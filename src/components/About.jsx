import { intro, hotel, guestTypes } from '@/data/content'
import { featured } from '@/data/images'
import Icon from './Icons'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__pattern" aria-hidden="true" />
      <div className="container">
        <SectionHeader eyebrow="Welcome" title="Your Home Away From Home" />

        <div className="about__grid">
          <div className="about__main">
            <p className="lead">{intro.lead}</p>
            <p>{intro.location}</p>
            <p>{intro.welcome}</p>
            <div className="about__image">
              <img
                src={featured.about}
                alt="Gateway Hotel & Suites reception and check-in area"
                loading="lazy"
              />
              <span className="about__image-accent" aria-hidden="true" />
            </div>
          </div>

          <aside className="about__card">
            <h3>Perfect For</h3>
            <ul className="check-list">
              {guestTypes.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </ul>
            <div className="about__location">
              <span className="about__location-label">
                <Icon name="location" /> Address
              </span>
              <address>
                <a href={hotel.mapUrl} target="_blank" rel="noopener noreferrer">
                  {hotel.address}<br />
                  {hotel.city}, {hotel.province}
                </a>
              </address>
            </div>
            <div className="about__contact">
              <span className="about__location-label">
                <Icon name="phone" /> Contact
              </span>
              <p>
                <a href={hotel.phoneHref}>{hotel.phone}</a>
              </p>
              <p>
                <a href={`mailto:${hotel.email}`} className="email-link">{hotel.email}</a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
