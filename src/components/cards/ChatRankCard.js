import CardHeader from '../shared/CardHeader';
import CardGraph from '../shared/CardGraph';
import CardLeaderboard from '../shared/CardLeaderboard';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader';

const Container = styled.div`
    width:200px;
    height:250px;
    padding:20px 10px;
    background-color: yellowgreen;
`;

export default function ChatRank() {
    const [ chatRanker, setChatRanker ] = useState([]);
    const [ loading, setLoading ] = useState(true); 
    const [ error, setError ] = useState(null); 
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = '09';
    const today = `${year}-0${month}-${day}`;


    useEffect(() => {
        const fetchChatRanker = async () => {
            try{
                const { data } = await axios.get('https://programming.coffee/daily-champion-rank/c5111957-2d29-4914-9add-393206723900-1485868656441256377.csv');
                const item = data.filter(item => item.date === String(today) && item.rank < 4);
                setChatRanker(item); 
            }catch{
                setError({ error : "Nothing found" })
            }finally{
                setLoading(false);
            }
        };

        fetchChatRanker();
    },[])

    return (
        <Container>
            <CardHeader 
                title="채팅 랭킹"
                cardName="chatRanking"
            />
            { loading ? <Loader/> : 
            <>
            <CardGraph
                chatRanker = {chatRanker}
                error = {error}
            /> 
            <CardLeaderboard
                chatRanker = {chatRanker}
                error = {error}
            />
            </>}
        </Container>
    )
}
