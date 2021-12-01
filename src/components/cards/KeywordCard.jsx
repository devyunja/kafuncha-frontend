import { useState, useEffect } from 'react/cjs/react.development'

import KeywordCardLayout from '../../layouts/cardLayout/KeywordCardLayout'
import CardHeader from '../cardHeader/CardHeader'
import BarChart from '../barChart/BarChart'
import RankMember from '../rankMember/RankMember'
import PieChart from '../pieChart/PieChart'

const KeywordCard = () => {
  const [selectOption, setSelectOption] = useState('daily')

  const changeSelectOption = e => {
    setSelectOption(e.target.value)
  }

  const [keywordDatas, setKeywordDatas] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    const fetchDatas = async () => {
      try {
        setKeywordDatas(null)
        setIsLoading(true)
        setError(false)
        const res = await fetch(
          `https://programming.coffee/keyword-dates?date=2021-09-01&date=2021-09-02&date=2021-09-03`
        )
        const datas = await res.json()

        setKeywordDatas(datas)
      } catch (e) {
        setError(true)
      }

      setIsLoading(false)
    }

    fetchDatas()
  }, [])

  console.log(selectOption)

  if (isLoading) return <div>Loading</div>
  if (error) return <div>Error Occurs</div>
  if (!keywordDatas) return null

  console.log(keywordDatas)

  return (
    <KeywordCardLayout>
      <CardHeader title="키워드 랭킹" changeSelectOption={changeSelectOption} />
      <PieChart datas={keywordDatas} wholeCount={1000} />
      <RankMember
        rankData={keywordDatas.slice(0, 8)}
        detail={[{ key: 'count', postFix: '회' }]}
      />
    </KeywordCardLayout>
  )
}

export default KeywordCard
