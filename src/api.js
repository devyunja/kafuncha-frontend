import axios from "axios";

const filename = "c5111957-2d29-4914-9add-393206723900-1485868656441256377.csv";
const api = axios.create({
  baseURL: "https://programming.coffee",
});

// rewind 계산 = 최신날짜[0].date - rewindDays(0,2,6)
const date = new Date();
const today = date.getDate();
console.log(today - 1);

export const chatCardData = {
  dailyRanker: (num) => {
    return api.get(`/daily-champion-rank/${filename}`, {
      params: {
        rewindNumDays: num,
      },
    });
  },
};

export const mentionCardData = {
  mentionRanker: (num) => {
    return api.get("/daily-champion-rank/${filename}", {
      params: {
        rewindNumDays: num,
      },
    });
  },
};
