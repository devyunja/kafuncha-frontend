import { useEffect, useState } from "react"
import RowGraph from "../rowGraph/RowGraph"

const ChattingRank = () => {
  //data
  const [data,setData] = useState(null)
  const [wholeData,setWholeData] = useState(null)

  //data 가공
  useEffect(()=>{
    let data = [
      {"date":"2021-09-09","user":"SS","mentionCount":1},
      {"date":"2021-09-09","user":"연자","mentionCount":10},
      {"date":"2021-09-09","user":"봄나물소녀","mentionCount":4},
    ]
    let newData = data.sort((a,b)=> b.mentionCount - a.mentionCount)
    let newWholeData = 0
    data.forEach(elem => newWholeData += elem.mentionCount)
    setData(newData)
    setWholeData(newWholeData)
  },[])

  return(
    <div style={{width:'20rem',height:'28rem',backgroundColor:'#fff',boxSizing:'border-box',padding:'2rem'}}>
          <RowGraph
            wholeCount={wholeData}
            data={data}
          />
    </div>
  )
}

export default ChattingRank
