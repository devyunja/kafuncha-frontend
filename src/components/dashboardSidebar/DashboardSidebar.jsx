import { useState, useEffect } from 'react/cjs/react.development'

import styles from './DashboardSidebar.module.css'

const DashboardSidebar = () => {
  const [currentMembers, setCurrentMembers] = useState([])

  useEffect(() => {
    const fetchCurrentMembers = async () => {
      const res = await fetch(
        `https://programming.coffee/current-member/${window.localStorage.getItem(
          'fileName'
        )}`
      )
      const datas = await res.json()

      setCurrentMembers(datas)
    }

    fetchCurrentMembers()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.chatCount}>
        전체 채팅 횟수
        <br />
        하루 채팅 횟수
      </div>
      <div>
        안녕하세요. <br />
        <br />
        현재 채팅에 참여 중인 사람은
        <br />
        모두 <span>{currentMembers[0]?.list.length}</span>명입니다 :)
        <br />
        <br />
        그럼 굿바이~
      </div>

      <h1 className={styles.title}>Kafuncha</h1>
    </div>
  )
}

export default DashboardSidebar
