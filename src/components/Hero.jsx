import Image from 'next/image'
import { hotel } from '@/data/content'
import { featured } from '@/data/images'
import SectionDivider from './SectionDivider'

export default function Hero() {
  return (
    <section className="hero" aria-label="Welcome">
      <Image
        className="hero__bg"
        src={featured.hero}
        alt="Gateway Hotel & Suites exterior in Clarenville, Newfoundland"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero__overlay" />
      <div className="hero__shapes" aria-hidden="true">
        <span className="hero__shape hero__shape--1" />
        <span className="hero__shape hero__shape--2" />
        <span className="hero__shape hero__shape--3" />
      </div>
      <div className="hero__content">
        <p className="hero__eyebrow">{hotel.city}, {hotel.province}</p>
        <h1>{hotel.name}</h1>
        <p className="hero__tagline">{hotel.tagline}</p>
        <div className="hero__actions">
          <a href="#accommodations" className="btn btn--primary">
            View Accommodations
          </a>
          <a href="#contact" className="btn btn--outline">
            Plan Your Stay
          </a>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <span>Discover more</span>
      </div>
      <SectionDivider variant="wave" className="hero__wave" />
    </section>
  )
}
