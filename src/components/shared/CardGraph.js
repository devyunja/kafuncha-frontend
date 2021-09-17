import styled from 'styled-components';

const Container = styled.div``;

const Column = styled.div``;

const Name = styled.div``;

const Graph = styled.div``;

const GraphBar = styled.div``;

export default function CardGraph({chatRanker, error}) {
    console.log(chatRanker);
    return(
        <Container>
            <Column>
                <Name></Name>
                <Graph>
                    <GraphBar></GraphBar>
                </Graph>
            </Column>
            <Column>
                <Name></Name>
                <Graph>
                    <GraphBar></GraphBar>
                </Graph>
            </Column>
            <Column>
                <Name></Name>
                <Graph>
                    <GraphBar></GraphBar>
                </Graph>
            </Column>
        </Container>
    )
}