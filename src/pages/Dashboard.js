import ChatRankCard from "../components/cards/ChatRankCard";
import MentionRank from "../components/cards/MentionRank";
// import MutedRank from '../cards/MutedRank';
// import KeywordRank from '../cards/KeywordRank';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export default function Dashboard() {
  return (
    <Container className="main">
      <ChatRankCard title="채팅 랭킹"></ChatRankCard>
      <MentionRank title="멘션 랭킹"></MentionRank>
      {/* <MutedRank title = "잠수 인원"></MutedRank>
            <KeywordRank title = "키워드 랭킹"></KeywordRank> */}
    </Container>
  );
}
