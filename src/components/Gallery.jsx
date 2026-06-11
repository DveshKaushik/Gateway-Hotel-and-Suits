'use client'

import { useState } from 'react'
import { gallery } from '@/data/images'
import SectionHeader from './SectionHeader'

const categories = ['All', ...new Set(gallery.map((img) => img.category))]

export default function Gallery() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? gallery
    : gallery.filter((img) => img.category === active)

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <SectionHeader
          center
          eyebrow="Photo Gallery"
          title="See Our Hotel"
          intro="From our welcoming lobby and reception to thoughtfully designed guest rooms, kitchenette suites, and on-site amenities — explore what awaits you at Gateway Hotel & Suites."
        />

        <div className="gallery__filters" role="tablist" aria-label="Filter gallery">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active === cat}
              className={`gallery__filter ${active === cat ? 'gallery__filter--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          {filtered.map((image, index) => (
            <figure
              key={image.src}
              className={`gallery__item ${index === 0 && active === 'All' ? 'gallery__item--featured' : ''}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>
                <span className="gallery__category">{image.category}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
