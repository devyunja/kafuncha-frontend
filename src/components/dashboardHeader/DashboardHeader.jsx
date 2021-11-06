import favicon from '../../assets/Dashboard-logo.png'

import styles from './DashboardHeader.module.css'

const DashboardHeader = () => {
  return (
    <div className={styles.container}>
      <img src={favicon} alt="Kafuncha logo" />
      <h1 className={styles.title}>Kafuncha</h1>
    </div>
  )
}

export default DashboardHeader
