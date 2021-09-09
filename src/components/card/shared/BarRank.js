import './card.css'

export function BarRank({ rankers = [], totalCount }) {
  return (
    <ul className="bar-list">
      {rankers.map(ranker => (
        <li key={ranker.name} className="bar-item">
          <div className="bar-name">{ranker.name}</div>
          <div className="bar-bg-line">
            <span
              className="bar-line"
              style={{
                width: `${(ranker.messageCount / totalCount) * 100}%`,
              }}></span>
          </div>
        </li>
      ))}
    </ul>
  )
}
