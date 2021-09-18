import './shared/card.css'
import cx from 'classnames'

import { Card } from 'antd'

import { useEffect, useState } from 'react'
import { useGlobalState } from '../../shared/hook'
import { sortOptions } from '../../shared/const'

import { CardHeader, BarRank, Leaderboard, SortDropdown } from './shared'
import { Loader } from '../shared'

import { getChatRank } from '../../shared/service'

export function ChatRank() {
  const [globalState] = useGlobalState()
  const [totalCount, setTotalCount] = useState(0)
  const [rankers, setRankers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(0)

  async function initRankers(fileName, selectedOptionIdx) {
    setIsLoading(true)

    const rewindNumDays = sortOptions[selectedOptionIdx].value

    const { data: dailyRanks, totalCount } = await getChatRank(fileName, {
      rewindNumDays,
      length: 3,
    })

    setRankers(dailyRanks)
    setTotalCount(totalCount)
    setIsLoading(false)
  }

  useEffect(() => {
    if (globalState.fileName) {
      initRankers(globalState.fileName, selectedOptionIdx)
    }
  }, [globalState.fileName, selectedOptionIdx])

  return (
    <Card className="card card-short">
      <CardHeader
        {...{
          title: '채팅 랭킹',
          sortOptions,
          selctedIndex: selectedOptionIdx,
          onChangeSort: (_option, index) => setSelectedOptionIdx(index),
        }}
      />
      <div className={cx('card-content', { loading: isLoading })}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <BarRank {...{ rankers, totalCount }} />
            <Leaderboard
              {...{
                rankers,
                details: [{ key: 'count', postfix: '회' }],
              }}
            />
          </>
        )}
      </div>
    </Card>
  )
}
