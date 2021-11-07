import styles from './PruneCardLayout.module.css'

const PruneCardLayout = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default PruneCardLayout
