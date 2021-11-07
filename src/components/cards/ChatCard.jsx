import ChatCardLayout from '../../layouts/cardLayout/ChatCardLayout'
import CardHeader from '../cardHeader/CardHeader'
import BarChart from '../barChart/BarChart'
import RankMember from '../rankMember/RankMember'

import { fetchData, sliceData } from '../../services/CardService'

const ChatCard = () => {
  const data = fetchData()
  console.log('test', data)
  // console.log(data)

  return (
    <ChatCardLayout>
      <CardHeader title="채팅 랭킹" />
      {/* <BarChart wholeCount={1} data={sliceData(data, 3)} /> */}
      {/* <RankMember rankData={} detail={} /> */}
    </ChatCardLayout>
  )
}

export default ChatCard
