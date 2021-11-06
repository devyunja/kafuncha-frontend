export function dateStringToTimestamp(str) {
  var y = str.substr(0, 4)
  var m = str.substr(5, 2)
  var d = str.substr(8, 2)
  return new Date(`${y}-${m}-${d}`)
}

export function dateTimestampToString(timestamp) {
  //날짜 String으로 추출

  const date = new Date(timestamp)
  const y = date.getFullYear()
  const m = ('0' + (1 + date.getMonth())).slice(-2)
  const d = ('0' + date.getDate()).slice(-2)

  let resultDate = `${y}-${m}-${d}`
  return resultDate
}
