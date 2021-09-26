import { useEffect } from 'react'

export default function MentionRankCard() {
  const today = new Date()

  let daily = []
  let weekly = []

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
        console.log(data_1)

        const weekAgoString = weekAgo()
        const todayString = dateTimestampToString(today)
        const todayTimestamp = dateStringToTimestamp(todayString)

        const firstEle = data_1[0]

        data_1.map(ele => {
          if (ele.date === todayString) {
            daily.push(ele)
          }
        })

        data_1.some(ele => {
          if (
            dateStringToTimestamp(firstEle.date) <
            dateStringToTimestamp(weekAgoString)
          ) {
            console.log('No data')
            return true
          } else if (ele.date === weekAgoString) {
            return true
          } else {
            weekly.push(ele)
          }
        })
        console.log('daily', daily)
        console.log('weekly', weekly)
        // console.log('daily', daily)

        return daily, weekly
      })
      .then(data_2 => {
        const data = data_2.reduce(
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
        const result = data.slice(1)

        return result
      })
      .then(data_3 => {
        data_3.sort((a, b) => {
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
        console.log('결과', data_3)
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
