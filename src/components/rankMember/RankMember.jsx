import React from 'react'
import PropTypes from 'prop-types'

const RankMember = ({ rankData, detail }) => {
  return (
    <div>
      <ul>
        {rankData?.map(data => (
          <li key={data.user}>
            <div>
              <span>{data.rank}위</span>
              <span>{data.user} </span>
              {detail?.map(({ key, postFix }) => (
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

RankMember.propTypes = {
  rankData: PropTypes.array.isRequired,
  detail: PropTypes.array,
}

export default RankMember
