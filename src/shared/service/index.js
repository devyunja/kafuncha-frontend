const host = 'https://programming.coffee'

export async function getAttendance() {
  const res = await fetch(`${host}/attendance`)
  if (res.ok) {
    return await res.json()
  }
}

export async function getDailyChatCount() {
  const res = await fetch(`${host}/daily-chat-count`)
  if (res.ok) {
    return await res.json()
  }
}

export async function getDailyRank(fileName) {
  const res = await fetch(`${host}/daily-champion-rank/${fileName}`)
  if (res.ok) {
    const data = await res.json()
    return data.reduce((result, item) => {
      if (!result[item.date]) {
        result[item.date] = []
      }

      result[item.date].push(item)

      return result
    }, {})
  }
}
