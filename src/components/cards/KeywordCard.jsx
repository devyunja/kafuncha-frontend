import KeywordCardLayout from '../../layouts/cardLayout/KeywordCardLayout'
import CardHeader from '../cardHeader/CardHeader'
import BarChart from '../barChart/BarChart'
import RankMember from '../rankMember/RankMember'

const KeywordCard = () => {
  return (
    <KeywordCardLayout>
      <CardHeader title="키워드 랭킹" />
      <BarChart />
      <RankMember />
    </KeywordCardLayout>
  )
}

export default KeywordCard
