// import RankMember from '../rankMember/RankMember'

import { useEffect } from 'react'

export default function MentionRankCard() {
  const today = new Date()
  const todayString = dateTimestampToString(today)
  let daily = []

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
        // const weekAgoString = weekAgo()
        console.log(data_1)
        const weekAgoString = '2021-09-01'
        const todayTimestamp = dateStringToTimestamp(todayString)
        const firstEle = data_1[0]

        data_1.some(ele => {
          if (dateStringToTimestamp(firstEle.date) < dateStringToTimestamp(weekAgoString)) {
            console.log('No data')
            return true
          } else if (ele.date === weekAgoString) {
            return true
          } else {
            daily.push(ele)
          }
        })
        return daily
      })
      .then((data_2)=>{
        console.log('data this', data_2)
      })

  }, [])

  function dateStringToTimestamp(str) {
    var y = str.substr(0, 4)
    var m = str.substr(5, 2)
    var d = str.substr(8, 2)
    return new Date(`${y}-${m}-${d}`)
  }

  function dateTimestampToString(timestamp) {
    //날짜 String으로 추출

    const date = new Date(timestamp)
    const y = date.getFullYear()
    const m = ('0' + (1 + date.getMonth())).slice(-2)
    const d = ('0' + date.getDate()).slice(-2)

    let resultDate = `${y}-${m}-${d}`
    return resultDate
  }

  function weekAgo() {
    const weekAgoTimestamp = today.getTime() - 6 * 24 * 60 * 60 * 1000
    const weekAgoString = dateTimestampToString(weekAgoTimestamp)
    return weekAgoString
  }
  return (
    <>
      {/* <RankMember
        data={data}
        detail={[{ key: 'messageCount', postFix: '회' }]}
      /> */}
    </>
  )
}
