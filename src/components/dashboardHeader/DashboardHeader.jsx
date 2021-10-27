import favicon from '../../assets/Dashboard-logo.png'

import styles from './DashboardHeader.module.css'

const DashboardHeader = () => {
  return (
    <div className={styles.header__container}>
      <h1 className={styles.header__title}>Kafuncha</h1>
    </div>
  )
}

export default DashboardHeader
