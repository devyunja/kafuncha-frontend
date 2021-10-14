import React from 'react'

import styles from './RankMember.module.css'

const RankMember = ({ rankData, detail }) => {
  const postFixEnum = {
    chat: '회',
    menstion: '회',
  }
  if (rankData.length === 0) return null

  return (
    <div>
      <ul>
        {rankData?.map(data => (
          <li className={styles.rankMember} key={data.user}>
            <span className={styles.rankMember__rank}>{data.rank}위</span>
            <span className={styles.rankMember__user}>{data.user}</span>
            <span className={styles.rankMember__info}>
              {data.count}
              {postFixEnum[detail] ?? ''}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RankMember
