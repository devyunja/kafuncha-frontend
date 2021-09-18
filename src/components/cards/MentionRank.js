// import CardGraph from '../shared/CardGraph';
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

export default function ChatRank({title}) {
    const [ selectedOption, setSelectedOption ] = useState(optionsValue[0].label);
    const [ mentionRanker, setMentionRanker ] = useState([]);
    const [ loading, setLoading ] = useState(true); 
    const [ error, setError ] = useState(null); 

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
            if(title === "멘션 랭킹" && selectedOption === optionsValue[0].value){
                try{
                    const { data : championRank } = await axios.get('https://programming.coffee/mention/c5111957-2d29-4914-9add-393206723900-1485868656441256377.csv');
                    const dailyChampion = championRank.filter(item => item.date === String(today));
                    setMentionRanker(dailyChampion); 
                }catch{
                    setError({ error : "Nothing found" })
                }finally{
                    setLoading(false);
                }
            }else if(title === "멘션 랭킹" && selectedOption === optionsValue[1].value){
                console.log("weekly datas");
            }else if(title === "멘션 랭킹" && selectedOption === optionsValue[2].value){
                console.log("monthly datas");
            }
        };
        fetchChatRankingDatas();
    },[title, selectedOption, today])


    return (
        <Container>
                <Header>
                <Title>{title}</Title>
                <Select onChange={ handleOnChage } defaultValue= {selectedOption}>
                    {optionsValue.map((option, key) => 
                        <option value={option.value} key={option.index}>{option.label}</option>
                        )}
                </Select>
                </Header>

            { loading ? <Loader/> : 
            <>
            {/* <CardGraph chatRanker = {chatRanker} totalChat = {totalChat} error = {error}/>  */}
            <CardLeaderboard mentionRanker = {mentionRanker} error = {error}/>
            </>
            }
        </Container>
    )
}
