import { accommodations, kitchenetteGuests } from '@/data/content'
import { featured } from '@/data/images'
import Icon from './Icons'
import SectionHeader from './SectionHeader'

export default function Accommodations() {
  return (
    <section id="accommodations" className="section accommodations">
      <div className="container">
        <SectionHeader
          center
          eyebrow="Stay With Us"
          title={accommodations.title}
          intro={accommodations.description}
        />

        <div className="room-cards">
          <article className="room-card">
            <div className="room-card__visual">
              <img src={featured.guestRoom} alt="Modern guest room with queen bed" loading="lazy" />
            </div>
            <div className="room-card__body">
              <span className="room-card__icon"><Icon name="bed" /></span>
              <h3>Guest Rooms</h3>
              <p>
                Comfortable, modern rooms designed for restful short stays — ideal for
                highway travelers and weekend visitors exploring the east coast.
              </p>
            </div>
          </article>

          <article className="room-card room-card--featured">
            <div className="room-card__badge">Most Popular</div>
            <div className="room-card__visual">
              <img src={featured.suite} alt="Kitchenette suite with living area" loading="lazy" />
            </div>
            <div className="room-card__body">
              <span className="room-card__icon"><Icon name="kitchen" /></span>
              <h3>Kitchenette Suites</h3>
              <p>
                Spacious apartment-style suites with practical kitchen amenities — perfect
                for extended stays, families, and guests who value flexibility.
              </p>
            </div>
          </article>
        </div>

        <div className="kitchenette">
          <div className="kitchenette__glow" aria-hidden="true" />
          <h3>Our Kitchenette Suites Are Particularly Popular With</h3>
          <ul className="kitchenette__list">
            {kitchenetteGuests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="kitchenette__closing">{accommodations.closing}</p>
        </div>
      </div>
    </section>
  )
}
