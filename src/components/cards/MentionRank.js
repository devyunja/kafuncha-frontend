import CardHeader from '../shared/CardHeader';
// import CardGraph from './shared/CardGraph';
// import CardLeaderboard from './shared/CardLeaderboard';
import styled from 'styled-components';

const Container = styled.div`
    width:200px;
    height:250px;
    padding:20px 10px;
    background-color: yellowgreen;
`;

export default function ChatRank() {
    return (
        <Container>
            <CardHeader
                title="멘션 랭킹"
                cardName="mentionRanking"
            />
            {/* <CardGraph></CardGraph>
            <CardLeaderboard></CardLeaderboard> */}
        </Container>
    )
}
