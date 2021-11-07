import styles from './ChatCardLayout.module.css'

const ChatCardLayout = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default ChatCardLayout
