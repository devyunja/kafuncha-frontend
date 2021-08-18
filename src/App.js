import React, {useEffect, useState} from 'react';
import './App.css'; 
import axios from 'axios';

  function App() {
      const [history, setHistory] = useState([]);

      useEffect(() => {
        fetchChatHistory();
      }, []);
    
      const fetchChatHistory = async () => {
        const res = await axios('https://programming.coffee/history');
        setHistory(res.data);
      };
      console.log('Hello World');
    return(
      <div>
        {history.map((history, index) => <div key={index}>[{history.date}] {history.user}: {history.message}</div>)}
      </div>
    );
}

export default App;