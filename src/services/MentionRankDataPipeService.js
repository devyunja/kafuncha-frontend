import { dateTimestampToString } from './DateService'
import { dateStringToTimestamp } from './DateService'

const today = new Date()
export function getData(data, days) {
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
        count: ele[1],
        rank: rankNum,
      }
    })
}
