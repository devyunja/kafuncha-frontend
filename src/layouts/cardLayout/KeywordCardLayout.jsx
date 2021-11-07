import styles from './KeywordCardLayout.module.css'

const KeywordCardLayout = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default KeywordCardLayout
