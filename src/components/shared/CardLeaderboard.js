import styled from 'styled-components';

const Container = styled.div`
    `;

const Item = styled.div``;

export default function CardLeaderboard({chatRanker, error}) {    
    console.log(chatRanker);
    const rank = chatRanker.map((item,key) => item.rank);
    const name = chatRanker.map((item,key) => item.user);
    const msgCount = chatRanker.map((item,key) => item.messageCount);
    
    // [
    //     chatRanker[0].user,
    //     chatRanker[1].user,
    //     chatRanker[2].user,
    // ]
    // const chatRakerRank = [
    //     chatRanker[0].rank,
    //     chatRanker[1].rank,
    //     chatRanker[2].rank,
    // ]
    // const chatRakerRank = [
    //     chatRanker[0].messageCount,
    //     chatRanker[1].messageCount,
    //     chatRanker[2].messageCount,
    // ]
    return(
        <Container>
            <Item>
                <span>{rank[0]}</span>
                <span>{name[0]}</span>
                <span>{msgCount[0]}</span>
            </Item>
            <Item>
                <span>{rank[1]}</span>
                <span>{name[1]}</span>
                <span>{msgCount[1]}</span>
            </Item>            <Item>
                <span>{rank[2]}</span>
                <span>{name[2]}</span>
                <span>{msgCount[2]}</span>
            </Item>
        </Container>
    )
}