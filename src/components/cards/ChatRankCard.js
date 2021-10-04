import CardHeader from "../shared/CardHeader";
import CardGraph from "../shared/CardGraph";
import CardLeaderboard from "../shared/CardLeaderboard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader";
import { optionsValue } from "../../Const";

const Container = styled.div`
  width: 200px;
  height: 250px;
  padding: 20px 10px;
  background-color: yellowgreen;
`;

export default function ChatRankCard({ title }) {
  const [selectedOption, setSelectedOption] = useState(optionsValue[0].value);
  const [chatRanker, setChatRanker] = useState([]);
  const [totalChat, setTotalChat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL = "https://programming.coffee";
  const filename =
    "c5111957-2d29-4914-9add-393206723900-1485868656441256377.csv";
  const cardName = "chatRanking";

  const date = new Date();
  const year = date.getFullYear();
  const month = "09";
  const day = "09";
  const today = `${year}-${month}-${day}`;

  function handleOnChage(e) {
    const currentValue = e.target.value;
    setSelectedOption(currentValue);
  }

  useEffect(() => {
    const fetchChatRankingDatas = async () => {
      // 일별 랭킹 데이터
      if (title === "채팅 랭킹" && selectedOption === optionsValue[0].value) {
        try {
          const { data: championRank } = await axios.get(
            `${baseURL}/daily-champion-rank/${filename}`
          );
          const { data: totalRank } = await axios.get(
            `${baseURL}/daily-chat-count/${filename}`
          );
          const dailyChampions = championRank.filter((item) => {
            return item.date === String(today) && item.rank;
          });
          const dailyTotalChat = totalRank.filter(
            (item) => item.date === String(today)
          );
          setChatRanker(dailyChampions);
          setTotalChat(dailyTotalChat);
        } catch {
          setError({ error: "Nothing found" });
        } finally {
          setLoading(false);
        }
      }

      // 주별 랭킹 데이터
      else if (
        title === "채팅 랭킹" &&
        selectedOption === optionsValue[1].value
      ) {
        try {
          const emptyArray = {};
          const { data: championRank } = await axios.get(
            `${baseURL}/daily-champion-rank/${filename}`,
            {
              params: {
                rewindNumDays: 5,
              },
            }
          );
          const messageCount = championRank.map((el, key) => el.messageCount);
          const messageSum = messageCount.reduce((acc, cur) => acc + cur); // 최근 1주 전체 채팅 수
          const array2 = [];
          const obj2 = {};
          obj2["count"] = messageSum;
          array2.push(obj2);
          setTotalChat(array2);

          championRank.forEach(function (x) {
            if (emptyArray.hasOwnProperty(x.user)) {
              emptyArray[x.user] += x.messageCount;
            } else {
              emptyArray[x.user] = x.messageCount;
            }
          });

          // 내림차순으로 채팅횟수 정렬
          let rankersChat = [];
          const sortChat = Object.values(emptyArray).sort((a, b) => {
            return b - a;
          });
          for (let i = 0; i < 3; i++) {
            rankersChat.push(sortChat[i]);
          }

          // 데이터들에 property를 추가하여 새 배열에 넣어주기
          const valueFunc = (object, value) => {
            return Object.keys(object).find((key) => object[key] === value);
          };
          const array = [];
          for (let i = 0; i < 3; i++) {
            let obj = {};
            obj["user"] = valueFunc(emptyArray, rankersChat[i]);
            obj["messageCount"] = rankersChat[i];
            obj["rank"] = i + 1;
            array.push(obj);
          }
          setChatRanker(array);
        } catch {
          setError({ error: "Nothing found" });
        } finally {
          setLoading(false);
        }
      }

      // 월별 랭킹 데이터
      else if (
        title === "채팅 랭킹" &&
        selectedOption === optionsValue[2].value
      ) {
        try {
          const emptyArray = {};
          const { data: championRank } = await axios.get(
            `${baseURL}/daily-champion-rank/${filename}`,
            {
              params: {
                rewindNumDays: 28,
              },
            }
          );
          const messageCount = championRank.map((el, key) => el.messageCount);
          const messageSum = messageCount.reduce((acc, cur) => acc + cur); // 최근 1주 전체 채팅 수
          const array2 = [];
          const obj2 = {};
          obj2["count"] = messageSum;
          array2.push(obj2);
          setTotalChat(array2);

          championRank.forEach(function (x) {
            if (emptyArray.hasOwnProperty(x.user)) {
              emptyArray[x.user] += x.messageCount;
            } else {
              emptyArray[x.user] = x.messageCount;
            }
          });

          let rankersChat = [];
          const sortChat = Object.values(emptyArray).sort((a, b) => {
            return b - a;
          });
          for (let i = 0; i < 3; i++) {
            rankersChat.push(sortChat[i]);
          }

          const valueFunc = (object, value) => {
            return Object.keys(object).find((key) => object[key] === value);
          };
          const array = [];
          for (let i = 0; i < 3; i++) {
            let obj = {};
            obj["user"] = valueFunc(emptyArray, rankersChat[i]);
            obj["messageCount"] = rankersChat[i];
            obj["rank"] = i + 1;
            array.push(obj);
          }
          setChatRanker(array);
        } catch {
          setError({ error: "Nothing found" });
        } finally {
          setLoading(false);
        }
      }
    };
    fetchChatRankingDatas();
  }, [selectedOption]);

  return (
    <Container>
      <CardHeader
        title={title}
        cardName={cardName}
        handleOnChage={handleOnChage}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          <CardGraph
            chatRanker={chatRanker}
            totalChat={totalChat}
            error={error}
          />
          <CardLeaderboard chatRanker={chatRanker} error={error} />
        </>
      )}
    </Container>
  );
}
