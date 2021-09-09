import './shared/card.css'
import { CardHeader, BarRank, Leaderboard } from './shared'

export function MentionRank() {
  return (
    <div className="card-short">
      <CardHeader />
      <BarRank />
      <Leaderboard />
    </div>
  )
}
