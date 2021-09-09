import ChatRank from '../cards/ChatRank';
import MentionRank from '../cards/MentionRank';
// import MutedRank from '../cards/MutedRank';
// import KeywordRank from '../cards/KeywordRank';
// import styled from 'styled-components';

// const Div = styled.div`
// background-color:yellowgreen
// `;

export function Dashboard() {
    return (
        <>

        <main className="main">
            <ChatRank></ChatRank>
            {/* <MentionRank></MentionRank>
            <MutedRank></MutedRank>
            <KeywordRank></KeywordRank> */}
        </main>
        </>
    )
}