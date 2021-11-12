import { useEffect, useState } from 'react'

import PruneCardLayout from '../../layouts/cardLayout/PruneCardLayout'
import { getPruneMembers } from '../../services/CardService'
import CardHeader from '../cardHeader/CardHeader'
import RankMember from '../rankMember/RankMember'

const PruneCard = () => {
  const [selectOption, setSelectOption] = useState('more3Less5Days')

  const changeSelectOption = e => {
    const option = e.target.value
    setSelectOption(option)
  }

  const [pruneDatas, setPruneDatas] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        setPruneDatas(null)
        setIsLoading(true)
        setIsError(false)

        const res = await fetch(
          `https://programming.coffee/prune/${window.localStorage.getItem(
            'fileName'
          )}`
        )
        const datas = await res.json()
        const { more3Less5Days, more5less7Days, more7Days } =
          await getPruneMembers(datas)

        setPruneDatas(() => ({
          more3Less5Days: more3Less5Days,
          more5less7Days: more5less7Days,
          more7Days: more7Days,
        }))
      } catch (e) {
        setIsError(true)
      }
      setIsLoading(false)
    }

    fetchDatas()
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error occurs</div>
  if (!pruneDatas) return null

  return (
    <PruneCardLayout>
      <CardHeader
        title="잠수 인원"
        selectOptions={[
          { label: '3일', value: 'more3Less5Days' },
          { label: '5일', value: 'more5less7Days' },
          { label: '7일', value: 'more7Days' },
        ]}
        changeSelectOption={changeSelectOption}
      />
      <RankMember
        rankData={pruneDatas[selectOption]?.slice(0, 7)}
        detail={[{ key: 'lastShowDate', postFix: '' }]}
      />
    </PruneCardLayout>
  )
}

export default PruneCard
