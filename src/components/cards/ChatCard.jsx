import { useEffect, useState } from 'react'

import ChatCardLayout from '../../layouts/cardLayout/ChatCardLayout'
import CardHeader from '../cardHeader/CardHeader'
import BarChart from '../barChart/BarChart'
import RankMember from '../rankMember/RankMember'
import { getRankDatas } from '../../services/CardService'

const ChatCard = () => {
  const [selectOption, setSelectOption] = useState('daily')

  const changeSelectOption = e => {
    const option = e.target.value
    setSelectOption(option)
  }

  const [chatDatas, setChatDatas] = useState({
    daily: [],
    weekly: [],
    monthly: [],
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchChatDatas = async () => {
      try {
        setChatDatas(null)
        setLoading(true)
        setError(null)

        const res = await fetch(
          'https://programming.coffee/daily-champion-rank/' +
            window.localStorage.getItem('fileName')
        )
        const datas = await res.json()
        const { daily, weekly, monthly } = await getRankDatas(datas)
        await setChatDatas(() => ({
          daily: daily,
          weekly: weekly,
          monthly: monthly,
        }))
      } catch (e) {
        setError(true)
      }
      setLoading(false)
    }

    fetchChatDatas()
  }, [])

  if (loading) return <div>로딩중</div>
  if (error) return <div>에러 발생</div>
  if (!chatDatas) return null

  return (
    <ChatCardLayout>
      <CardHeader title="채팅 랭킹" changeSelectOption={changeSelectOption} />
      <BarChart
        data={chatDatas[selectOption]?.slice(0, 3)}
        wholeCount={chatDatas[selectOption]?.reduce(
          (acc, cur) => acc + cur.count,
          0
        )}
      />
      <RankMember
        rankData={chatDatas[selectOption]?.slice(0, 3)}
        detail={[{ key: 'count', postFix: '회' }]}
      />
    </ChatCardLayout>
  )
}

export default ChatCard
