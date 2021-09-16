import './common.css'

import { getCurrentMembers, getDailyChatCount } from '../../shared/service'
import { useGlobalState } from '../../shared/hook'
import { useEffect, useState } from 'react'

export function Sidebar() {
  const [totalCount, setTotalCount] = useState(null)
  const [dailyCount, setDailyCount] = useState(null)
  const [memberCount, setMemberCount] = useState(null)
  const [globalState, setGlobalState] = useGlobalState()

  async function init() {
    const res = await getCurrentMembers(globalState.fileName)

    if (res) {
      setMemberCount(res.length)
    }
  }

  useEffect(() => {
    if (globalState.fileName) {
      init()
    }
  }, [globalState.fileName])

  return (
    <div id="sidebar">
      <div className="chat-counts">
        <div className="chat-count-box">
          전체 채팅 횟수 <span className="chat-count-num">200,000,000</span>
        </div>
        <div className="chat-count-box">
          하루 채팅 횟수 <span className="chat-count-num">2,000</span>
        </div>
      </div>
      <div className="footer">
        <div className="member-text">
          <p>
            안녕하세요
            <br />
            현재 채팅에 참여 중인 사람은
            <br />
            모두 {memberCount}명입니다 :)
            <br />
            그럼 굿바이~
          </p>
        </div>
        <div className="footer-logo">Kafuncha</div>
      </div>
    </div>
  )
}
