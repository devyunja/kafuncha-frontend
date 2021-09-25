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
                    const dailyChampions = championRank.filter(item => item.date === String(today) && item.rank < 4);
                    const dailyTotalChat = totalRank.filter(item => item.date === String(today));
                    setChatRanker(dailyChampions); 
                    setTotalChat(dailyTotalChat);
                }catch{
                    setError({ error : "Nothing found" })
                }finally{
                    setLoading(false);
                }
            }else if(title === "채팅 랭킹" && selectedOption === optionsValue[1].value){
                try{
                    const emptyArray = {};
                    const {data : championRank} = await axios.get(`${baseURL}/daily-champion-rank/${filename}`, {
                        params : {
                            rewindNumDays : 5
                            }
                        }
                    )
                    const messageCount = championRank.map((el, key)=> el.messageCount);
                    const messageSum = messageCount.reduce((acc, cur) => acc + cur); // 최근 1주 전체 채팅 수                     
                    const array2 = [];
                    const obj2 = {};
                    obj2['count'] = messageSum;
                    array2.push(obj2);
                    setTotalChat(array2);

                    championRank.forEach(function(x){
                        if(emptyArray.hasOwnProperty(x.user)){
                            emptyArray[x.user] += x.messageCount;
                        }else{
                            emptyArray[x.user] = x.messageCount;
                        }
                    });
                    
                    let rankersChat = [];
                    const sortChat = Object.values(emptyArray).sort((a,b) => { return b - a}); // 내림차순으로 채팅횟수 정렬
                    for(let i = 0; i < 3; i++){
                        rankersChat.push(sortChat[i]); 
                    }
                    
                    const valueFunc = (object, value) => {
                        return Object.keys(object).find(key => object[key] === value)
                    }
        
                    const array = [];

                    for(let i = 0; i < 3; i++){
                        let obj = {};
                        obj['user'] = valueFunc(emptyArray, rankersChat[i]);
                        obj['messageCount'] = rankersChat[i];
                        obj['rank'] = i + 1;
                        array.push(obj);
                    }
                    setChatRanker(array);
                    // for(let i = 0; i < rankersChat.length; i++){
                    //     getNameByValue(emptyArray, rankersChat[i])[rankersChat[i]] = rankersChat[i];
                    // }
                    // if(Object.values(emptyArray).includes(rankersChat[0])){
                    //     console.log(Object.values(emptyArray).filter(el => el === rankersChat[0]))
                    //     console.log(Object.keys(Object.values(emptyArray).filter(el => el === rankersChat[0]))) // value가 rankersChat[0]인 key를 뽑는다.
                    // }
                    

                    // const king = Object.values(counts).sort(function(a, b){ return b - a }); // value가 가장 큰 key 값을 뽑아온다.
                    
                    // const filtered2 = [...new Set(filtered)];
                    // const weeklyChampions = championRank.filter()
                    // 주별 랭킹 1위의 총 채팅 수 (74)/ 일주일 간 전체 채팅 수  (64)
                    
                }catch{
                    setError({ error : "Nothing found" })
                }finally{
                    setLoading(false);
                }
            }else if(title === "채팅 랭킹" && selectedOption === optionsValue[2].value){
                try{
                    const emptyArray = {};
                    const {data : championRank} = await axios.get(`${baseURL}/daily-champion-rank/${filename}`, {
                        params : {
                            rewindNumDays : 28
                            }
                        }
                    )
                    const messageCount = championRank.map((el, key)=> el.messageCount);
                    const messageSum = messageCount.reduce((acc, cur) => acc + cur); // 최근 1주 전체 채팅 수                     
                    const array2 = [];
                    const obj2 = {};
                    obj2['count'] = messageSum;
                    array2.push(obj2);
                    setTotalChat(array2);

                    championRank.forEach(function(x){
                        if(emptyArray.hasOwnProperty(x.user)){
                            emptyArray[x.user] += x.messageCount;
                        }else{
                            emptyArray[x.user] = x.messageCount;
                        }
                    });
                    
                    let rankersChat = [];
                    const sortChat = Object.values(emptyArray).sort((a,b) => { return b - a}); // 내림차순으로 채팅횟수 정렬
                    for(let i = 0; i < 3; i++){
                        rankersChat.push(sortChat[i]); 
                    }
                    
                    const valueFunc = (object, value) => {
                        return Object.keys(object).find(key => object[key] === value)
                    }
                    
                    const array = [];

                    for(let i = 0; i < 3; i++){
                        let obj = {};
                        obj['user'] = valueFunc(emptyArray, rankersChat[i]);
                        obj['messageCount'] = rankersChat[i];
                        obj['rank'] = i + 1;
                        array.push(obj);
                    }
                    setChatRanker(array);
                }catch{
                    setError({ error : "Nothing found" })
                }finally{
                    setLoading(false);
                }
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
