// import CardGraph from '../shared/CardGraph';
import CardLeaderboard from "../shared/CardLeaderboard";
import CardHeader from "../shared/CardHeader";
import styled from "styled-components";
import axios from "axios";
import Loader from "../Loader";
import { useEffect, useState } from "react";
import { optionsValue } from "../../Const";

const Container = styled.div`
  width: 200px;
  height: 250px;
  padding: 20px 10px;
  background-color: yellowgreen;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 900;
`;

const Select = styled.select``;

export default function ChatRank({ title }) {
  const [selectedOption, setSelectedOption] = useState(optionsValue[0].value);
  const [mentionRanker, setMentionRanker] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const date = new Date();
  const year = date.getFullYear();
  // const month = date.getMonth() + 1;
  const month = "09";
  const day = "09";
  const today = `${year}-${month}-${day}`;

  function handleOnChage(e) {
    const currentValue = e.target.value;
    setSelectedOption(currentValue);
  }
  //params 따로
  useEffect(() => {
    const fetchMentionRankingData = async () => {
      if (title === "멘션 랭킹" && selectedOption === optionsValue[0].value) {
        try {
          const { data: championRank } = await axios.get(
            "https://programming.coffee/mention/c5111957-2d29-4914-9add-393206723900-1485868656441256377.csv"
          );
          const dailyChampion = championRank.filter(
            (item) => item.date === String(today)
          );
          const addRankerProperty = dailyChampion.map((el, index) => ({
            ...el,
            rank: index + 1,
          }));
          setMentionRanker(addRankerProperty); // 비동기로 작동함
          console.log("mentionRanker in Fetch", mentionRanker);
          // setting 하는 동안 찍
        } catch {
          setError({ error: "Nothing found" });
        } finally {
          setLoading(false);
        }
      } else if (
        title === "멘션 랭킹" &&
        selectedOption === optionsValue[1].value
      ) {
        console.log("weekly datas");
      } else if (
        title === "멘션 랭킹" &&
        selectedOption === optionsValue[2].value
      ) {
        console.log("monthly datas");
      }
    };
    fetchMentionRankingData();
  }, [selectedOption]);
  console.log("mentionRanker ouside", mentionRanker);

  return (
    <Container>
      <CardHeader title={title} handleOnChage={handleOnChage} />
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <CardGraph chatRanker = {chatRanker} totalChat = {totalChat} error = {error}/>  */}
          <CardLeaderboard mentionRanker={mentionRanker} error={error} />
        </>
      )}
    </Container>
  );
}
