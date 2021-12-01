import PropTypes from 'prop-types'

import styles from './RankMember.module.css'

const RankMember = ({ rankData, detail }) => {
  return (
    <ul>
      {rankData?.map((data, index) => {
        const opacity = 1 - 0.3 * index >= 0.4 ? 1 - 0.3 * index : 0.4
        return (
          <li key={data.user}>
            <div className={styles.wrapper}>
              <div className={styles.rank} style={{ opacity: opacity }}>
                {data.rank}위
              </div>
              <div>{data.user} </div>
              {detail?.map(({ key, postFix }) => (
                <div className={styles.info} key={key}>
                  {data[key]}
                  {postFix}
                </div>
              ))}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

RankMember.propTypes = {
  rankData: PropTypes.array.isRequired,
  detail: PropTypes.array,
}

export default RankMember
