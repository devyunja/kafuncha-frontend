import styled from "styled-components";
import PropTypes from "prop-types";
import Error from "../Error";

const Container = styled.div``;

const Item = styled.div``;

export default function CardLeaderboard({ chatRanker, mentionRanker, error }) {
  const rank = chatRanker
    ? chatRanker.map((item, key) => item.rank)
    : mentionRanker.map((item, key) => item.rank);
  const name = chatRanker
    ? chatRanker.map((item, key) => item.user)
    : mentionRanker.map((item, key) => item.user);
  const count = chatRanker
    ? chatRanker.map((item, key) => item.messageCount)
    : mentionRanker.map((item, key) => item.mentionCount);

  console.log("mentionRanker in Leaderboard", mentionRanker);
  // 초기 런데링 단계에서 undefined 가 출력됌
  // 일 별 데이터를 한번 클릭한 후엔 데아터가 제대로 들어옴
  return (
    <Container>
      {chatRanker && chatRanker.length > 0 && (
        <>
          <Item>
            <span>{rank[0]}위</span>
            <span>{name[0]}</span>
            <span>{count[0]}</span>
          </Item>
          <Item>
            <span>{rank[1]}위</span>
            <span>{name[1]}</span>
            <span>{count[1]}</span>
          </Item>
          <Item>
            <span>{rank[2]}위</span>
            <span>{name[2]}</span>
            <span>{count[2]}</span>
          </Item>
        </>
      )}
      {mentionRanker && mentionRanker.length > 0 && (
        <>
          <Item>
            <span>{rank[0]}위</span>
            <span>{name[0]}</span>
            <span>{count[0]}</span>
          </Item>
          <Item>
            <span>{rank[1]}위</span>
            <span>{name[1]}</span>
            <span>{count[1]}</span>
          </Item>
          <Item>
            <span>{rank[2]}위</span>
            <span>{name[2]}</span>
            <span>{count[2]}</span>
          </Item>
        </>
      )}
      {error && <Error errorMsg={error} color="#535c68" />}
    </Container>
  );
}

CardLeaderboard.prototype = {
  chatRanker: PropTypes.array.isRequired,
  error: PropTypes.string,
};
