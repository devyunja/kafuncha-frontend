const host = 'https://programming.coffee'

const CACHE = {
  CHAT_RANK: [],
  MENTION_RANK: [],
}

function getDataByDate(dataList, countKey, length) {
  return Object.entries(
    dataList.reduce((rankersMap, ranker) => {
      rankersMap[ranker.user] =
        (rankersMap[ranker.user] || 0) + ranker[countKey]
      return rankersMap
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, length)
    .map((ranker, index) => ({
      user: ranker[0],
      count: ranker[1],
      rank: index + 1,
    }))
}

// // countKey 참조하여 count 주입
// function getDataByDate(dataList, countKey, rewindNumDays) {
//   console.log('rewindNumDays', rewindNumDays)
//   console.log('dataList', dataList)
//   return dataList.reduce((result, data) => {
//     if (!result[data.date]) {
//       result[data.date] = []
//     }

//     result[data.date].push({ ...data, count: data[countKey] })

//     return result
//   }, {})
// }

function getTotalCount(data) {
  return data.reduce((totalCount, rank) => totalCount + rank.count, 0)
}

function sliceByRewindDays(result, rewindDays) {
  const latestDate = result[0]?.date
  const tempDate = new Date(latestDate)

  tempDate.setDate(tempDate.getDate() - (rewindDays + 1))

  const rewindDate = tempDate.toISOString().split('T')[0]
  const slicedRanks = []

  result.some(rankerByDate => {
    if (rankerByDate.date !== rewindDate) {
      slicedRanks.push(rankerByDate)
      return false
    }
    return true
  })

  return slicedRanks
}

export async function getAttendance() {
  const res = await fetch(`${host}/attendance`)
  if (res.ok) {
    return await res.json()
  }
}

export async function getChatCount(fileName) {
  const res = await fetch(`${host}/daily-chat-count/${fileName}`)
  if (res.ok) {
    const data = await res.json()
    const total = data.reduce((acc, day) => acc + day.count, 0)

    return {
      total,
      average: Math.floor(total / data.length),
    }
  }
}

function getCachedChatRank({ cache, countKey, rewindNumDays, length }) {
  const data = getDataByDate(
    sliceByRewindDays(cache, rewindNumDays),
    countKey,
    length
  )
  const totalCount = getTotalCount(data)

  return {
    data,
    totalCount,
  }
}

export async function getChatRank(
  fileName,
  { rewindNumDays = 30, length = 3 }
) {
  const countKey = 'messageCount'

  if (CACHE.CHAT_RANK.length > 0) {
    return getCachedChatRank({
      cache: CACHE.CHAT_RANK,
      countKey,
      rewindNumDays,
      length,
    })
  } else {
    const res = await fetch(
      `${host}/daily-champion-rank/${fileName}?rewindNumDays=30`
    )
    if (res.ok) {
      CACHE.CHAT_RANK = await res.json()
      return getCachedChatRank({
        cache: CACHE.CHAT_RANK,
        countKey,
        rewindNumDays,
        length,
      })
    }
  }

  return {}
}

export async function getMentionRank(
  fileName,
  { rewindNumDays = 30, length = 3 }
) {
  const countKey = 'mentionCount'

  if (CACHE.MENTION_RANK.length > 0) {
    return getCachedChatRank({
      cache: CACHE.MENTION_RANK,
      countKey,
      rewindNumDays,
      length,
    })
  } else {
    const res = await fetch(`${host}/mention/${fileName}`)
    if (res.ok) {
      CACHE.MENTION_RANK = await res.json()
      return getCachedChatRank({
        cache: CACHE.MENTION_RANK,
        countKey,
        rewindNumDays,
        length,
      })
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
    const list = data?.[0]?.list ?? []
    return { data: list, length: list.length }
  }
}
