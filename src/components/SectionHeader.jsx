import SectionDivider from './SectionDivider'

export default function SectionHeader({ eyebrow, title, intro, center = false }) {
  return (
    <div className={`section__header ${center ? 'section__header--center' : ''}`}>
      <SectionDivider variant="dots" />
      {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {intro && <p className="section__intro">{intro}</p>}
    </div>
  )
}
