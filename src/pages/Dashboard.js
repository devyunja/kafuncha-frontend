import ChatCard from '../components/cards/ChatCard'
import KeywordCard from '../components/cards/KeywordCard'
import PruneCard from '../components/cards/PruneCard'
import DashboardLayout from '../layouts/dashoboardLayout/DashboardLayout'

export default function Dashboard() {
  return (
    <DashboardLayout>
      <ChatCard />
      <PruneCard />
      <KeywordCard />
    </DashboardLayout>
  )
}
