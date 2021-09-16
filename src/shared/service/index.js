const host = 'https://programming.coffee'

function getDataByDate(dataList, countKey) {
  console.log('dataList', dataList)
  return dataList.reduce((result, data) => {
    if (!result[data.date]) {
      result[data.date] = []
    }

    result[data.date].push({ ...data, count: data[countKey] })

    return result
  }, {})
}

function getTotalCount(data) {
  return Object.values(data)
    .map(dailyRank =>
      dailyRank.reduce((totalCount, rank) => totalCount + rank.count, 0)
    )
    .reduce((counts, count) => counts + count, 0)
}

export async function getAttendance() {
  const res = await fetch(`${host}/attendance`)
  if (res.ok) {
    return await res.json()
  }
}

export async function getDailyChatCount(fileName) {
  const res = await fetch(`${host}/daily-chat-count/${fileName}`)
  if (res.ok) {
    return await res.json()
  }
}

export async function getDailyRank(fileName, rewindNumDays = 30) {
  const res = await fetch(
    `${host}/daily-champion-rank/${fileName}?rewindNumDays=${rewindNumDays}`
  )
  if (res.ok) {
    const result = await res.json()
    const data = getDataByDate(result, 'messageCount')
    const totalCount = getTotalCount(data)
    return {
      totalCount,
      data,
    }
  }

  return {}
}

export async function getDailyMentionRank(fileName) {
  const res = await fetch(`${host}/mention/${fileName}`)
  if (res.ok) {
    const data = await res.json()
    return {
      latestDate: data[0].date,
      data: getDataByDate(data, 'mentionCount'),
    }
  }

  return {}
}

export async function getPrune(fileName) {
  const res = await fetch(`${host}/prune/${fileName}`)

  if (res.ok) {
    const data = await res.json()
    return data.slice(0, 7)
  }
}

export async function getCurrentMembers(fileName) {
  const res = await fetch(`${host}/current-member/${fileName}`)
  if (res.ok) {
    const data = await res.json()
    const list = data[0].list
    return { data: list, length: list.length }
  }
}
