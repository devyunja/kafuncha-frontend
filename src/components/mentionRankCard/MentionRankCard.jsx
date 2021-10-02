import { useEffect, useState } from 'react'
import RankMember from '../rankMember/RankMember'
import RowGraph from '../cards/rowGraph/RowGraph'

export default function MentionRankCard() {
  const [daily, setDaily] = useState([])
  const [weekly, setWeekly] = useState([])
  const [monthly, setMonthly] = useState([])
  const [loaded, setLoaded] = useState(false)
  const totalCount = 17
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
        setLoaded(true)

        return
      })
  }, [])
  console.log('daily', daily, 'weekly', weekly, 'monthly', monthly)

  function getData(data, days) {
    const sumData = sumCount(getDataRewinded(data, days))
    return sortData(sumData)
  }

  function getDataRewinded(data, days) {
    const rewindDaysTsp = today.getTime() - (days - 1) * 24 * 60 * 60 * 1000

    const todayString = dateTimestampToString(today)
    const dateKey =
      data[0].date === todayString
        ? dateTimestampToString(rewindDaysTsp)
        : data[0].date
    const datekeyTsp = dateStringToTimestamp(dateKey) - 0
    const from = datekeyTsp - (days - 1) * 24 * 60 * 60 * 1000
    const newData = data.filter(ele => dateStringToTimestamp(ele.date) >= from)

    return newData
  }

  function sumCount(data) {
    return data.reduce((acc, curr) => {
      acc[curr.user] = acc[curr.user]
        ? acc[curr.user] + curr.mentionCount
        : curr.mentionCount
      return acc
    }, {})
  }

  function sortData(data) {
    let rankNum
    return Object.entries(data)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map((ele, idx, arr) => {
        rankNum = idx === 0 ? 1 : arr[idx - 1][1] === ele[1] ? rankNum : idx + 1

        return {
          user: ele[0],
          mentionCount: ele[1],
          rank: rankNum,
        }
      })
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
      <div style={{ width: '200px' }}>
        <RowGraph wholeCount={totalCount} data={weekly} />
      </div>
      {weekly !== [] ? (
        loaded === true ? (
          <RankMember
            rankData={weekly}
            detail={[{ key: 'mentionCount', postFix: '회' }]}
          />
        ) : (
          <div>로드 중</div>
        )
      ) : (
        <div>데이터가 없습니다.</div>
      )}
    </>
  )
}
