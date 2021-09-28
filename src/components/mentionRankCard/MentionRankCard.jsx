import { useEffect } from 'react'

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
  const today = new Date()

  // let daily = []
  // let weekly = []
  // let monthly = []

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
        getData(data_1, 40)
      })
  }, [])
  function getData(data, days) {
    const rewindDaysTsp = today.getTime() - (days - 1) * 24 * 60 * 60 * 1000
    console.log('rewindDay', dateTimestampToString(rewindDaysTsp))
    const todayString = dateTimestampToString(today)
    const dateKey =
      data[0].date === todayString
        ? dateTimestampToString(rewindDaysTsp) // 40일 전 날짜 스트링, 8/18
        : data[0].date // data 최상단 요소의 날짜 스트링, 9/9
    console.log('real dateKey', dateKey)
    console.log('data', data)

    const newData = data.filter(ele => ele.date <= dateKey)

    console.log(newData)
    return newData
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

  // function weekAgo() {
  //   const weekAgoTimestamp = today.getTime() - 6 * 24 * 60 * 60 * 1000
  //   const weekAgoString = dateTimestampToString(weekAgoTimestamp)
  //   return weekAgoString
  // }

  // function monthAgo() {
  //   const monthAgoTimestamp = today.getTime() - 29 * 24 * 60 * 60 * 1000
  //   const monthAgoString = dateTimestampToString(monthAgoTimestamp)
  //   return monthAgoString
  // }
  return (
    <>
      {/* <RankMember
        data={data}
        detail={[{ key: 'messageCount', postFix: '회' }]}
      /> */}
    </>
  )
}
