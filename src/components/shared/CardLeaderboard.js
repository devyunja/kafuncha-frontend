import styled from "styled-components";
import PropTypes from "prop-types";
import Error from "../Error";

const Container = styled.div``;

const Item = styled.div``;

export default function CardLeaderboard({ chatRanker, mentionRanker, error }) {
  const rank = chatRanker?.map((item, key) => item.rank);
  const name = chatRanker?.map((item, key) => item.user);
  const msgCount = chatRanker?.map((item, key) => item.messageCount);
  return (
    <Container>
      {chatRanker && chatRanker.length > 0 && (
        <>
          <Item>
            <span>{rank[0]}위</span>
            <span>{name[0]}</span>
            <span>{msgCount[0]}</span>
          </Item>
          <Item>
            <span>{rank[1]}위</span>
            <span>{name[1]}</span>
            <span>{msgCount[1]}</span>
          </Item>
          <Item>
            <span>{rank[2]}위</span>
            <span>{name[2]}</span>
            <span>{msgCount[2]}</span>
          </Item>
        </>
      )}
      {/* {mentionRanker && mentionRanker.length > 0 && <h4>hi</h4>} */}
      {error && <Error errorMsg={error} color="#535c68" />}
    </Container>
  );
}

CardLeaderboard.prototype = {
  chatRanker: PropTypes.array.isRequired,
  error: PropTypes.string,
};
