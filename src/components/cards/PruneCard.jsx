import PruneCardLayout from '../../layouts/cardLayout/PruneCardLayout'
import CardHeader from '../cardHeader/CardHeader'
import BarChart from '../barChart/BarChart'
import RankMember from '../rankMember/RankMember'

const PruneCard = () => {
  return (
    <PruneCardLayout>
      <CardHeader title="잠수 인원" />
      <BarChart />
      <RankMember />
    </PruneCardLayout>
  )
}

export default PruneCard
