import { useState } from "react"
import styles from "./rowGraph.module.css"
import { v4 } from 'uuid'

const RowGraph = ({wholeCount,data}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeClick = (e) => {
    let activeNum = Number(e.currentTarget.dataset.index)
    setActiveIndex(activeNum)
  }

  return(
    <>
      {
        data?.map((elem,index) =>
          <div key={v4()} data-index={index} onClick={activeClick}>
            {console.log('index',index)}
            <strong
              className={activeIndex === index ? styles.activeUser : styles.user}>
              {elem.user}
            </strong>
            <div className={styles.wholeBar}>
              <div
                style={activeIndex !== index ?{
                  width:`${elem.messageCount || elem.mentionCount / wholeCount * 100}%`,
                }:{
                  width:`${elem.messageCount || elem.mentionCount / wholeCount * 100}%`,
                }}
                className={activeIndex !== index ? styles.bar: styles.activeBar}
              ></div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default RowGraph
