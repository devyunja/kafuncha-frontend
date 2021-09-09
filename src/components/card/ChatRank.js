import './shared/card.css'

import { useEffect, useState } from 'react'
import { useGlobalState } from '../../shared/hook'

import { CardHeader, BarRank, Leaderboard } from './shared'

import { getDailyRank, getDailyChatCount } from '../../shared/service'

// TODO: temp
const sortOptions = [
  { label: '일간', value: 'day' },
  { label: '주간', value: 'week' },
  { label: '월간', value: 'month' },
]

export function ChatRank() {
  const [globalState] = useGlobalState()
  const [totalMsgCount, setTotalMsgCount] = useState(0)
  const [date, setDate] = useState(null)
  const [rankers, setRankers] = useState([])

  function handleChangeSortOption(sortOption) {
    console.log('handleChangeSortOption: ', sortOption)
  }

  async function initRankers(fileName) {
    // 오늘 날짜 파싱
    const now = new Date()
    let today = now.toISOString().split('T')[0]

    // 일별 카운트 호출
    const dailyCounts = await getDailyChatCount()

    const matchedDailyCount = dailyCounts.find(
      dailyCount => dailyCount.date === today
    )
    const count = matchedDailyCount?.count ?? dailyCounts[0].count

    // 오늘 날짜 카운트가 없으면 첫 번째 날짜 파싱
    if (!matchedDailyCount) {
      today = dailyCounts[0].date
    }

    const dailyRanks = await getDailyRank(fileName)

    if (dailyRanks[today]) {
      setTotalMsgCount(count)
      setDate(today)
      setRankers(dailyRanks[today].slice(0, 3))
    }
  }

  useEffect(() => {
    if (globalState.fileName) {
      initRankers(globalState.fileName)
    }
  }, [globalState.fileName])

  console.log('JSH: date', date)

  return (
    <div className="card-short">
      <CardHeader
        {...{
          title: '채팅 랭킹',
          selctedIndex: 0,
          sortOptions,
          onChangeSort: handleChangeSortOption,
        }}
      />
      <BarRank {...{ rankers, totalCount: totalMsgCount }} />
      <Leaderboard
        {...{
          rankers,
          details: [{ key: 'messageCount', postfix: '회' }],
        }}
      />
    </div>
  )
}
