import './Card.css'

function Card(props) {
  return (
    <div className="card">
      <div className="corpo">
        <div className="topo-card">
          <h3>{props.name}</h3>
          <span className="nota">★ {props.nota}</span>
        </div>
        <span className="cargo">{props.subtitle}</span>
        <p>{props.description}</p>
        <div className="tags">
          {props.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <div className="rodape-card">
          <div className="stats-linha">
            {props.stats.map(s => (
              <div key={s.label} className="estat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
