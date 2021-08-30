import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function ShowChatHistory(){
    console.log('111');
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