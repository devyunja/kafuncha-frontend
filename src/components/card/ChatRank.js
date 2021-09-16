import './shared/card.css'

import { useEffect, useState } from 'react'
import { useGlobalState } from '../../shared/hook'

import { CardHeader, BarRank, Leaderboard } from './shared'

import { Loader } from '../shared'
import { getDailyRank, getDailyChatCount } from '../../shared/service'

const sortOptions = [
  { value: 0, label: '하루' },
  { value: 7, label: '7일' },
  { value: 30, label: '30일' },
]

export function ChatRank() {
  const [globalState] = useGlobalState()
  const [totalMsgCount, setTotalMsgCount] = useState(0)
  const [date, setDate] = useState(null)
  const [rankers, setRankers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(0)

  async function initRankers(fileName, selectedOptionIdx) {
    setIsLoading(true)

    const sortDay = sortOptions[selectedOptionIdx].value

    const { data: dailyRanks, totalCount } = await getDailyRank(
      fileName,
      sortDay
    )
    console.log('dailyRanks', dailyRanks, totalCount)
    // if (sortDay === 0 && dailyRanks?.[latestDate]) {
    //   setTotalMsgCount(count)
    //   setDate(latestDate)
    //   setRankers(dailyRanks[latestDate].slice(0, 3))
    // } else if (sortDay > 0) {
    //   console.log('dailyRanks', dailyRanks)
    //   console.log('latestDate', latestDate)
    // }

    setIsLoading(false)
  }

  function handleChangeSortOption(option, index) {
    setSelectedOptionIdx(index)
  }

  useEffect(() => {
    if (globalState.fileName) {
      initRankers(globalState.fileName, selectedOptionIdx)
    }
  }, [globalState.fileName, selectedOptionIdx])

  return (
    <div className="card-short">
      <CardHeader
        {...{
          title: '채팅 랭킹',
          sortOptions,
          selctedIndex: selectedOptionIdx,
          onChangeSort: handleChangeSortOption,
        }}
      />
      <div className={`card-content ${isLoading ? 'loading' : ''}`}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <BarRank {...{ rankers, totalCount: totalMsgCount }} />
            <Leaderboard
              {...{
                rankers,
                details: [{ key: 'messageCount', postfix: '회' }],
              }}
            />
          </>
        )}
      </div>
    </div>
  )
}
