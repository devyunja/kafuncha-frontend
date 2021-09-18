import React from 'react'

const RankMember = prop => {
  let rankData = prop.data
  let detail = prop.detail

  return (
    <div>
      <ul>
        {rankData.map(data => (
          <li key={data.user}>
            <div>
              <span>{data.rank}위</span>
              <span>{data.user} </span>
              {detail.map(({ key, postFix }) => (
                <span key={key}>
                  {data[key]} {postFix}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RankMember

// 필요한 데이터 : mentionCount, messageCount, lastShowDate
