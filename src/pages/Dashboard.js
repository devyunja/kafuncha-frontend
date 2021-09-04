import ChatRank from '../components/cards/ChatRank';
import MentionRank from '../components/cards/MentionRank';
import MutedRank from '../components/cards/MutedRank';
import KeywordRank from '../components/cards/KeywordRank';

export function Dashboard() {
    return (
        <>
        <header className="dashboard-header">Kafuncha</header>
        <aside className="sideBar">side bar</aside>
        <main className="main">
            <ChatRank></ChatRank>
            <MentionRank></MentionRank>
            <MutedRank></MutedRank>
            <KeywordRank></KeywordRank>
        </main>
        </>
    )
}