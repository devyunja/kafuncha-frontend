import React from 'react'
import styles from './RankMember.module.css'
const RankMember = ({ rankData, detail }) => {
  console.log('rankData', rankData)
  return (
    <div className={styles.wrap}>
      <ul>
        {rankData.map(data => (
          <li key={data.user + Math.random()} className={styles.rankNum}>
            <div className={styles.rankerWrap}>
              <span className={styles.rank}> {data.rank}위 </span>
              <span className={styles.rankUser}>{data.user} </span>
              {detail.map(({ key, postFix }) => (
                <span key={key} className={styles.rankCount}>
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
