import './shared/card.css'
import cx from 'classnames'

import { Card } from 'antd'

import { useState, useEffect } from 'react'
import { useGlobalState } from '../../shared/hook'
import { sortOptions } from '../../shared/const'

import { CardHeader, Leaderboard } from './shared'
import { Loader } from '../shared'

import { getPrune } from '../../shared/service'

export function MutedRank() {
  const [globalState] = useGlobalState()
  const [totalCount, setTotalCount] = useState(0)
  const [rankers, setRankers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(0)

  async function init() {
    const pruneRanks = await getPrune(globalState.fileName)
    setRankers(
      pruneRanks.map((rank, index) => ({
        ...rank,
        rank: index + 1,
        lastDate: rank.lastShowDate.substring(2).split('-').join('/'),
      }))
    )
    setIsLoading(false)
  }

  useEffect(() => {
    if (globalState.fileName) {
      init()
    }
  }, [globalState.fileName])

  return (
    <Card className="card card-short">
      <CardHeader
        {...{
          title: '잠수 인원',
          sortOptions,
          selctedIndex: selectedOptionIdx,
          onChangeSort: (_option, index) => setSelectedOptionIdx(index),
        }}
      />
      <div className={cx('card-content', { loading: isLoading })}>
        {isLoading ? (
          <Loader />
        ) : (
          <Leaderboard
            {...{
              rankers,
              details: [{ key: 'lastDate' }],
            }}
          />
        )}
      </div>
    </Card>
  )
}
