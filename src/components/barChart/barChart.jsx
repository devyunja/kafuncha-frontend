import { useState } from "react"
import styles from "./barChart.module.css"

const RowGraph = ({wholeCount,data}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return(
    <>
      {
        data?.map((elem,index) =>
          <div key={elem.user} onClick={()=>{setActiveIndex(index)}}>
            <strong
              className={activeIndex === index ? styles.activeUser : styles.user}>
              {elem.user}
            </strong>
            <div className={styles.wholeBar}>
              <div
                style={{
                  width:`${elem.count / wholeCount * 100}%`,
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
