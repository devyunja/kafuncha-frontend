import CardHeader from './shared/CardHeader';
import BarChart from './shared/BarChart';
import Leaderboard from './shared/Leaderboard';

export default function ChatRank() {
    return (
        <section className="chat-card">
            <CardHeader/>
            <BarChart/>
            <Leaderboard/>
        </section>
    )
}

