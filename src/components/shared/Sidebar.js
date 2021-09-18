import './common.css'

import cx from 'classnames'

import { Statistic, Skeleton } from 'antd'
import { MessageOutlined } from '@ant-design/icons'

import { getCurrentMembers, getChatCount } from '../../shared/service'
import { useGlobalState } from '../../shared/hook'
import { useEffect, useState } from 'react'

export function Sidebar() {
  const [counts, setCounts] = useState(null)
  const [dailyCount, setDailyCount] = useState(null)
  const [memberCount, setMemberCount] = useState(null)
  const [globalState, setGlobalState] = useGlobalState()

  async function init() {
    const counts = await getChatCount(globalState.fileName)

    if (counts) {
      setCounts(counts)
    }

    const { data, length } = await getCurrentMembers(globalState.fileName)

    // console.log('data', data)
    if (length) {
      setMemberCount(length)
    }
  }

  useEffect(() => {
    if (globalState.fileName) {
      init()
    }
  }, [globalState.fileName])

  return (
    <div>
      <div className="chat-counts">
        <Statistic
          {...{
            title: '전체 채팅 횟수',
            className: cx('chat-count-box'),
            value: counts?.total ?? 0,
            loading: !counts?.total,
            prefix: <MessageOutlined />,
          }}
        />
        <Statistic
          {...{
            title: '하루 평균 채팅 횟수',
            className: cx('chat-count-box'),
            value: counts?.average ?? 0,
            loading: !counts?.average,
            prefix: <MessageOutlined />,
          }}
        />
      </div>
      <div className="footer">
        <Skeleton
          className="member-text"
          active
          loading={!memberCount}
          // loading={true}
          title={{ width: '100%' }}
          paragraph={{ rows: 1, width: '60%' }}>
          <div className="member-text">
            <div className="member-text-title">
              현재 채팅에 참여 중인 사람은
            </div>
            <div className="member-text-num">
              모두 <span className="num">{memberCount}</span>명 입니다 :)
            </div>
          </div>
        </Skeleton>
        <br />
        {/* <div className="member-text">
          <div className="member-text-title">현재 채팅에 참여 중인 사람은</div>
          <div className="member-text-num">모두 {memberCount}명 입니다 :)</div>
        </div> */}
        <div className="footer-logo">Kafuncha</div>
      </div>
    </div>
  )
}
