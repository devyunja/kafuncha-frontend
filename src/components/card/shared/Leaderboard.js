import './card.css'

export function Leaderboard({ rankers = [], details }) {
  return (
    <ul className="leaderboard-list">
      {rankers.map(ranker => (
        <li key={ranker.user} className="leaderboard-item">
          <span className="leaderboard-rank">{ranker.rank}위</span>
          <span className="leaderboard-name">{ranker.user}</span>
          {details.map(({ key, postfix }) => (
            <span
              key={`${ranker[key]}${postfix}`}
              className="leaderboard-detail">
              {ranker[key]}
              {postfix}
            </span>
          ))}
        </li>
      ))}
    </ul>
  )
}
