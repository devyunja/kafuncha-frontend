import React from 'react'

const RankMember = ({ rankData, detail }) => {
  console.log('rankData', rankData)
  return (
    <div>
      <ul>
        {rankData.map((data, idx) => (
          <li key={data.user + Math.random()}>
            <div>
              <span>{data.rank}위</span>
              <span>{data.user} </span>
              {detail.map(({ key, postFix }) => (
                <span key={key}>
                  {data[key]}
                  {postFix}
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
