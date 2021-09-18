import RankMemeber from '../components/rankMember/RankMember'
export default function Dashboard() {
  let data = [
    { date: '2021-09-09', user: '김코순', messageCount: 475, rank: 1 },
    { date: '2021-09-09', user: '채츄', messageCount: 334, rank: 2 },
    { date: '2021-09-09', user: '곰', messageCount: 165, rank: 3 },
    { date: '2021-09-09', user: '돜카게', messageCount: 155, rank: 4 },
    { date: '2021-09-09', user: '익사잇힝', messageCount: 118, rank: 5 },
  ]
  return (
    <>
      <RankMemeber
        data={data}
        detail={[{ key: 'messageCount', postFix: '회' }]}
      />
    </>
  )
}
