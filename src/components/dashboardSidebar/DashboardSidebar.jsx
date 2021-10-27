import styles from './DashboardSidebar.module.css'

const DashboardSidebar = () => {
  return (
    <div className={styles.container}>
      <div className="">전체 채팅 횟수 하루 채팅 횟수</div>
      <div className={styles.info}>안녕하세요.</div>
      <h1 className={styles.title}>Kafuncha</h1>
    </div>
  )
}

export default DashboardSidebar
