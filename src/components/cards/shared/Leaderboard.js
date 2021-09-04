import { useEffect, useState } from "react";

export default function DailyChampion () {
    const [ currentDay, setcurrentDay] = useState([]); 
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const today = String(`${year}-${month < 10 ? `0${month}` : month}-03`); 

        useEffect(() => {
            fetch("https://programming.coffee/daily-champion-rank/02193f7c-dad9-479c-ab6f-ae919f27c9de-1411779081052338678.csv")
            .then(res => res.json())
            .then(datas => datas.filter((data) => {
                    return data.date === today
            }))
            .then(filteredData => {
                setcurrentDay(filteredData);
            })
        },[])

        
    return (
        <section className="ranking">
            <div className="ranking_ranker">
                <div className="ranker_rank">{currentDay.length && currentDay[0].rank}위</div>
                <div className="ranker_name">{currentDay.length && currentDay[0].name}</div>
                <div className="ranker_record">{currentDay.length && currentDay[0].messageCount}</div>
            </div>
            <div className="ranking_ranker">
                <div className="ranker_rank">{currentDay.length && currentDay[1].rank}위</div>
                <div className="ranker_name">{currentDay.length && currentDay[1].name}</div>
                <div className="ranker_record">{currentDay.length && currentDay[1].messageCount}</div>
            </div>
            <div className="ranking_ranker">
                <div className="ranker_rank">{currentDay.length && currentDay[2].rank}위</div>
                <div className="ranker_name">{currentDay.length && currentDay[2].name}</div>
                <div className="ranker_record">{currentDay.length && currentDay[2].messageCount}</div>
            </div>
        </section>
    )
}