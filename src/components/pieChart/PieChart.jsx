import styles from './PieChart.module.css'

const PieChart = ({ data, wholeCount }) => {
  const pieColour = ['#D92414', '#F279A6', '#3279A6', '#808080']
  let current_deg = -90

  if (data.length === 0) return null

  return (
    <div className={styles.pieChart__container}>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1">
        {data?.map((el, idx) => {
          const r = 25
          const ratio = (el.count / wholeCount) * 100
          const rotate = `rotate(${current_deg})`
          current_deg += 360 * (el.count / wholeCount)

          return (
            <circle
              r={r}
              cx="50"
              cy="50"
              fill="transparent"
              stroke={pieColour[idx]}
              strokeWidth="50"
              strokeDasharray={`calc(${ratio} * ${2 * Math.PI * r} / 100) ${
                2 * Math.PI * r
              }`}
              transform-origin="50 50"
              transform={rotate}
              key={idx}
            />
          )
        })}
      </svg>
      <div className={styles.pieChart__info}>
        {data?.map((el, idx) => (
          <>
            <div
              className={styles['pieChart__info--box']}
              style={{ backgroundColor: pieColour[idx] }}></div>
            <div key={idx}>{el.keyWord}</div>
          </>
        ))}
      </div>
    </div>
  )
}

export default PieChart
