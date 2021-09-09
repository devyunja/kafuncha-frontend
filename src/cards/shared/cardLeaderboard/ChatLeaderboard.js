import React from 'react';
import { chatApi } from '../../../api';
import styled from 'styled-components';

const LeaderBoard = styled.div`
position:absolute;
bottom:0;
left:0;
height:30%;
width:100%;
`;

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    padding : 10px;
`;

const Item = styled.div`
    display:flex;
    justify-content: space-around;
`;

export default class ChatLeaderboard extends React.Component{
    
state = {
    result : null,
    error : null,
    isLoading : true
}

async componentDidMount(){
    try{
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const today = String(`${year}-${month < 10 ? `0${month}` : month}-03`);  // 최신 날짜 어떻게 가져와야할까

        const { data } = await chatApi.get("daily-champion-rank/02193f7c-dad9-479c-ab6f-ae919f27c9de-1411779081052338678.csv");
        const ranker = data.filter(item => item.date === today && item.rank < 4);
        this.setState({
            result : ranker,
            isLoading : false
        })
    }catch{
        this.setState({ error : "What the heck?"})
    }finally{
        this.setState({ isLoading : false})
    }
}

        render(){
            const { result, isLoading } = this.state;
            return (
                <LeaderBoard className="leaderBoard leaderBoard__upto3rd">
                    <Wrapper className ="leaderBoard-wraper">
                            <Item>
                            {isLoading ? "Loading.." : 
                                <>
                                <div>{result[0].rank}위</div>
                                <div>{result[0].name}</div>
                                <div>{result[0].messageCount}</div>
                                </>
                                }
                            </Item>
                            <Item>
                            {isLoading ? "Loading.." : 
                                <>
                                <div>{result[1].rank}위</div>
                                <div>{result[1].name}</div>
                                <div>{result[1].messageCount}</div>
                                </>
                                }
                            </Item>           
                            <Item>
                            {isLoading ? "Loading.." : 
                                <>
                                <div>{result[2].rank}위</div>
                                <div>{result[2].name}</div>
                                <div>{result[2].messageCount}</div>
                                </>
                                }
                            </Item>
                    </Wrapper>
                </LeaderBoard>
            )
        } 
    }