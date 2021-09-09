import CardHeader from './shared/cardHeader/ChatHeader';
import ChatLeaderboard from './shared/cardLeaderboard/ChatLeaderboard';
import ChatGraph from './shared/cardGraph/ChatGraph';
import styled from 'styled-components';

const Section = styled.section`
    width: 200px;
    height: 260px;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position:relative;
    background-color: lightgray;
`;

export default function ChatRank() {
    return (
        <Section className="card">
            <CardHeader/>
            <ChatGraph/>
            <ChatLeaderboard/>
        </Section>
    )
}

