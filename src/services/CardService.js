const ONE_DAY = 1000 * 60 * 60 * 24

const getDaysBetween = (start, end) => {
  return (start - end) / ONE_DAY
}

const accumulateCount = (datas, days) => {
  const recentDate = new Date(datas[0].date)
  const rankData = datas.filter(
    data => getDaysBetween(recentDate, new Date(data.date)) < days
  )

  return rankData.reduce((acc, cur) => {
    acc[cur.user] = acc[cur.user] + cur.messageCount || cur.messageCount
    return acc
  }, {})
}

const getRank = (datas, days) => {
  let rankIndex = 1
  const accumulatedData = accumulateCount(datas, days)
  return Object.entries(accumulatedData)
    .sort((a, b) => b[1] - a[1])
    .map((el, index, arr) => {
      if (index > 0 && arr[index - 1][1] !== el[1]) ++rankIndex
      return {
        rank: rankIndex,
        user: el[0],
        count: el[1],
      }
    })
}

const timeEnum = {
  daily: 1,
  weekly: 7,
  monthly: 31,
}

const getRankDatas = datas => {
  return {
    daily: getRank(datas, timeEnum.daily),
    weekly: getRank(datas, timeEnum.weekly),
    monthly: getRank(datas, timeEnum.monthly),
  }
}

const isBelong = (current, based, more, less) => {
  const timeInterval = current - based
  return timeInterval >= more && timeInterval < less
}

const filterPrunes = (datas, more, less) => {
  const basedTimeDiff = datas[0].dataDiff
  let rankIndex = 1

  return datas
    .filter(el => isBelong(el.dataDiff, basedTimeDiff, more, less))
    .map((el, index, arr) => {
      if (index > 0 && arr[index - 1].lastShowDate !== el.lastShowDate)
        ++rankIndex
      return { rank: rankIndex, user: el.user, lastShowDate: el.lastShowDate }
    })
}

const getPruneMembers = datas => {
  datas.reverse()

  return {
    more3Less5Days: filterPrunes(datas, 3, 5),
    more5less7Days: filterPrunes(datas, 5, 7),
    more7Days: filterPrunes(datas, 7, Number.MAX_VALUE),
  }
}

export { getRankDatas, getPruneMembers }
