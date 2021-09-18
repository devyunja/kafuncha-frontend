import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { optionsValue } from '../../Const';
import axios from 'axios';
import CardLeaderboard from './CardLeaderboard';

const Container = styled.div`
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

export default function ChatHeader({title, handleOnChage}) { 
    // const [ selectedOption, setSelectedOption ] = useState(null);
    // const [ chatRanker, setChatRanker ] = useState([]); // 요청의 결과
    // const [ loading, setLoading ] = useState(true); // 요청 시작 시 로딩 상태를 true로
    // const [ error, setError ] = useState(null); 
    // // const date = new Date().toISOString().split('T')[0];  // 오늘 날짜 구하기
    // const date = new Date();
    // const year = date.getFullYear();
    // const month = date.getMonth() + 1;
    // const day = '09';
    // const today = `${year}-0${month}-${day}`;

    // useEffect(() => {
    //     if(cardName === "chatRanking" && selectedOption === "daily"){
    //             const fetchChatRanker = async () => {
    //                 try{
    //                     const { data } = await axios.get('https://programming.coffee/daily-champion-rank/c5111957-2d29-4914-9add-393206723900-1485868656441256377.csv');
    //                     const item = data.filter(item => item.date === String(today) && item.rank < 4);
    //                     console.log(item);
    //                     setChatRanker(item); 
    //                 }catch{
    //                     setError({ error : "Nothing found" })
    //                 }finally{
    //                     setLoading(false);
    //                 }
    //             };
    //             console.log(chatRanker);
        
    //             fetchChatRanker();
    //     }else if(cardName === "chatRanking" && selectedOption === "weekly"){
    //         console.log("chatRanker on weekly");
    //     }else if(cardName === "chatRanking" && selectedOption === "monthly"){
    //         console.log("chatRanker on monthly");
    //     }
    // }, [])

    return (
        <Container>
            <Header>
                <Title>{title}</Title>
                <Select onChange={ handleOnChage }>
                    {optionsValue.map((option, key) => 
                        <option value={option.value} key={option.index}>{option.label}</option>
                        )}
                </Select>
            </Header>
            {/* <CardLeaderboard 
                chatRanker = {chatRanker}
                loading = {loading}
                error = {error}
            /> */}
        </Container>
    )
}
