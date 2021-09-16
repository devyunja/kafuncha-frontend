import './shared/card.css'

import { useEffect, useState } from 'react'
import { useGlobalState } from '../../shared/hook'

import { CardHeader, BarRank, Leaderboard } from './shared'

import { Loader } from '../shared'
import { getDailyMentionRank } from '../../shared/service'

export function MentionRank() {
  const [globalState] = useGlobalState()
  const [totalCount, setTotalCount] = useState(0)
  const [rankers, setRankers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function initRankers(fileName) {
    const { data: dailyMentionRanks, latestDate } = await getDailyMentionRank(
      fileName
    )

    const dayRanks = dailyMentionRanks?.[latestDate] ?? []

    if (dayRanks) {
      setTotalCount(() =>
        dayRanks.reduce((count, dayRank) => count + dayRank.count, 0)
      )
      setRankers(
        dayRanks
          .sort((a, b) => b.count - a.count)
          .slice(0, 3)
          .map((rank, index) => ({ ...rank, rank: index + 1 }))
      )
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (globalState.fileName) {
      initRankers(globalState.fileName)
    }
  }, [globalState.fileName])

  return (
    <div className="card-short">
      <CardHeader
        {...{
          title: '멘션 랭킹',
        }}
      />
      <div className={`card-content ${isLoading ? 'loading' : ''}`}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <BarRank {...{ rankers, totalCount }} />
            <Leaderboard
              {...{
                rankers,
                details: [{ key: 'mentionCount', postfix: '회' }],
              }}
            />
          </>
        )}
      </div>
    </div>
  )
}
