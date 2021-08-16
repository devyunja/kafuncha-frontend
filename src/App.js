import React, { Component} from 'react';
import './App.css'; 
import axios from 'axios';
import { useEffect, useState } from 'react';
import Data from './data';

  function App() {
        const [history, setHistory] = useState([]);
    
        useEffect(() => {
          fetchChatHistory();
        }, []);
      
        const fetchChatHistory = async () => {
          const res = await axios('https://programming.coffee/history');
          setHistory(res.data);
        };
      
    return(

      <div>
        <Data historyProps={history}/>
      </div>

    );

}


export default App;
