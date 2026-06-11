import { attractions, hotel } from '@/data/content'
import Icon from './Icons'
import SectionHeader from './SectionHeader'

export default function Attractions() {
  return (
    <section id="explore" className="section explore">
      <div className="section__pattern section__pattern--teal" aria-hidden="true" />
      <div className="container">
        <SectionHeader
          center
          eyebrow="Discover Clarenville & Beyond"
          title={`The ${hotel.region}`}
          intro="Clarenville serves as the gateway to some of Newfoundland's most spectacular natural attractions. Guests enjoy easy access to trails, waterfront destinations, national parks, and historic coastal communities."
        />

        <div className="attractions-grid">
          {attractions.map((place) => (
            <article key={place.name} className="attraction-card">
              <div className="attraction-card__header">
                <span className="attraction-card__icon">
                  <Icon name={place.icon} />
                </span>
                <h3>{place.name}</h3>
              </div>
              <p>{place.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
