import styled from 'styled-components';

const Container = styled.div``;

const Column = styled.div``;

const Name = styled.div``;

const Graph = styled.div`
    width: 200px;
    height: 4px;
    background-color: white;
`;

const GraphBar = styled.div`
    width: ${props => props.width}px;
    height: 4px;
    background-color: blue;
`;

export default function CardGraph({chatRanker, totalChat, error}) {
    const name = chatRanker.map((item,key) => item.user);
    const msgCount = chatRanker.map((item,key) => item.messageCount);
    
    const first = parseInt((msgCount[0] / totalChat[0].count) * 200);
    const second = parseInt((msgCount[1] / totalChat[0].count) * 200);
    const third = parseInt((msgCount[2] / totalChat[0].count) * 200);


    return(
        <Container>
            <Column>
                <Name>{name[0]}</Name>
                <Graph>
                    <GraphBar width = {first}></GraphBar>
                    {/* {(랭커 채팅 횟수 / 당일 총 채팅횟수) * 200 }px / 200px(그래프 길이) */}
                </Graph>
            </Column>
            <Column>
                <Name>{name[1]}</Name>
                <Graph>
                    <GraphBar width = {second}></GraphBar>
                </Graph>
            </Column>
            <Column>
                <Name>{name[2]}</Name>
                <Graph>
                    <GraphBar width = {third}></GraphBar>
                </Graph>
            </Column>
        </Container>
    )
}