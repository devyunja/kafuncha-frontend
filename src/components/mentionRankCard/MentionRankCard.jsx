// import RankMember from '../rankMember/RankMember'

import { useEffect } from 'react'

export default function MentionRankCard() {
  const daily = []
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
        console.log('data_1', data_1)
        console.log('daily', daily)
      })
  }, [])

  return (
    <>
      {/* <RankMember
        data={data}
        detail={[{ key: 'messageCount', postFix: '회' }]}
      /> */}
    </>
  )
}
