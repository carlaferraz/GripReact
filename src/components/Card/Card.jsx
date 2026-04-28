import './Card.css'

function Card({ variant = 'professor', eyebrow, title, subtitle, description, meta, children }) {
  const rootClass =
    variant === 'plano'
      ? 'card-surface card-surface--plano'
      : 'card-surface'

  return (
    <article className={rootClass}>
      {eyebrow ? <p className="card-eyebrow">{eyebrow}</p> : null}
      <h2 className="card-title">{title}</h2>
      {subtitle ? <p className="card-subtitle">{subtitle}</p> : null}
      {meta ? <p className="card-meta">{meta}</p> : null}
      {description ? <p className="card-description">{description}</p> : null}
      {children}
    </article>
  )
}

export default Card
