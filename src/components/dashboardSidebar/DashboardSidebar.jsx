import styles from './DashboardSidebar.module.css'

const DashboardSidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chatCount}>
        전체 채팅 횟수
        <br />
        하루 채팅 횟수
      </div>
      <div className={styles.info}>
        안녕하세요. <br />
        <br />
        현재 채팅에 참여 중인 사람은 모두 x명입니다. :)
        <br />
        <br />
        그럼 굿바이~
      </div>
      <h1 className={styles.title}>Kafuncha</h1>
    </div>
  )
}

export default DashboardSidebar
