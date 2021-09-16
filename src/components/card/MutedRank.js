import './shared/card.css'

import { useState, useEffect } from 'react'
import { useGlobalState } from '../../shared/hook'

import { CardHeader, Leaderboard } from './shared'

import { Loader } from '../shared'
import { getPrune } from '../../shared/service'

export function MutedRank() {
  const [rankers, setRankers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [globalState, setGlobalState] = useGlobalState()

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
    <div className="card-short">
      <CardHeader
        {...{
          title: '잠수 인원',
        }}
      />
      <div className={`card-content ${isLoading ? 'loading' : ''}`}>
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
    </div>
  )
}
