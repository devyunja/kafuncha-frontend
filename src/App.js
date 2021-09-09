import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';


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
        <BrowserRouter>
              <Routes/>
        </BrowserRouter>
    );
}

export default App;