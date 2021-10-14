import CardHeader from '../shared/CardHeader'
import RowGraph from '../rowGraph/RowGraph'
import PieChart from '../pieChart/PieChart'
import RankMember from '../rankMember/RankMember'

import styles from './Card.module.css'

const Card = ({ data }) => {
  const sliceEnum = {
    채팅: 3,
    멘션: 3,
    잠수: 7,
    키워드: 7,
  }

  if (data.data.length > 3) data.data = data.data.slice(0, sliceEnum[data.type])

  return (
    <div className={styles.card}>
      <CardHeader title={data.type} />
      {['채팅', '멘션'].includes(data.type) && (
        <RowGraph wholeCount={data.wholeCount} data={data.data} />
      )}
      {['키워드'].includes(data.type) && (
        <PieChart wholeCount={data.wholeCount} data={data.data} />
      )}
      <RankMember rankData={data.data} detail={data.type} />
    </div>
  )
}

export default Card
