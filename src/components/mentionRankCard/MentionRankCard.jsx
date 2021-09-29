import { useEffect, useState } from 'react'
import RankMember from '../rankMember/RankMember'

// 오늘 2021-09-26
// 일주일치 뽑아

// const arr = [
//   { date: '', user: '방구석코딩', mentionCount: 1 },
//   { date: '2021-09-08', user: '방구석코딩', mentionCount: 1 },
//   { date: '2021-09-07', user: '방구석코딩', mentionCount: 1 },
//   { date: '2021-09-06', user: '방구석코딩', mentionCount: 1 },
//   { date: '2021-09-05', user: '방구석코딩', mentionCount: 1 },
//   { date: '2021-09-04', user: '방구석코딩', mentionCount: 1 },
//   { date: '2021-09-03', user: '방구석코딩', mentionCount: 1 },
// ]
// const arr2 = [{ user: 'xxx', count: 0, rank: 1 }]
// const totalCount = 0

export default function MentionRankCard() {
  const [daily, setDaily] = useState([])
  const [weekly, setWeekly] = useState([])
  const [monthly, setMonthly] = useState([])

  const today = new Date()

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
        setDaily(getData(data_1, 1))
        setWeekly(getData(data_1, 7))
        setMonthly(getData(data_1, 30))
        return
      })
  }, [])
  console.log('daily', daily)
  console.log('weekly', weekly)
  console.log('monthly', monthly)
  function getData(data, days) {
    const rewindDaysTsp = today.getTime() - (days - 1) * 24 * 60 * 60 * 1000

    const todayString = dateTimestampToString(today)
    const dateKey =
      data[0].date === todayString
        ? dateTimestampToString(rewindDaysTsp) // 40일 전 날짜 스트링, 8/18
        : data[0].date // data 최상단 요소의 날짜 스트링, 9/9
    const datekeyTsp = dateStringToTimestamp(dateKey) - 0
    const from = datekeyTsp - (days - 1) * 24 * 60 * 60 * 1000
    const newData = data.filter(ele => dateStringToTimestamp(ele.date) >= from)
    // 데이터 날짜가 9/9로부터 -7일까지 나오도록
    // 9.3 =< ele.data =< 9.9
    const reducedData = newData.reduce(
      (acc, curr) => {
        if (acc.user === curr.user) {
          acc.count += curr.mentionCount
        } else if (acc.user !== curr.user) {
          const idx = acc.findIndex(ele => ele.user === curr.user)
          if (idx >= 0) {
            acc[idx].count += curr.mentionCount
          } else if (idx === -1) {
            acc.push({ user: curr.user, count: curr.mentionCount })
          }
        }
        return acc
      },
      [{ user: '', count: 0 }]
    )
    const slicedData = reducedData.slice(1)

    const sortedData = slicedData.sort((a, b) => {
      if (a.count < b.count) {
        return 1
      }
      if (a.count > b.count) {
        return -1
      }
      if (a.count === b.count) {
        return 0
      }
    })

    return sortedData
  }
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

  return (
    <>
      <RankMember
        rankData={weekly !== [] && weekly}
        detail={[{ key: 'mentionCount', postFix: '회' }]}
      />
    </>
  )
}
