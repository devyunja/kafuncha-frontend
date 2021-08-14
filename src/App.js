import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchChatHistory();
  }, []);

  const fetchChatHistory = async () => {
    const res = await axios('https://programming.coffee/history');
    setHistory(res.data);
  };

  return (
    <div>
      {history.map((history, index) => <div key={index}>[{history.date}] {history.user}: {history.message}</div>)}
    </div>
  );
}

export default App;
