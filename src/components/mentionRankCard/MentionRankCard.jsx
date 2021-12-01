import { useEffect, useState } from 'react'
import RankMember from '../rankMember/RankMember'
import BarChart from '../barChart/BarChart'
import styles from './MentionRankCard.module.css'
import CardHeader from '../shared/CardHeader'
import { SORT_TYPE } from '../../common/const'
import { getData } from '../../services/MentionRankDataPipeService'

export default function MentionRankCard() {
  const [loaded, setLoaded] = useState(false)
  const [mentionData, setMentionData] = useState({
    [SORT_TYPE.DAILY]: [],
    [SORT_TYPE.WEEKLY]: [],
    [SORT_TYPE.MONTHLY]: [],
  })
  const [sortType, setSortType] = useState(SORT_TYPE.DAILY)
  const totalCountObj = mentionData[sortType].reduce((acc, curr) => {
    if (!acc.totalCount) {
      acc.totalCount = curr.count
    } else {
      acc.totalCount += curr.count
    }
    return acc
  }, {})
  const totalCount = totalCountObj.totalCount

  useEffect(() => {
    fetch(
      'https://programming.coffee/mention/c5111957-2d29-4914-9add-393206723900-1485868656441256377.csv'
    )
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(data_1 => {
        setMentionData({
          [SORT_TYPE.DAILY]: getData(data_1, 1),
          [SORT_TYPE.WEEKLY]: getData(data_1, 7),
          [SORT_TYPE.MONTHLY]: getData(data_1, 30),
        })

        setLoaded(true)

        return
      })
  }, [])

  return (
    <div>
      <CardHeader
        onChange={val => {
          setSortType(val)
        }}
        title={'멘션 랭킹'}
      />

      <div className={styles.graphBar}>
        <BarChart wholeCount={totalCount} data={mentionData[sortType]} />
      </div>
      {loaded === true ? (
        <RankMember
          rankData={mentionData[sortType]}
          detail={[{ key: 'count', postFix: '회' }]}
        />
      ) : (
        <div>로드 중</div>
      )}
    </div>
  )
}
