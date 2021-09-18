import React from 'react'
import { useEffect, useState } from 'react'

const RankMember = () => {
  const [chatData, setChatData] = useState(undefined)
  const [mentionData, setMentionData] = useState(undefined)
  const [mutedData, setMutedData] = useState(undefined)

  useEffect(() => {
    let chatData = [{"date":"2021-09-09","user":"김코순","messageCount":475,"rank":1},{"date":"2021-09-09","user":"채츄","messageCount":334,"rank":2},{"date":"2021-09-09","user":"곰","messageCount":165,"rank":3},{"date":"2021-09-09","user":"돜카게","messageCount":155,"rank":4},{"date":"2021-09-09","user":"익사잇힝","messageCount":118,"rank":5},{"date":"2021-09-09","user":"봄나물소녀","messageCount":103,"rank":6},{"date":"2021-09-09","user":"방구석코딩","messageCount":100,"rank":7},{"date":"2021-09-09","user":"풀잡부개발자","messageCount":98,"rank":8},{"date":"2021-09-09","user":"뽀뇨","messageCount":93,"rank":9}]
    let mentionData = [{"date":"2021-09-09","user":"연자","mentionCount":2},{"date":"2021-09-09","user":"SS","mentionCount":1},{"date":"2021-09-09","user":"봄나물소녀","mentionCount":1},{"date":"2021-09-09","user":"방구석코딩","mentionCount":1},{"date":"2021-09-08","user":"방구석코딩","mentionCount":1},{"date":"2021-09-08","user":"봄나물소녀","mentionCount":1},{"date":"2021-09-08","user":"김코순","mentionCount":1},{"date":"2021-09-08","user":"번아웃","mentionCount":1},{"date":"2021-09-08","user":"유저봇","mentionCount":1},{"date":"2021-09-07","user":"김코순","mentionCount":2},{"date":"2021-09-07","user":"봄나물소녀","mentionCount":1},{"date":"2021-09-07","user":"익사잇힝","mentionCount":1},{"date":"2021-09-06","user":"아보","mentionCount":1},{"date":"2021-09-06","user":"김코순","mentionCount":1},{"date":"2021-09-06","user":"리넹","mentionCount":2},{"date":"2021-09-06","user":"봄나물소녀","mentionCount":1},{"date":"2021-09-06","user":"방구석코딩"}]
    let mutedData = [{"user":"이랑","lastShowDate":"2021-09-07","today":"2021-09-17","dataDiff":10},{"user":"박재희","lastShowDate":"2021-09-08","today":"2021-09-17","dataDiff":9},{"user":"스린이","lastShowDate":"2021-09-08","today":"2021-09-17","dataDiff":9},{"user":"아보","lastShowDate":"2021-09-08","today":"2021-09-17","dataDiff":9},{"user":"돜카게","lastShowDate":"2021-09-09","today":"2021-09-17","dataDiff":8},{"user":"콤이","lastShowDate":"2021-09-09","today":"2021-09-17","dataDiff":8},{"user":"채츄","lastShowDate":"2021-09-09","today":"2021-09-17","dataDiff":8},{"user":"봄나물소녀","lastShowDate":"2021-09-09","today":"2021-09-17"}]
console.log('befroe', chatData)
    chatData.sort((a,b)=>{
    return a.messageCount > b.messageCount ? -1 : a.messageCount < b.messageCount ? 1 : 0
    })
    console.log('sorted', chatData)

  }, [])
  return <div>
//데이터 수신 후(로딩 후) 랜더링 되도록 조건 걸어줌
{/* <p>1위</p>
<p>{chatData[0].user}</p>
<p>{chatData[0].messageCount}회</p> */}

  </div>
}

export default RankMember

// 필요한 데이터 : mentionCount, messageCount, lastShowDate