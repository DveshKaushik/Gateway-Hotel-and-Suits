import { highlights } from '@/data/content'
import Icon from './Icons'

export default function Highlights() {
  return (
    <section className="highlights" aria-label="Hotel highlights">
      <div className="container highlights__grid">
        {highlights.map((item) => (
          <article key={item.label} className="highlights__item">
            <span className="highlights__icon">
              <Icon name={item.icon} />
            </span>
            <div>
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
