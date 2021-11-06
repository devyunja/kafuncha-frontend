import DashboardHeader from '../../components/dashboardHeader/DashboardHeader'
import DashboardSidebar from '../../components/dashboardSidebar/DashboardSidebar'

import styles from './DashboardLayout.module.css'

const DashboardLayout = props => {
  console.log(props)
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <DashboardHeader />
      </header>
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <DashboardSidebar />
        </aside>
        <main className={styles.main}>{props.children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
