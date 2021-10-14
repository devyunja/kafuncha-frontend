import { useState } from 'react'
import styles from './rowGraph.module.css'

const RowGraph = ({ wholeCount, data }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeClick = e => {
    let activeNum = Number(e.currentTarget.dataset.index)
    setActiveIndex(activeNum)
  }

  if (data.length === 0) return null

  return (
    <>
      {data?.map((elem, index) => (
        <div key={elem.user} data-index={index} onClick={activeClick}>
          <strong
            className={activeIndex === index ? styles.activeUser : styles.user}>
            {elem.user}
          </strong>
          <div className={styles.wholeBar}>
            <div
              style={
                activeIndex !== index
                  ? {
                      width: `${(elem.count / wholeCount) * 100}%`,
                    }
                  : {
                      width: `${(elem.count / wholeCount) * 100}%`,
                    }
              }
              className={
                activeIndex !== index ? styles.bar : styles.activeBar
              }></div>
          </div>
        </div>
      ))}
    </>
  )
}

export default RowGraph
