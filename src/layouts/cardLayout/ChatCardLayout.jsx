import styles from './ChatCardLayout.module.css'

const ChatCardLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      {children[0]}
      <hr />
      {children[1]}
      {children[2]}
    </div>
  )
}

export default ChatCardLayout
