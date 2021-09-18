import './shared/card.css'
import cx from 'classnames'

import { Card } from 'antd'

import { useEffect, useState } from 'react'
import { useGlobalState } from '../../shared/hook'
import { sortOptions } from '../../shared/const'

import { CardHeader, PieChart, Leaderboard } from './shared'
import { Loader } from '../shared'

export function KeywordRank() {
  const [globalState] = useGlobalState()
  const [totalCount, setTotalCount] = useState(0)
  const [rankers, setRankers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(0)

  return (
    <Card className="card card-long">
      <CardHeader
        {...{
          title: '키워드 랭킹',
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
            <PieChart />
            <Leaderboard
              {...{
                rankers,
                details: [
                  { key: '', postfix: '%' },
                  { key: 'count', postfix: '회' },
                ],
              }}
            />
          </>
        )}
      </div>
    </Card>
  )
}
