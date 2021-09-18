import CardHeader from '../shared/CardHeader';
import CardGraph from '../shared/CardGraph';
import CardLeaderboard from '../shared/CardLeaderboard';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader';
import { optionsValue } from '../../Const';

const Container = styled.div`
    width:200px;
    height:250px;
    padding:20px 10px;
    background-color: yellowgreen;
`;


const Header = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
`;

const Title = styled.span`
font-size:16px;
font-weight:900;
`;

const Select = styled.select``;

export default function ChatRankCard({title}) {
    const [ selectedOption, setSelectedOption ] = useState(optionsValue[0].value);
    const [ chatRanker, setChatRanker ] = useState([]);
    const [ totalChat, setTotalChat ] = useState([]);
    const [ loading, setLoading ] = useState(true); 
    const [ error, setError ] = useState(null); 
    const baseURL = 'https://programming.coffee';
    const filename = 'c5111957-2d29-4914-9add-393206723900-1485868656441256377.csv';
    const cardName = "chatRanking";
    // const params = "rewindNumDays : 1";

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = '09';
    const today = `${year}-0${month}-${day}`;

    function handleOnChage(e) {
        const currentValue = e.target.value;
        setSelectedOption(currentValue);
    }

    useEffect(() => {
        const fetchChatRankingDatas = async () => {
            if(title === "채팅 랭킹" && selectedOption === optionsValue[0].value){
                try{
                    const { data : championRank } = await axios.get(`${baseURL}/daily-champion-rank/${filename}`);
                    const { data : totalRank } = await axios.get(`${baseURL}/daily-chat-count/${filename}`);
                    const dailyChampion = championRank.filter(item => item.date === String(today) && item.rank < 4);
                    const dailyTotalChat = totalRank.filter(item => item.date === String(today));
                    setChatRanker(dailyChampion); 
                    setTotalChat(dailyTotalChat);
                }catch{
                    setError({ error : "Nothing found" })
                }finally{
                    setLoading(false);
                }
            }else if(title === "채팅 랭킹" && selectedOption === optionsValue[1].value){
                // try{
                //     const {data : championRank} = await axios.get(`${baseURL}/daily-champion-rank/${filename}`, {
                //         params : {
                //             rewindNumDays : 1
                //             }
                //         }
                //         .then(res => { console.log(res); return res.date})
                //     )
                // }catch{
                //     setError({ error : "Nothing found" })
                // }finally{
                //     setLoading(false);
                // }
                console.log("weekly datas");
            }else if(title === "채팅 랭킹" && selectedOption === optionsValue[2].value){
                console.log("monthly datas");
            }
        };
        fetchChatRankingDatas();
    },[selectedOption])


    return (
        <Container>
        <CardHeader title={title} cardName = {cardName} handleOnChage={handleOnChage}/>
            { loading ? <Loader/> : 
            <>
            <CardGraph chatRanker = {chatRanker} totalChat = {totalChat} error = {error}/> 
            <CardLeaderboard chatRanker = {chatRanker} error = {error}/>
            </>
            }
        </Container>
    )
}


// return -> handleFunc -> useEffect * 초기에 return 직후 한 번 rendering 된다 그 이후로 electedOption가 변경 될 떄 마다 매번 rendering 시킨다.
// 이 말은!
// option의 value가 변경 되었을 떄 (useEffect 발동) 화면에 출력할 데이터를 바꿀수 있다는 말이다.