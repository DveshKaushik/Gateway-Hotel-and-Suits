export default function SectionDivider({ variant = 'wave', flip = false, className = '' }) {
  if (variant === 'wave') {
    return (
      <div className={`divider divider--wave ${flip ? 'divider--flip' : ''} ${className}`} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,90 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    )
  }

  return (
    <div className={`divider divider--dots ${className}`} aria-hidden="true">
      <span /><span /><span />
    </div>
  )
}
