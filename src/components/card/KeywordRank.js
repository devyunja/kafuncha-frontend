import './shared/card.css'
import { CardHeader, PieChart, Leaderboard } from './shared'

export function KeywordRank() {
  return (
    <div className="card-long">
      <CardHeader {...{ title: '키워드 랭킹' }} />
      <PieChart />
      <Leaderboard />
    </div>
  )
}
